import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateConfirmPassword, validateEmail, validatePassword, validateRequired } from './validators';

const Register = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
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
    if (!validateRequired(form.firstName)) {
      newErrors.firstName = 'El nombre es obligatorio.';
    }
    if (!validateRequired(form.lastName)) {
      newErrors.lastName = 'El apellido es obligatorio.';
    }
    if (!validateRequired(form.email)) {
      newErrors.email = 'El correo es obligatorio.';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Ingresa un correo válido.';
    }
    if (!validatePassword(form.password)) {
      newErrors.password =
        'Debe tener mínimo 8 caracteres, incluir una mayúscula y un número.';
    }
    if (!validateConfirmPassword(form.password, form.confirmPassword)) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/login', { replace: true });
    }, 1000);
  };

  return (
    <div className="card">
      <h1 className="card-title">Crear cuenta</h1>
      <form className="card-form" onSubmit={handleSubmit} noValidate>
        <label className="input-group">
          <span className="input-label">Nombre</span>
          <input
            className={`input-field ${errors.firstName ? 'input-error' : ''}`}
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Nombre"
          />
          {errors.firstName && <p className="feedback error-text">{errors.firstName}</p>}
        </label>
        <label className="input-group">
          <span className="input-label">Apellido</span>
          <input
            className={`input-field ${errors.lastName ? 'input-error' : ''}`}
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Apellido"
          />
          {errors.lastName && <p className="feedback error-text">{errors.lastName}</p>}
        </label>
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
        <label className="input-group">
          <span className="input-label">Confirmar contraseña</span>
          <input
            className={`input-field ${errors.confirmPassword ? 'input-error' : ''}`}
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="********"
          />
          {errors.confirmPassword && (
            <p className="feedback error-text">{errors.confirmPassword}</p>
          )}
        </label>
        <button className="primary-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creando cuenta...' : 'Registrarme'}
        </button>
      </form>
      <div className="card-actions">
        <span className="muted-text">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
