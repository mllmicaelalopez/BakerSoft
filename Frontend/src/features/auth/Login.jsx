import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail, validateRequired } from './validators';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!validateRequired(form.email)) {
      newErrors.email = 'El correo es obligatorio.';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Ingresa un correo válido.';
    }

    if (!validateRequired(form.password)) {
      newErrors.password = 'La contraseña es obligatoria.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/dashboard', { replace: true });
    }, 900);
  };

  return (
    <div className="card">
      <h1 className="card-title">Iniciar sesión</h1>
      <form className="card-form" onSubmit={handleSubmit} noValidate>
        <label className="input-group">
          <span className="input-label">Correo electrónico</span>
          <input
            className={`input-field ${errors.email ? 'input-error' : ''}`}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
          />
          {errors.email && <p className="feedback error-text">{errors.email}</p>}
        </label>
        <label className="input-group">
          <span className="input-label">Contraseña</span>
          <input
            className={`input-field ${errors.password ? 'input-error' : ''}`}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="********"
          />
          {errors.password && <p className="feedback error-text">{errors.password}</p>}
        </label>
        <button className="primary-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Ingresando...' : 'Ingresar'}
        </button>
      </form>
      <div className="card-actions">
        <Link to="/forgot-password" className="muted-link">
          ¿Olvidaste tu contraseña?
        </Link>
        <span className="muted-text">
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
