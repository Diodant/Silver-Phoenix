import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import articlesData from './articlesData'; 
import PageHeader from './PageHeader';

const ArticlesList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return ( 
    <>
<PageHeader title="Статьи" breadcrumb="Статьи" />
    <div className="articles-page">
      <div className="articles-container">
        {articlesData.map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-info">
              <h2 className="article-title"><Link to={`/articles/${article.id}`}>{article.title}</Link></h2>
              <div className="article-meta">
                <span className="article-date">{article.date}</span>
              </div>
              <div className="article-text">{article.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ArticlesList;
