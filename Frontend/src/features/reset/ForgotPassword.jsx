import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) {
      setError('El email es requerido');
      setConfirmation('');
      return;
    }

    setError('');
    setIsProcessing(true);
    setConfirmation('Si existe una cuenta, enviamos un enlace.');

    setTimeout(() => {
      setIsProcessing(false);
      navigate('/reset-password');
    }, 1200);
  };

  return (
    <div className="card">
      <h1 className="card-title">Olvidé mi contraseña</h1>
      <form className="card-form" onSubmit={handleSubmit} noValidate>
        <label className="input-group">
          <span className="input-label">Correo electrónico</span>
          <input
            className={`input-field ${error ? 'input-error' : ''}`}
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError('');
              setConfirmation('');
            }}
            placeholder="correo@bakersoft.com"
          />
        </label>
        {error && <p className="feedback error-text">{error}</p>}
        {confirmation && !error && <p className="feedback success-text">{confirmation}</p>}
        <button className="primary-button" type="submit" disabled={isProcessing}>
          {isProcessing ? 'Enviando...' : 'Enviar enlace'}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
