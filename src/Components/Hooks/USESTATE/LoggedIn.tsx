import React, { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setISLoggedIn] = useState(false);
  const handleLogin = () => {
    setISLoggedIn(true);
  };
  const handleLoggedOut = () => {
    setISLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLoggedOut}>LoggedOut</button>
      <div>user is{isLoggedIn ? "LogedIn" : "LogedOut"}</div>
    </div>
  );
};
