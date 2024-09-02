import React from "react";
import { Person } from "./Person.types";

export const ExportingTypes = (props: Person) => {
  return (
    <div>
      <h1>
        {props.name} {props.age}
      </h1>
    </div>
  );
};
