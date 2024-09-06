import "./login.css";
import { useCallback } from "react"
import useAuthStore from "../../stores/use-auth-store"
import { useEffect } from "react"
import userDAO from "../../daos/userDAO";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const { user, loginGoogleWithPopUp, observeAuthState, logout } = useAuthStore ();
    const navigate = useNavigate();

    const handleLogin = useCallback(() => {
        loginGoogleWithPopUp();
    }, [loginGoogleWithPopUp]);

    const handlelogout = useCallback(() => {
        logout();
    },[logout] );

    useEffect(() => {
        observeAuthState();
    }, [observeAuthState,]);

    useEffect(()=>{
        if(user){
            const newUser ={
                email: user.email || ' ',
                displayName: user.displayName || ' ',
                photoUrl: user.photoUrl || ' ',
            };
            userDAO.createUser(newUser);
            navigate("/quiz");
        }
    }, [user, navigate]);

    return (
        <div className="container-login">
            {user ? (
                <>
                <p className="welcome-text">Bienvenido,{user.displayName}</p>
                <button onClick={handlelogout}>Cerrar Sesion</button>
                </>
            ) : (
                <button onClick={handleLogin}> Iniciar sesion. </button>
            )}
            
        </div>
    )
} 