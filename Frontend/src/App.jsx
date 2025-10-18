import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import ForgotPassword from './features/reset/ForgotPassword';
import ResetPassword from './features/reset/ResetPassword';
import ResetSuccess from './features/reset/ResetSuccess';
import './App.css';

const App = () => {
  return (
    <div className="app-background">
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-success" element={<ResetSuccess />} />
          <Route
            path="/dashboard"
            element={
              <div className="card">
                <h1 className="card-title">Panel BakerSoft</h1>
                <p className="feedback info-text">
                  Bienvenido. Esta vista es temporal hasta integrar el backend.
                </p>
              </div>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
