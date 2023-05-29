import React, { FC } from "react";
import { Post } from "../../app/api/todosApi";

type PropsType = {
  todos: Post[];
};

export const Todos: FC<PropsType> = ({ todos }) => {
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
