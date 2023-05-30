import { FC } from "react";
import { TodoType } from "../../types/todosTypes";
import { useDeleteTodoMutation } from "../../app/api/todosApi";

type PropsType = TodoType;

export const Todo: FC<PropsType> = ({ id, text, title }) => {

  const [deleteTodo, {}] = useDeleteTodoMutation();


  const onDeleteTodo = async (id: number) => {
    await deleteTodo(id);
  };

  return (
    <li key={id}>
      <button type="button" onClick={() => onDeleteTodo(id)}>
        Delete
      </button>
      <h2>{title}</h2>
      <p>{text}</p>
    </li>
  );
};
