import Card from '../components/Сard';

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
}) {
  return (
    <div className="content p-45">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input
            type="search"
            placeholder="Поиск..."
            value={searchValue}
            onChange={onChangeSearchInput}
          />
          {searchValue && (
            <img
              className="search-block-clear"
              src="/img/close.svg"
              alt="Clear"
              onClick={() => {
                setSearchValue('');
              }}
            />
          )}
        </div>
      </div>
      <div className="d-flex flex-wrap align-center justify-between">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
