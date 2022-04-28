import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import "./Login.css";
import NavBar from "./NavBar";

const UserLogin = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const passRef = useRef();
  let navigate = useNavigate();

  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      const email = emailRef.current.value;
      const name = nameRef.current.value;
      const password = passRef.current.value;
      if (email && name && password) registerUser(email, name, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <NavBar />
      <form onSubmit={onSubmit} className="form-login form">
        <h2>¡Hola! Para seguir, ingresá los siguientes datos.</h2>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Name" type="text" ref={nameRef} />
        <input placeholder="Password" type="password" ref={passRef} />
        <button type="submit">CREAR CUENTA</button>
        <div className="footer-login">
          ¿Ya tienes cuenta?{" "}
          <Link to="/" className="link">
            Iniciar sesion
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
