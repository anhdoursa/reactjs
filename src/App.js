import HomePage from 'components/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import CartPage from './components/CartPage/CartPage';
import Header from './components/Header/Header';
import ShopPage from './components/ShopPage/ShopPage';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/shop" element={ <ShopPage /> } />
        <Route path="/cart" element={ <CartPage /> } />
      </Routes>
    </div>
  );
}

export default App;
