import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import burgerIcon from '../img/menu_17466330.svg'; 
import closeIcon from '../img/cancel_17466309.svg'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Site Logo" className="logo" />
        </Link>
      </div>
      <button className="menu-toggle-btn" onClick={toggleMenu}>
        <img src={menuOpen ? closeIcon : burgerIcon} alt="Menu Icon" />
      </button>
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/" onClick={toggleMenu}>Главная</Link>
          </li>
          <li className="menu-item">
            <Link to="/about" onClick={toggleMenu}>О премии</Link>
          </li>
          <li className="menu-item">
            <Link to="/position" onClick={toggleMenu}>Положение</Link>
          </li>
          <li className="menu-item">
            <Link to="/winners" onClick={toggleMenu}>Победители</Link>
          </li>
          <li className="menu-item">
            <Link to="/jury" onClick={toggleMenu}>Жюри</Link>
          </li>
          <li className="menu-item">
            <Link to="/articles" onClick={toggleMenu}>Статьи</Link>
          </li>
          <li className="menu-item">
            <Link to="/contacts" onClick={toggleMenu}>Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
