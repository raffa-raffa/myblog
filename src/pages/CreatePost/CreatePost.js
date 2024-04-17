import styles from "./CreatePost.module.css";

const CreatePost = () => {

  return (
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="text"
            required
            placeholder="Pense num bom título..."
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que representa seu post"
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
          />
        </label>
          <button className="btn" disabled>
            Aguarde.. .
          </button>
      </form>
    </div>
  );
};

export default CreatePost;