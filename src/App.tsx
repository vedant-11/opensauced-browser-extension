import { useState, FC, useEffect } from "react";
import logo from "./Assets/logo-on-dark.png";
import "./App.css";

const App: FC = (): JSX.Element => {
  const [user, setUser] = useState("");
  const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
  useEffect(() => {
    const response = fetch("https://api.opensauced.pizza/v1/auth/session", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${AUTH_KEY}`,
      },
    });
    response
      .then((res) => res.json())
      .then((data) => setUser(data.user_name))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h3>OpenSauced Browser Extension</h3>
      {user != "" && (
        <p>
          Congratulations! you are verified and logged in as:{" "}
          <span className="user">{user}</span>
        </p>
      )}
      <img className="logo" src={logo} alt="open sauced logo" />
    </div>
  );
};

export default App;
