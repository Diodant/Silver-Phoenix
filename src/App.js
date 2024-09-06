import React from 'react';
import {  HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
// import Jury from './components/Jury';
// import WinnersPage from './components/WinnersPage';
// import AboutUsPage from './components/AboutUsPage';
// import CriteriaPage from './components/CriteriaPage';
// import PositionPage from './components/PositionPage';
// import GrandPrixPage from './components/GrandPrixPage';
// import ArticlesList from './components/ArticlesList';
// import Article from './components/Article';
// import ApplyForm from './components/ApplyForm';
// import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutUsPage />} />
        <Route path="/criteria" element={<CriteriaPage />} /> 
        <Route path="/position" element={<PositionPage />} />
        <Route path="/winners" element={<WinnersPage />} />
        <Route path="/jury" element={<Jury />} />
        <Route path="/grandprix" element={<GrandPrixPage />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/apply" element={<ApplyForm />} />
        <Route path="/contacts" element={<Contacts />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
