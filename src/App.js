import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get('https://613a4e511fcce10017e78e42.mockapi.io/items')
      .then((response) => setItems(response.data));
    axios
      .get('https://613a4e511fcce10017e78e42.mockapi.io/cart')
      .then((response) => setCartItems(response.data));
    axios
      .get('https://613a4e511fcce10017e78e42.mockapi.io/favorites')
      .then((response) => setFavorites(response.data));
  }, []);

  console.log(favorites);

  const onAddToCart = (obj) => {
    axios.post('https://613a4e511fcce10017e78e42.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://613a4e511fcce10017e78e42.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://613a4e511fcce10017e78e42.mockapi.io/favorites/${obj.id}`
        );
        // setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          'https://613a4e511fcce10017e78e42.mockapi.io/favorites',
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>
      <Route path="/favorites" exact>
        <Favorites favorites={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
    </div>
  );
}

export default App;
