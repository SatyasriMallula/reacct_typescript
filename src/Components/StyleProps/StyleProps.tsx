import React from "react";
type Style = {
  styles: React.CSSProperties;
};

export const StyleProps = (props: Style) => {
  return <div style={props.styles}>Text Content goes here</div>;
};

export const DivisonStyle = () => {
  return <div style={styles.container}>Styleing this div tag</div>;
};

const styles = {
  container: {
    border: "2px solid black",
  },
};
