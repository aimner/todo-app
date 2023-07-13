import { ChangeEvent, FC, useState } from "react";
import { useDeleteTodoMutation, useEditTodoMutation } from "../../app/api/todosApi";

import { Button } from "../button/button";
import { SkeletonLoading } from "../skeletonLoading";
import { TodoType } from "../../types/todosTypes";
import arrow from "../../assets/imgs/arrow.png";
import classNames from "classnames/bind";
import classes from "./todo.module.scss";

type PropsType = {
  todo: TodoType;
};

const cx = classNames.bind(classes);

export const Todo: FC<PropsType> = ({ todo }) => {
  const [deleteTodo, { isLoading: deleteLoading }] = useDeleteTodoMutation();

  const [editTodo, { isLoading: editLoading }] = useEditTodoMutation();

  const [editMode, setEditMode] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const [todoData, setTodoData] = useState<TodoType>(todo);

  const onDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  const onChangeTodoStatus = (key: 'favorites' | 'done') => {
    if (editMode) setTodoData((v) => ({ ...todoData, [key]: !v[key] }));
  };

  const textHandler = (value: string, key: 'title' | 'text') => {
    setTodoData((v) => ({ ...todoData, [key]: value }));
  };


  const onEditTodo = () => {
    if (editMode) {
      setTodoData({ ...todo });
    }
    setEditMode((v) => !v);
  };

  const saveChangesTodo = async () => {
    if (todoData.text && todoData.title) {
      const currentDateUnix = Math.floor(new Date().getTime() / 1000);
      await editTodo({
        id: todo.id,
        title: todoData.text,
        done: todoData.done,
        text: todoData.title,
        date: currentDateUnix,
        favorites: todoData.favorites,
      });
      setEditMode(false);
    }
  };

  const changeEditingMode = () => {
    setShowAll((v) => !v);
  };

  const currentDate = () => {
    let fullDate = new Date(todo.date * 1000);
    let day = fullDate.getDate();
    let month =
      fullDate.getMonth() + 1 > 10 ? fullDate.getMonth() + 1 : `0${fullDate.getMonth() + 1}`;
    let year = fullDate.getFullYear();
    let hours = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    return `Last update ${day}.${month}.${year} ${hours}:${minutes}`;
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
          value={todoData.title}
          onChange={(e) => textHandler(e.target.value, "title")}
          type="text"
          className={classes.todo__editTitle}
        />
      ) : (
        <h2 className={classes.todo__title}>{todo.title}</h2>
      )}
      {editMode ? (
        <div className={classes["todo-editTextBlock"]}>
          <textarea
            required
            value={todoData.text}
            onChange={(e) => textHandler(e.target.value, "text")}
            className={classes["todo-editTextBlock__textArea"]}></textarea>
        </div>
      ) : (
        <p
          className={cx({
            todo__description: true,
            ["todo__description--hideText"]: !showAll,
          })}>
          {todo.text}
        </p>
      )}

      {editMode ? (
        <Button
          text="Save"
          classname={classes.todo_saveChanges}
          callback={saveChangesTodo}
          type="button"
        />
      ) : (
        <Button
          text={showAll ? "Hide" : "Show"}
          classname={classes.todo_showFullText}
          callback={changeEditingMode}
          type="button"
        />
        // <img
        //   onClick={changeEditingMode}
        //   className={cx({
        //     ["todo__img"]: true,
        //     ["todo__img--rotate"]: showAll,
        //   })}
        //   src={arrow}
        //   alt="arrow"
        // />
      )}
      <span className={classes["todo-date"]}>{currentDate()}</span>

      <div className={classes["todo-buttons"]}>
        <Button
          text=""
          classname={classes["todo-buttons__delete"]}
          callback={onDeleteTodo}
          type="button"
        />
        <Button
          text=""
          classname={classes["todo-buttons__edit"]}
          callback={onEditTodo}
          type="button"
        />
        <div
          className={cx({
            ["todo-buttons-statusSwitch"]: true,
            ["todo-buttons-statusSwitch--off"]: !editMode,
          })}>
          <input
            id={`todoStatus ${todo.id}`}
            checked={todoData.done}
            className={classes.check}
            onChange={() => onChangeTodoStatus('done')}
            type="checkbox"></input>
          <label htmlFor={`todoStatus ${todo.id}`}>done</label>
          <input
            id={`todoFavorites ${todo.id}`}
            checked={todoData.favorites}
            className={classes.favorites}
            onChange={() => onChangeTodoStatus('favorites')}
            type="checkbox"></input>
          <label htmlFor={`todoFavorites ${todo.id}`}>favorites</label>
        </div>
      </div>
    </li>
  );
};
