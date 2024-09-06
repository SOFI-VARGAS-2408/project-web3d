import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login.jsx';
import Quiz from './pages/quiz/Quiz';
import useAuthStore from './stores/use-auth-store';

function App() {
  const { user } = useAuthStore(); // Obtener el estado de autenticación

  return (
    <Routes>
      {/* Ruta de login */}
      <Route path="/" element={user ? <Navigate to="/quiz" /> : <Login />} />
      {/* Ruta de quiz (solo accesible si está autenticado) */}
      <Route path="/quiz" element={user ? <Quiz /> : <Navigate to="/" />} />
    </Routes>
  );
}

export default App;



