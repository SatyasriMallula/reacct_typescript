import React from "react";
type Destructuring = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const DestructuringProps = ({ handleChange }: Destructuring) => {
  return (
    <div>
      <input onChange={handleChange}></input>
    </div>
  );
};
