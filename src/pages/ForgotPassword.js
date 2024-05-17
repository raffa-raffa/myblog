import React, { useState } from 'react';
import { auth } from './firebase'; // Importe o módulo de autenticação do Firebase

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleResetPassword = async () => {
    try {
      setIsSendingEmail(true);
      await auth.sendPasswordResetEmail(email); // Envia o e-mail de redefinição de senha
      setEmailSent(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <div>
      <h2>Redefinir Senha</h2>
      {emailSent ? (
        <p>Um e-mail foi enviado com instruções para redefinir sua senha.</p>
      ) : (
        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={isSendingEmail}>
            Enviar E-mail de Redefinição
          </button>
          {error && <p>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default ForgotPasswordScreen;
