import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const meetsPolicy = (value) => {
  const hasLength = value.length >= 8;
  const hasUppercase = /[A-Z]/.test(value);
  const hasNumber = /\d/.test(value);
  return hasLength && hasUppercase && hasNumber;
};

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [policyError, setPolicyError] = useState(false);
  const [matchError, setMatchError] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const policyOk = meetsPolicy(password);
    const matches = password === confirmPassword && confirmPassword.length > 0;

    setPolicyError(!policyOk);
    setMatchError(!matches);

    if (!policyOk || !matches) {
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      navigate('/reset-success');
    }, 1000);
  };

  return (
    <div className="card">
      <h1 className="card-title">Restablecer contraseña</h1>
      <form className="card-form" onSubmit={handleSubmit} noValidate>
        <label className="input-group">
          <span className="input-label">Nueva contraseña</span>
          <input
            className={`input-field ${policyError ? 'input-error' : ''}`}
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              if (policyError && meetsPolicy(event.target.value)) {
                setPolicyError(false);
              }
            }}
            placeholder="********"
          />
        </label>
        {policyError && (
          <p className="feedback error-text">Debe cumplir la política de seguridad.</p>
        )}
        <label className="input-group">
          <span className="input-label">Confirmar contraseña</span>
          <input
            className={`input-field ${matchError ? 'input-error' : ''}`}
            type="password"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
              if (matchError && event.target.value === password) {
                setMatchError(false);
              }
            }}
            placeholder="********"
          />
        </label>
        {matchError && (
          <p className="feedback error-text">Las contraseñas no coinciden.</p>
        )}
        <button className="primary-button" type="submit" disabled={isProcessing}>
          {isProcessing ? 'Guardando...' : 'Guardar'}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
