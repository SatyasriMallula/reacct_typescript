import React, { useContext, useState } from "react";
import { User } from "./user";
export type AuthUser = {
  name: string;
  email: string;
};
type useContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
type userContextProviderProps = {
  children: React.ReactNode;
};
export const ContextCreater = React.createContext<useContextType | null>(null);

export const UserContextProvider = ({ children }: userContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <div>
      <ContextCreater.Provider value={{ user, setUser }}>
        {children}
      </ContextCreater.Provider>
    </div>
  );
};
