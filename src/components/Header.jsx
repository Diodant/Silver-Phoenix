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
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li className="menu-item">
            <Link to="/criteria" onClick={toggleMenu}>Criteria</Link>
          </li>
          <li className="menu-item">
            <Link to="/position" onClick={toggleMenu}>Position</Link>
          </li>
          <li className="menu-item">
            <Link to="/winners" onClick={toggleMenu}>Winners</Link>
          </li>
          <li className="menu-item">
            <Link to="/jury" onClick={toggleMenu}>Jury</Link>
          </li>
          <li className="menu-item">
            <Link to="/grandprix" onClick={toggleMenu}>Grand Prix</Link>
          </li>
          <li className="menu-item">
            <Link to="/articles" onClick={toggleMenu}>Articles</Link>
          </li>
          <li className="menu-item">
            <Link to="/apply" onClick={toggleMenu}>Apply</Link>
          </li>
          <li className="menu-item">
            <Link to="/contacts" onClick={toggleMenu}>Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
