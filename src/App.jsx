import { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login/Login.jsx';
import Quiz from './pages/quiz/Quiz';

function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleUserLogin = (isLoggedIn) => {
    setUserLoggedIn(isLoggedIn);
    setShowQuiz(isLoggedIn); // Solo mostrar el Quiz si el usuario está autenticado
  };

  useEffect(() => {
    if (userLoggedIn) {
      setShowQuiz(true);
    } else {
      setShowQuiz(false); // Asegurarse de que el Quiz no se muestre si el usuario no está autenticado
    }
  }, [userLoggedIn]);

  return (
    <>
      {showQuiz ? <Quiz /> : <Login onLogin={handleUserLogin} />}
    </>
  );
}

export default App;


