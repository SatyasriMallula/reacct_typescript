import React from "react";
import { themes } from "./Theme";
export const createContext = React.createContext(themes);
type ThemeContextProvider1 = {
  children: React.ReactNode;
};
export const ThemeContextProvider = ({ children }: ThemeContextProvider1) => {
  return (
    <div>
      <createContext.Provider value={themes}>{children}</createContext.Provider>
    </div>
  );
};
