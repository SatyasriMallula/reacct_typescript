import { useReducer } from "react";
type CountTypes = {
  count: number;
};
type ActionTypes = {
  type: string;
  payload: number;
};
const initialState = {
  count: 0,
};

const reducer = (state: CountTypes, action: ActionTypes) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

export const TSinUseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count:{count.count}
      <button onClick={() => dispatch({ type: "Increment", payload: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", payload: 5 })}>
        Decrement
      </button>
    </div>
  );
};
