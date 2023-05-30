import React from "react";
import { useAddTodoMutation, useGetTodosQuery } from "../../app/api/todosApi";
import { useForm } from "react-hook-form";
import { Todo } from "../../types/todos";

export const Control = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Omit<Todo, "id">>();

  const [addTodo, {}] = useAddTodoMutation()

  const onSubmit = async (data: Omit<Todo, "id">) => {
    console.log(data);

    let newData: Omit<Todo, "id"> = {
      ...data, 
      done: true
    }
    await addTodo(newData)
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("title", {})} />
        <textarea {...register("text", {})} />
        <input type="radio" value="true" {...register("done", {})} />
        <input type="radio" value="false" {...register("done", {})} />
        <input type="submit" value="Add Todo" />
      </form>
    </section>
  );
};
