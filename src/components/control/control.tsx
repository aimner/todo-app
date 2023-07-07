import React, { FC } from "react";
import { useAddTodoMutation } from "../../app/api/todosApi";
import { useForm } from "react-hook-form";
import { TodoType } from "../../types/todosTypes";

import classes from "./control.module.scss";
import { Button } from "../button/button";

type InputNames = "title" | "done" | "text";

export const Control: FC = React.memo(() => {
  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
  } = useForm<Omit<TodoType, "id">>();

  const [addTodo, {}] = useAddTodoMutation();

  const onSubmit = async (data: Omit<TodoType, "id">) => {
    let newData: Omit<TodoType, "id"> = {
      ...data,
      done: true,
    };
    await addTodo(newData);
    reset();
  };

  const clearValueHandler = (inputName: InputNames) => {
    resetField(inputName);
  };

  return (
    <section className={classes.control}>
      <h2 className={classes.control__title}>Create Todo</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={classes["control-form"]}>
        <div className={classes["control-form-titleBlock"]}>
          <input
            className={classes["control-form-titleBlock__input"]}
            type="text"
            id="title"
            required
            {...register("title", {})}
          />
          <label className={classes["control-form-titleBlock__label"]} htmlFor="title">
            Title
          </label>
          <Button
            text=""
            classname={classes["control-form-titleBlock__delete"]}
            callback={() => clearValueHandler("title")}
            type="button"
          />
        </div>
        <div className={classes["control-form-todoBlock"]}>
          <textarea
            required
            className={classes["control-form-todoBlock__textArea"]}
            {...register("text", {})}
          />
          <label className={classes["control-form-todoBlock__label"]} htmlFor="text">
            Todo description
          </label>
          <Button
            text=""
            classname={classes["control-form-todoBlock__delete"]}
            callback={() => clearValueHandler("text")}
            type="button"
          />
        </div>

        <input type="submit" className={classes["control-form__submit"]} value="Add Todo" />

      </form>
    </section>
  );
});
