import React, { useCallback } from 'react';
import useQuizStore from '../../stores/use-quiz-store';
import Image3D from './Image3D'; // Ajusta la ruta según la ubicación de tu archivo

const Quiz = () => {
    const { quiz, incrementQuizProgress } = useQuizStore();

    const onHandleButtonNext = useCallback(() => {
        incrementQuizProgress();
    }, [incrementQuizProgress]);

    return (
        <div className="quiz-container">
            <h1 className="quiz-header">InnovaVerde</h1>
            <Image3D imageUrl="/earth.png" />
            <p>Progreso del quiz: {quiz.percentageQuizCompleted}%</p>
            <button onClick={onHandleButtonNext}>Siguiente</button>
        </div>
    );
};

export default Quiz;

