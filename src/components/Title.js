import React from "react";

const Title = () => {
  return (
    <header>
      <div className="menu_container">
        <div className="logo">
          <i class="bx bxs-notepad item-logo"></i>
          <h1 className="title">tood</h1>
        </div>
        <nav>
          <ul class="dropdown">
            <div className="drop-list">
              <i class="bx bx-task item-list"></i>
              <a href="#">Tareas</a>
            </div>
            <div className="drop-list">
              <i class="bx bxs-devices item-list"></i>
              <a href="#">Más apps</a>
            </div>
            <div className="drop-list">
              <i class="bx bx-help-circle item-list"></i>
              <a href="#">Ayuda</a>
            </div>
          </ul>
        </nav>
        {/* <div className="dropdown-user">
          <Button variant="contained">Salir</Button>
        </div> */}
      </div>
    </header>
  );
};

export default Title;
