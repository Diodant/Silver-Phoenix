import React from 'react';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Jury from './components/Jury';
import AboutUsPage from './components/AboutUsPage';
import WinnersPage from './components/WinnersPage';
import Position from './components/Position';
import Contacts from './components/ContactPage';
import Nominations from './components/Nominations';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/position" element={<Position />} />
        <Route path="/jury" element={<Jury />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/winners" element={<WinnersPage />} />
        <Route path="/nominations" element={<Nominations />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:id" element={<Article />} />
         <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
