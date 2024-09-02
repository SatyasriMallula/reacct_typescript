import React from "react";
type GreetProps = {
  name: string;
  email: string;
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn && (
        <h1>
          {props.name}
          {props.email}
        </h1>
      )}
    </div>
  );
};
