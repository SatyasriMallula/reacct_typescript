type Person = {
  name: string;
  logging: boolean;
  value: number;
};

export const User = (props: Person) => {
  return (
    <div>
      {props.logging ? (
        <h1> My name is {props.name}</h1>
      ) : (
        <h1>{props.value}</h1>
      )}
    </div>
  );
};
