import { useEffect, useRef, useState } from "react";
import { useUserContext } from "../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { Alert } from "@mui/material";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { signInUser, error } = useUserContext();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
      navigate("/tood-notes/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={onSubmit} className="form-login form">
        {error && (
          <Alert severity="error">
            {error}
          </Alert>
        )}

        <h2>¡Hola! Para seguir, ingresá tu email y contraseña.</h2>
        <input
          placeholder="Correo electrónico"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Contraseña"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">INICIAR SESION</button>
        <div className="footer-login">
          ¿No tienes una cuenta?
          <Link to="/tood-notes/signup" className="link">
            Crear cuenta
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
