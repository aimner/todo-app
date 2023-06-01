import { FC, useState } from "react";
import { TodoType } from "../../types/todosTypes";
import { useDeleteTodoMutation, useEditTodoMutation } from "../../app/api/todosApi";

import classes from "./todo.module.scss";

type PropsType = TodoType;

export const Todo: FC<PropsType> = ({ id, text, title }) => {
  const [deleteTodo, {}] = useDeleteTodoMutation();
  const [editTodo, {}] = useEditTodoMutation();
  const [editMode, setEditMode] = useState(false);
  const [todoValue, setTodoValue] = useState(text);

  const onDeleteTodo = async (id: number) => {
    await deleteTodo(id);
  };

  const onEditTodo = () => {
    setEditMode((v) => !v);
  };

  const saveChangesTodo = async () => {
    await editTodo({ id, title, done: true, text: todoValue });
    setEditMode(false)
  };

  return (
    <li className={classes.todo}>
      <h2 className={classes.todo__title}>{title}</h2>
      {editMode ? (
        <textarea
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          className={classes.todo__textArea}></textarea>
      ) : (
        <p className={classes.todo__description}>{text}</p>
      )}
      {editMode && <button onClick={saveChangesTodo}>Save changes</button>}
      <div className={classes["todo-buttons"]}>
        <button
          className={classes["todo-buttons__delete"]}
          type="button"
          onClick={() => onDeleteTodo(id)}></button>
        <button
          className={classes["todo-buttons__edit"]}
          type="button"
          onClick={() => onEditTodo()}></button>
      </div>
    </li>
  );
};
