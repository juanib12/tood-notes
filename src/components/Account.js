import { useUserContext } from "../context/userContext";
import Title from "./Title";
import './Account.css'

const Account = () => {
  const { user } = useUserContext();

  return (
    <div>
      <Title />
      <div className="container-account">
        <div className="center-account">
          <h1>Mis datos</h1>

          <h4>Datos de cuenta</h4>
          <div className="paper-account">
            <h5>Email</h5>
            <p>{user.email}</p>
          </div>
          <div className="paper-account2">
            <h5>Perfil</h5>
            {/* <img src={user.avatar} width="50" height="50" /> */}
          </div>

          <h4>Datos personales</h4>
          <div className="paper-account">
            <h5>Nombre</h5>
            <p>{user.displayName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
