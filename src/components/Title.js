import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Title.css";
import { useUserContext } from "../context/userContext";
import LogoTitle from "../images/logo-title.png"

const Title = () => {
  const { user, logoutUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <header>
      <div className="menu_container">
        <Link to="/home">
          <div className="logo">
            <img src={LogoTitle}/>
          </div>
        </Link>

        <nav>
          <ul class="dropdown">
            <ul className="dropdown-user drop-list">
              <li>
                <div className="drop-user">
                  <h5>{user.displayName}</h5>
                  <i class="bx bxs-chevron-down-square"></i>
                </div>
                <ul className="drop-user-a">
                  <Link className="link-user" to="/myaccount">
                    <li>Mi cuenta</li>
                  </Link>
                  <Link className="link-user" to="/mynotes">
                    <li>Mis tareas</li>
                  </Link>
                  <button onClick={handleLogout} variant="outlined">
                    Salir
                  </button>
                </ul>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Title;
