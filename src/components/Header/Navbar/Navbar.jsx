import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import categoryApi from '../../../api/categoryApi';
import './Navbar.css';
function Navbar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await categoryApi.getAll();
      setCategories(data);
    };
    fetchCategories();
  }, []);
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
        {categories &&
          categories.map((category) => (
            <li key={category.id}>
              <NavLink to={category.url}>{category.name}</NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Navbar;
