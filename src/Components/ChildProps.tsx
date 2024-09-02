//for single child we cna use normal way like this
// type Child = {
//   children: string;
// };

// for multiple childes we should use this
type Child = {
  children: React.ReactNode;
};

export const ChildProps = (props: Child) => {
  return <div>{props.children}</div>;
};
