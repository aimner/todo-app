import { FC } from "react";
import { useAddTodoMutation } from "../../app/api/todosApi";
import { useForm } from "react-hook-form";
import { TodoType } from "../../types/todosTypes";

import classes from "./control.module.scss";

export const Control: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    resetField,
    formState: { errors },
  } = useForm<Omit<TodoType, "id">>();

  const [addTodo, {}] = useAddTodoMutation();

  const onSubmit = async (data: Omit<TodoType, "id">) => {
    console.log(data);

    let newData: Omit<TodoType, "id"> = {
      ...data,
      done: true,
    };
    await addTodo(newData);
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
          <button
            className={classes["control-form-titleBlock__delete"]}
            onClick={() => resetField("title")}
            type="button"></button>
        </div>
        <div>
          <textarea {...register("text", {})} />
        </div>
        <div>
          <input type="radio" value="true" {...register("done", {})} />
          <input type="radio" value="false" {...register("done", {})} />
        </div>

        <input type="submit" value="Add Todo" />
      </form>
    </section>
  );
};
