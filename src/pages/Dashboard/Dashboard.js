import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";


const Dashboard = () => {

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
        <div className={styles.post_header}>
          <span>Título</span>
          <span>Ações</span>
        </div>

          <div className={styles.post_row}>
            <p>Titulo</p>
            <div className={styles.actions}>
                Ver
                Editar
              <button
                onClick={() => console.log('excluir')}
                className="btn btn-outline btn-danger"
              >
                Excluir
              </button>
            </div>
          </div>
    </div>
  );
};

export default Dashboard;