import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import backgroundImage from '../img/Footer-Img.jpg'; 

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src={logo} alt="Silver Phoenix Awards" className="footer-logo" />
          <p>
            Международная премия в области кино и телевидения, признание лучших профессионалов киноиндустрии.
          </p>
          {/* <p className="support-center">
            Телефон <br />
            <a href="tel:+123456789">+1 123-456-789</a>
          </p> */}
        </div>

        <div className="footer-links-section">
          <h4>Навигация</h4>
          <ul className="footer-list">
            <li className="footer-item"><Link to="/">Главная</Link></li>
            <li className="footer-item"><Link to="/articles">Статьи</Link></li>
            <li className="footer-item"><Link to="/contacts">Контакты</Link></li>
          </ul>
        </div>

        <div className="footer-info-section">
          <h4>Премия</h4>
          <ul className="footer-list">
          <li className="footer-item"><Link to="/position">Положение</Link></li>
            <li className="footer-item"><Link to="/winners">Победители</Link></li>
            <li className="footer-item"><Link to="/jury">Жюри</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;
