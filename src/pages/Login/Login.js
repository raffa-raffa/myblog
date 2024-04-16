import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, error: authError } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const user = { email, password };
      await login(user);
    } catch (error) {
      setError("Credenciais inválidas. Por favor, verifique seu e-mail e senha.");
      setTimeout(() => {
        setLoading(false); 
      }, 3000);
    }
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
      setTimeout(() => {
        setLoading(false); 
      }, 3000); 
    }
  }, [authError]);

  return (
    <div className={styles.login}>
    <div className={styles.image}></div>
      <div className={styles.box}>
        <p>Login</p>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              required
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Aguarde..." : "Login"}
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
