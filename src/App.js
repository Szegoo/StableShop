import ItemContainer from './components/ItemContainer';
import Menu from './components/Menu';
import SearchIcon from './components/SearchIcon';
function App(props) {
  console.log(props);
  return (
    <div>
      <header className="desktop-header">
        <h2>Stable Shop</h2>
        <input className="search-bar" placeholder="enter the name of the product" />
      </header>
      <header className="mobile-header">
        <h3>Stable Shop</h3>
        <div className="mobile-search-bar">
          <input placeholder="product name" />
          <div className="menu__toggle"></div>
          <SearchIcon className="search-icon" />
        </div>
      </header>
      <div className="container">
        <Menu />
        <ItemContainer />
      </div>
    </div>
  );
}

export default App;
