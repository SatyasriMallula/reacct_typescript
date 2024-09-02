import { useReducer } from "react";
type CountTypes = {
  count: number;
};
type ActionTypes = {
  type: "Increment" | "Decrement";
  payload: number;
};
type reset = {
  type: "reset";
};
const initialState = {
  count: 0,
};

type CounterActions = ActionTypes | reset;

const reducer = (state: CountTypes, action: CounterActions) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + (action.payload || 0) };
    case "Decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const StrictActionTypes = () => {
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
