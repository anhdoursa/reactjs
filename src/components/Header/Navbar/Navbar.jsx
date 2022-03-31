import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import categoryApi from '../../../api/categoryApi';

function Navbar() {
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await categoryApi.getAll();
      console.log(data);
    };
    fetchCategories();
  });
  return (
    <div id="navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
