import React from "react";
export type propstype = {
  name: string;
};
export const Profile = (props: propstype) => {
  return <div>Profile {props.name}</div>;
};
