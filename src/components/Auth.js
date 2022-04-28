import UserLogin from "./UserLogin";
import Login from "./Login";

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        {/* <UserLogin /> */}
      </div>
      <div className="auth-form">
          <Login />
      </div>
    </div>
  );
};

export default Auth;
