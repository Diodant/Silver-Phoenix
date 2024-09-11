import React from 'react';
import backgroundImage from '../img/heder-img.jpg';

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay"></div>
      <h1>{title}</h1>
      <nav className="breadcrumb">
        <a href="/">Главная</a> / {breadcrumb}
      </nav>
    </div>
  );
};

export default PageHeader;
