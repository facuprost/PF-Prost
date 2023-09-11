import { Link } from 'react-router-dom';
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Amapro</Link>
      <div className="nav-list">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/1" className="nav-link">Jordan</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/2" className="nav-link">Adidas</Link>
          </li>
          <li className="nav-item">
            <Link to="/category/3" className="nav-link">Nike</Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

