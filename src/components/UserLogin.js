import { Alert } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import "./Login.css";
import NavBar from "./NavBar";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const { registerUser, error } = useUserContext();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email === "" || name === "" || password === "") {
        console.log(error);
      } else {
        await registerUser(email, name, password);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={onSubmit} className="form-login form">
        {error && <Alert severity="error">{error}</Alert>}
        <h2>¡Hola! Para seguir, ingresá los siguientes datos.</h2>
        <input
          placeholder="Correo electrónico"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Nombre"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Contraseña"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">CREAR CUENTA</button>
        <div className="footer-login">
          ¿Ya tienes cuenta?
          <Link to="/" className="link">
            Iniciar sesion
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
