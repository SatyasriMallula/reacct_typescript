import React from "react";
import { createContext } from "./ThemeContextProvider";
import { useContext } from "react";
export const Box = () => {
  const usevalue = useContext(createContext);
  return (
    <div style={{ backgroundColor: usevalue.Secondary.main }}>
      <p style={{ color: usevalue.Secondary.text }}>This is context value</p>
    </div>
  );
};
