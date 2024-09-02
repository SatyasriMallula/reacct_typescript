import React from "react";

/* 
Left-top|right-top|right-bottom|right-top|center-top|top-left|top-right|center-center|center-left|center-right|bottom-left|bottom-center|bottom-right
 */
type HorizentolProps = "left" | "center" | "right";

type VerticalProps = "top" | "center" | "bottom";

type PositionProps = {
  position?:
    | Exclude<`${HorizentolProps}-${VerticalProps}`, "center-center">
    | "";
};
export const ExcludeOperator = ({ position }: PositionProps) => {
  return <div>Toast Notification positin -{position}</div>;
};
