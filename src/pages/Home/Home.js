// src/pages/Home/Home.js
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { Link } from "react-router-dom";

// react
import { useState } from "react";

// components
import PostDetail from "../../components/PostDetails";
import NewsSection from "../../components/NewsSection";

const Home = () => {
  const { documents: posts, loading } = useFetchDocuments("posts");

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const [visiblePosts, setVisiblePosts] = useState(4);

  

  const handleShowMore = (e) => {
    e.preventDefault();
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 4); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  console.log(loading);

  return (
    <div className={styles.home}>
      <div className={styles.head}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
          />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
    
          </div>
      <div className={styles.postlist}>
        {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
        {posts && posts.slice(0, visiblePosts).map((post) => (
          <PostDetail key={post.id} post={post} />
        ))}
      </div>
      <div className={styles.visiblePosts}>
      {posts && visiblePosts < posts.length && (
        <a href="#" onClick={handleShowMore} className={styles.loadMore}>
          Ver mais posts
        </a>
      )}
      </div>
      <NewsSection />
    </div>
  );
};

export default Home;
