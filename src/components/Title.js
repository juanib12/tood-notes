import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Title.css";
import { useUserContext } from "../context/userContext";

const Title = () => {
  const { user, logoutUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser;
      navigate("/tood-notes/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <header>
      <div className="menu_container">
        <Link to="/tood-notes/home">
          <div className="logo">
            <i class="bx bxs-notepad item-logo"></i>
            <h1 className="title">tood</h1>
          </div>
        </Link>

        <nav>
          <ul class="dropdown">
            {/* <div className="drop-list">
              <i class="bx bx-task item-list"></i>
              <a href="#">Tareas</a>
            </div>
            <div className="drop-list">
              <i class="bx bxs-devices item-list"></i>
              <a href="#">Más apps</a>
            </div> */}
            <ul className="dropdown-user drop-list">
              <li>
                <div className="drop-user">
                  <h5>{user.displayName}</h5>
                  <i class="bx bxs-chevron-down-square"></i>
                </div>
                <ul className="drop-user-a">
                  <Link className="link-user" to="/tood-notes/myaccount">
                    <li>Mi cuenta</li>
                  </Link>
                  <Link className="link-user" to="/tood-notes/mynotes">
                    <li>Mis tareas</li>
                  </Link>
                  <Link className="link-user" to="/tood-notes/help">
                    <li>Ayuda</li>
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
