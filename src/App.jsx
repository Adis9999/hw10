import React, { useEffect, useState } from "react";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import MainHeader from "./components/main-header/MainHeader";
import Users from "./components/users/Users";
import Card from "./components/card/Card";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState({});
  const [page, setrPage] = useState("admin");

  useEffect(() => {
    const isHasAcoount = JSON.parse(localStorage.getItem("auth"));
    if (isHasAcoount?.email && isHasAcoount?.password) {
      setUserName(isHasAcoount);
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    setUserName({ email: email, password: password });
    setIsLoggedIn(true);
    localStorage.setItem(
      "auth",
      JSON.stringify({ email: email, password: password })
    );
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("auth");
  };

  const navigateToUser = (e, param) => {
    e.preventDefault();
    setrPage(param);
    console.log(param);
    
  };
  return (
    <React.Fragment>
      <MainHeader
        onLogOut={logoutHandler}
        navigateToUser={navigateToUser}
        isLoggedIn={isLoggedIn}
      />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn&& page==="admin" && <Home onLogout={logoutHandler} />}
        {isLoggedIn && page==="users" && <Users />}
      {isLoggedIn && page==="cards" && <Card/>}
      </main>
    </React.Fragment>
  );
}

export default App;
