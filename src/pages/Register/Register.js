import React, { useEffect } from 'react'
import styles from "./Register.module.css"
import { useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
import {db} from "../../firebase/config"

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const {createUser, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
     e.preventDefault()

     setError("")

    const user = {
    displayName,
    email,
    password,
    confirmPassword
  }
  if(password !== confirmPassword){
  setError("As senhas precisam ser iguais!")
  return
}
const res = await createUser(user)
console.log(res)
  }

useEffect(()=>{
  if(authError){
  setError(authError)}
})
  return (
    <div className="register">
    <div className={styles.box}>
   
   <p>Criar conta</p>
   <form onSubmit={handleSubmit}>
    <label>
        <input type="text" name="displayName" required placeholder="Nome" value={displayName} onChange={(e)=> setDisplayName(e.target.value)}/></label>
        <label>
        <input type="email" name="email" required placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/></label>
        <label>
        <input type="password" name="password" required placeholder="Senha" value={password} onChange={(e)=> setPassword(e.target.value)}/></label> <label>
        <input type="password" name="ConfirmPassword" required placeholder="Confirme sua Senha" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/></label>
       {!loading &&  <button className='btn' >Cadastrar</button>}
       {loading && <button className='btn' disabled >Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
        </form></div>
        </div>
  )
}

export default Register