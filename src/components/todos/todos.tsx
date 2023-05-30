import { FC } from "react";
import { useDeleteTodoMutation, useGetTodosQuery } from "../../app/api/todosApi";

export const Todos: FC = () => {
  const { data, isError, isLoading } = useGetTodosQuery(null);
  const [deleteTodo, {}] = useDeleteTodoMutation();
  if (!data) {
    return null;
  }

  const onDeleteTodo = async (id: number) => {
    await deleteTodo(id);
  };

  return (
    <section>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <button type="button" onClick={() => onDeleteTodo(item.id)}>
              Delete
            </button>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
