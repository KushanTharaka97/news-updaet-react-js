// src/News.js
import React, { useState, useEffect } from 'react';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = ''; // Replace with your News API key
    const category = 'entertainment'; // Set the category to 'entertainment' for celebrity news
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;


    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, []);

 
  return (
    <div>
      <h2>Latest News</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {news.map((article) => (
            <li key={article.title}>
              <img src={article.urlToImage} alt={article.title} style={{ maxWidth: '100%', maxHeight: '150px' }} />
              <strong>{article.title}</strong>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;
