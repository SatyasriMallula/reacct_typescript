type option = {
  name: string;
  count?: number;
  isLogged: boolean;
};

export const OptionalProps = (props: option) => {
  let { count = 0 } = props;

  return (
    <div>
      <h1>
        {count} {props.isLogged} {props.name}
      </h1>
    </div>
  );
};
