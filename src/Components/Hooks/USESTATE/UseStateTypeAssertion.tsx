import React, { useState } from "react";
import { AuthUser } from "./UseStateFutureValue";
export const UseStateTypeAssertion = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  return (
    <div>
      <button
        onClick={() => setUser({ name: "satya", email: "satya@gmail.com" })}
      >
        Login
      </button>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );
};
