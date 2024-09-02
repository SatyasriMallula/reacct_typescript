type Union = {
  status: "loading" | "Success" | "Failure";
};

export const UnionOfLiteral = (props: Union) => {
  return (
    <div>
      <h1>{props.status}</h1>
    </div>
  );
};
