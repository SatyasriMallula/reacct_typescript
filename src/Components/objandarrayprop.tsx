type Personlist = {
  person: {
    name: string;
    age: number;
  }[];
};

export const PersonList = (props: Personlist) => {
  return (
    <div>
      <h1>
        {props.person.map((item) => {
          return (
            <h1>
              {item.name}
              {item.age}
            </h1>
          );
        })}
      </h1>
    </div>
  );
};
