import { FC } from "react";
import { useAddTodoMutation } from "../../app/api/todosApi";
import { useForm } from "react-hook-form";
import { TodoType } from "../../types/todosTypes";

export const Control: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
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
