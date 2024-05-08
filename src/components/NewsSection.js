import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'br',
            apiKey: process.env.REACT_NEWS_API_KEY
          }
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    };

    fetchNews();
    console.log(news,'news')
  }, []);

  return (
    <div>
      <h2>Últimas Notícias do Brasil</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            {article.urlToImage && <img src={article.urlToImage} alt="Imagem da notícia" />}
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Leia mais</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsSection;
