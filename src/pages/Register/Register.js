import styles from "./Register.module.css";

const Register = () => {

 
  return (
    <div className={styles.register}>
      <h1>Cadastre-se</h1>
      <form >
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira a senha"
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a senha"
          />
        </label>
        <button className="btn">Entrar</button>
         
      </form>
    </div>
  );
};

export default Register;