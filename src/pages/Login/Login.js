import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

    console.log(res);
  };

  useEffect(() => {
    console.log(authError);
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="login">
      <div className={styles.box}> {/* Usando styles.box para aplicar a classe */}
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
          {!loading && <button className="btn">Login</button>}
          {loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
