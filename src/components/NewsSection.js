import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "./News.module.css";

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [displayNews, setDisplayNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'br',
          apiKey: process.env.NEWS_API_KEY
        }
      });
      setNews(response.data.articles.slice(0, 18)); 
      setDisplayNews(response.data.articles.slice(0, 9)); 
    } catch (error) {
      console.error('Erro ao buscar notícias:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      const interval = setInterval(() => {
        setDisplayNews(news.slice(currentIndex, currentIndex + 9));
        setCurrentIndex(prevIndex => (prevIndex + 9) % 18);
      }, 15000); 
      
      return () => clearInterval(interval); 
    }
  }, [news, currentIndex]);

  return (
    <div>
      <h2>Últimas Notícias do Brasil</h2>
      <ul className={styles.container}>
        {displayNews.map((article, index) => {
          const randomBackground = Math.floor(Math.random() * 3) + 1; // Altere o número para o número total de classes de background
          const backgroundClass = `background-${randomBackground}`; // Classe de background aleatória
          
          return (
            <li key={index} className={`${styles.card} ${styles[backgroundClass]}`}>
              {article.urlToImage && <img src={article.urlToImage} alt="Imagem da notícia" />}
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Leia mais</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewsSection;
