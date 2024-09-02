import React, { useState } from "react";
export type AuthUser = {
  name: string;
  email: string;
};
const UseStateFutureValue = () => {
  const [user, setUser] = useState<AuthUser | null>();
  const handleLogin = () => {
    setUser({ name: "satya", email: "satya@gmail.com" });
  };
  const handleLoggedOut = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLoggedOut}>Log Out</button>
      <div>
        User Name is {user?.name}
        {user?.email}
      </div>
    </div>
  );
};

export default UseStateFutureValue;
