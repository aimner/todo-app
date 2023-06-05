import { FC, useState } from "react";
import { TodoType } from "../../types/todosTypes";
import { useDeleteTodoMutation, useEditTodoMutation } from "../../app/api/todosApi";
import classNames from "classnames/bind";

import classes from "./todo.module.scss";
import { SkeletonLoading } from "../skeletonLoading";

type PropsType = TodoType;

const cx = classNames.bind(classes);

export const Todo: FC<PropsType> = ({ id, text, title, done }) => {
  const [deleteTodo, { isLoading: deleteLoading }] = useDeleteTodoMutation();

  const [editTodo, { isLoading: editLoading }] = useEditTodoMutation();

  const [editMode, setEditMode] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const [todoValue, setTodoValue] = useState(text);
  const [todoTitle, setTodoTitle] = useState(title);
  const [todoStatus, setTodoStatus] = useState(done);

  const onDeleteTodo = async (id: number) => {
    await deleteTodo(id);
  };

  const onChangeTodoStatus = () => {
    if (editMode) setTodoStatus((v) => !v);
  };

  const onEditTodo = () => {
    if (editMode) {
      setTodoValue(text);
      setTodoTitle(title);
      setTodoStatus(done)
    }
    setEditMode((v) => !v);
  };

  const saveChangesTodo = async () => {
    if (todoValue && todoTitle) {
      await editTodo({ id, title: todoTitle, done: todoStatus, text: todoValue });
      setEditMode(false);
    }
  };

  if (deleteLoading || editLoading) {
    return <SkeletonLoading item={6} />;
  }

  return (
    <li
      className={cx({
        todo: true,
        grey: editMode,
      })}>
      {editMode ? (
        <input
          required
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          type="text"
          className={classes.todo__editTitle}
        />
      ) : (
        <h2 className={classes.todo__title}>{title}</h2>
      )}
      {editMode ? (
        <div className={classes["todo-editTextBlock"]}>
          <textarea
            required
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
            className={classes["todo-editTextBlock__textArea"]}></textarea>
        </div>
      ) : (
        <p
          className={cx({
            todo__description: true,
            ["todo__description--hideText"]: !showAll,
          })}>
          {text}
        </p>
      )}
      {editMode ? (
        <button onClick={saveChangesTodo} className={classes.todo_saveChanges}>
          Save changes
        </button>
      ) : (
        <button className={classes.todo_saveChanges} onClick={(e) => setShowAll((v) => !v)}>
          {showAll ? "Hide" : "Show all"}
        </button>
      )}
      <div className={classes["todo-buttons"]}>
        <button
          className={classes["todo-buttons__delete"]}
          type="button"
          onClick={() => onDeleteTodo(id)}></button>
        <button
          className={classes["todo-buttons__edit"]}
          type="button"
          onClick={() => onEditTodo()}></button>
        <div className={cx({
          ["todo-buttons-statusSwitch"]: true,
          ["todo-buttons-statusSwitch--off"]: !editMode,
        })}>
          <input
            id={`todoStatus ${id}`}
            checked={todoStatus}
            className={classes.check}
            onChange={onChangeTodoStatus}
            type="checkbox"></input>
          <label htmlFor={`todoStatus ${id}`}>done</label>
        </div>
      </div>
    </li>
  );
};
