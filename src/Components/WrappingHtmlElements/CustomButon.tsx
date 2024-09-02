import React from "react";
type ButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

export const CustomButon = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      Primary
    </button>
  );
};
