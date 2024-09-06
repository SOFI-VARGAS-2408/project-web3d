import React, { useCallback } from 'react';
import './Quiz.css';
import useQuizStore from '../../stores/use-quiz-store';
import useAuthStore from '../../stores/use-auth-store';
import { useNavigate } from "react-router-dom";
import Image3D from './Image3D';

const Quiz = () => {
    const { quiz, incrementQuizProgress } = useQuizStore();
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();

    const onHandleButtonNext = useCallback(() => {
        incrementQuizProgress();
    }, [incrementQuizProgress]);

    const handleLogout = useCallback(() => {
        logout();
        navigate("/"); // Redirigir al login tras cerrar sesión
    }, [logout, navigate]);

    return (
        <div className="quiz-container">
            <h1 className="quiz-header">AquaGuard</h1>
            {user && (
                <div className="welcome-container">
                    <p className="welcome-text">Bienvenido, {user.displayName}</p>
                    <button onClick={handleLogout}>Cerrar Sesión</button>
                </div>
            )}
            <Image3D imageUrl="/earth.png" />
            <button onClick={onHandleButtonNext}>Siguiente</button>
        </div>
    );
};

export default Quiz;


