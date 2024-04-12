import styles from "./Register.module.css";
import {useState} from "react"
import { useAuthentication } from "../../hooks/useAuthentication"

const Register = () => {

 const [displayName, setDisplayName] = useState("")
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [confirmPassword, setConfirmPassword] = useState("")
 const [error, setError] = useState("")
 const [createUser,  authError, loading] = useAuthentication()

const handleSubmit = async (e) =>{
e.preventDefault()
setError("")

const user= {
  displayName,
  email,
  password
}

 if(password !== confirmPassword){
setError("As senhas precisam ser iguais!")
return}

const res = await createUser(user)
console.log(user)
}

 return (
    <div className={styles.register}>
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit} >
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            value={displayName}
            onChange={(e)=> setDisplayName(e.target.value)}
            />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira a senha"
            value={password}
          onChange={(e)=> setPassword(e.target.value)}
            />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a senha"
            value={confirmPassword}
            onChange={(e)=> setConfirmPassword(e.target.value)}
            />
        </label>
        <button className="btn">Entrar</button>
         {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;