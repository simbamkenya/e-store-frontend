import './App.css';
import ShopByCategories from './components/ShopByCategories';
import Banner from './components/Banner';
import Header from './components/Header'
import ProductList from './components/ProductList';
import Order from './components/Order';
import Cart from './components/Cart';

function App() {
  return (
    <>
    <Header />
    <Banner />
    <ProductList />
    <ShopByCategories />
    <Order />
    <Cart />
    </>
  );
}

export default App;
