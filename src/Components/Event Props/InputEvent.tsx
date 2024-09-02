import React from "react";
type InputEvent1 = {
  value: string;
  handleChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};
export const InputEvent = (props: InputEvent1) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div>
      <input type="text" value={props.value} onChange={handleChange}></input>
    </div>
  );
};
