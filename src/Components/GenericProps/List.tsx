import React from "react";
type ListProps<T> = {
  items: T[];
  onClick: (item: T) => void;
};
export const List = <T extends { id: number }>(props: ListProps<T>) => {
  return (
    <div>
      {props.items.map((item, index) => {
        return <div key={item.id} onClick={() => props.onClick(item)}></div>;
      })}
    </div>
  );
};
