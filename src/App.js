import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content p-45">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="search" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap align-center">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
