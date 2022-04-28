import { useUserContext } from "./context/userContext";
import { Home } from "./components/Home";
import UserLogin from "./components/UserLogin";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./components/Account";
import Notes from "./components/Notes";

function App() {
  const { loading, error, user } = useUserContext();

  console.log(user);

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Routes>
            <Route
              path="/tood-notes/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/tood-notes/" element={<Login />} />
            <Route path="/tood-notes/signup" element={<UserLogin />} />
            <Route
              path="/tood-notes/myaccount"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tood-notes/mynotes"
              element={
                <ProtectedRoute>
                  <Notes />
                </ProtectedRoute>
              }
            />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
