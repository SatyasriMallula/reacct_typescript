import React from "react";

type EventProp = {
  handleClick: () => void;
};

const FirstVarient = (props: EventProp) => {
  return (
    <div>
      <button onClick={props.handleClick}>Click</button>
    </div>
  );
};

export default FirstVarient;
