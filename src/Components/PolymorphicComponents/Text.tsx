import React from "react";
type TextOWNProps<E extends React.ElementType> = {
  size?: "sm" | "lg" | "md";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOWNProps<E> &
  React.ComponentProps<E>;
//   Omit<React.ComponentProps<E>, keyof TextOWNProps<E>>;

export const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
}: TextProps<E>) => {
  return <div className={`class-with-${size} ${color}`}>{children}</div>;
};
