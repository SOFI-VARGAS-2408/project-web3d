import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./pages/Login/Login.jsx";
import Quiz from './pages/quiz/Quiz.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,  // Usa App como contenedor
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: 'quiz',
        element: <Quiz />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);


