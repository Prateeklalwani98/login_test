import { useState, useEffect } from "react";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login.jsx";
import Inventory from "./pages/Inventory";
import Purchase from "./pages/Purchase";
import Sell from "./pages/Sell";
import NavBar from "./NavLayout/NavBar.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (
      email === process.env.REACT_APP_USERNAME &&
      password === process.env.REACT_APP_PASSWORD
    ) {
      setLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      alert("Incorrect id or password");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "/";
  };

  return (
    <div className="App">
      <Router>
        <NavBar loggedIn={loggedIn} onLogout={handleLogout} />
        <Routes>
          {!loggedIn ? (
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          ) : (
            <>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/purchase" element={<Purchase />} />
              <Route path="/sell" element={<Sell />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
