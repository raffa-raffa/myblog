import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./News.module.css";


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
        setNews(response.data.articles.slice(0, 9)); // Pegando apenas as primeiras 12 notícias
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    };
  
    fetchNews();
  }, []);
  

  return (
    <div >
      <h2>Últimas Notícias do Brasil</h2>
      <ul>
      <div className={styles.container}>
  {news.map((article, index) => (
    <li key={index} className={styles.card}>
      {article.urlToImage && <img src={article.urlToImage} alt="Imagem da notícia" />}
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Leia mais</a>
    </li>
  ))}
</div>
      </ul>
    </div>
  );
};

export default NewsSection;
