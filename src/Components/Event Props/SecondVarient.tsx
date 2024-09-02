import React from "react";
type EventProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const SecondVarient = (props: EventProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 1)}></button>
    </div>
  );
};
