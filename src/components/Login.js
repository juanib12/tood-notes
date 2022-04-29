import { useEffect, useRef, useState } from "react";
import { useUserContext } from "../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { Home } from "./Home";
import { auth } from "../firebase";

const Login = () => {
  const [err, setError] = useState("");
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  const { signInUser, error, loading, user } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    try {
      const email = emailRef.current.value;
      const password = passRef.current.value;
      if (email && password) signInUser(email, password);
      navigate("/tood-notes/home");
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   if (auth.currentUser == null) {
  //     navigate("/tood-notes/");
  //   } else {
  //     navigate("/tood-notes/home");
  //   }
  // }, []);

  return (
    <div>
      <NavBar />
      <form onSubmit={onSubmit} className="form-login form">
        {err && <p>{err}</p>}
        <h2>¡Hola! Para seguir, ingresá tu email y contraseña.</h2>
        <input placeholder="Correo electrónico" type="email" ref={emailRef} />
        <input placeholder="Contraseña" type="password" ref={passRef} />
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
