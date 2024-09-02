import React from "react";
type RestrictProps1 = {
  value: number;
};
type RestrictIsPositive = RestrictProps1 & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type RestrictIsNegative = RestrictProps1 & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};
type RestrictIsZero = RestrictProps1 & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type AllRestrictions = RestrictIsPositive | RestrictIsNegative | RestrictIsZero;

export const RestrictProps = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: AllRestrictions) => {
  return (
    <div>
      {value}
      {isPositive && "Positive"}
      {isNegative && "negative"}
      {isZero && "zero"}
    </div>
  );
};
