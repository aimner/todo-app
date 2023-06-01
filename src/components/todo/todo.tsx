import { FC } from "react";
import { TodoType } from "../../types/todosTypes";
import { useDeleteTodoMutation } from "../../app/api/todosApi";

import classes from "./todo.module.scss";

type PropsType = TodoType;

export const Todo: FC<PropsType> = ({ id, text, title }) => {
  const [deleteTodo, {}] = useDeleteTodoMutation();

  const onDeleteTodo = async (id: number) => {
    await deleteTodo(id);
  };

  return (
    <li className={classes.todo}>
      <h2 className={classes.todo__title}>{title}</h2>
      <p className={classes.todo__description}>{text}</p>
      <button className={classes.todo__delete} type="button" onClick={() => onDeleteTodo(id)}>
        
      </button>
    </li>
  );
};
