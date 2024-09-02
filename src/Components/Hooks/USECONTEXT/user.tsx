import React, { useContext } from "react";
import { ContextCreater } from "./UseContextFutureValue";
export const User = () => {
  const usingContext = useContext(ContextCreater);

  const handleLogin = () => {
    if (usingContext) {
      usingContext.setUser({
        name: "satya",
        email: "satya@gmail.com",
      });
    }
  };

  const handleLogOut = () => {
    if (usingContext) {
      usingContext.setUser(null);
    }
  };
  return (
    <div>
      <button onClick={handleLogin}>Login </button>
      <button onClick={handleLogOut}></button>
      <div>
        user email is {usingContext?.user?.email}
        {usingContext?.user?.name}
      </div>
    </div>
  );
};
