import { useContext } from "react";
import { AuthContext } from "./Context/AppContext";
import "./styles.css";

export default function App() {
  const { auth, handleLogin, handleLogout } = useContext(AuthContext);
  // console.log(auth, handleLogin, handleLogout);
  return (
    <div className="App">
      <h1>App Context</h1>
      <button onClick={auth ? handleLogout : handleLogin}>
        {auth ? "logout" : "login"}
      </button>
    </div>
  );
}
