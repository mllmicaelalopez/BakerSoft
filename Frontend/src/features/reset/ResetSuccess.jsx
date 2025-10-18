import { Link } from 'react-router-dom';

const ResetSuccess = () => {
  return (
    <div className="card">
      <h1 className="card-title">Restablecer contraseña</h1>
      <p className="feedback info-text">
        Contraseña restablecida correctamente. Ya puedes iniciar sesión.
      </p>
      <Link className="primary-button link-button" to="/login">
        Volver al inicio de sesión
      </Link>
    </div>
  );
};

export default ResetSuccess;
