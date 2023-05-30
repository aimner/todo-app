import React, { FC } from "react";
import { Post, useGetTodosQuery } from "../../app/api/todosApi";


export const Todos: FC = () => {
  const { data, isError, isLoading,  } = useGetTodosQuery(null);

  if (!data) {
    return null;
  }

  return (
    <section>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
