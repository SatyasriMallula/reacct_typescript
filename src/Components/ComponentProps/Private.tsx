import Login from "./Login";

import { propstype } from "./Profile";
type LogedInProp = {
  isLogedIn: boolean;
  Component: React.ComponentType<propstype>;
};

export const Private = (props: LogedInProp) => {
  if (props.isLogedIn) {
    return <props.Component name="satya" />;
  } else {
    return <Login />;
  }
};
