import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ShopPage from './components/ShopPage/ShopPage';
import CartPage from './components/CartPage/CartPage';
import Register from './features/Register/Register';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/shop" element={ <ShopPage /> } />
        <Route path="/cart" element={ <CartPage /> } />
        <Route path="/register" element={ <Register /> } />
      </Routes>
    </div>
  );
}

export default App;
