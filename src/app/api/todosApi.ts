import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TodoType } from "../../types/todosTypes";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://63565c319243cf412f82a6f0.mockapi.io/" }),
  tagTypes: ["Todos"],
  endpoints: (build) => ({
    getTodos: build.query<TodoType[], null>({
      query: () => "todos",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Todos" as const, id })),
              { type: "Todos", id: "LIST" },
            ]
          : [{ type: "Todos", id: "LIST" }],
    }),
    addTodo: build.mutation<Omit<TodoType, "id">, Omit<TodoType, "id">>({
      query: (body) => ({
        url: "todos",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
    editTodo: build.mutation<TodoType, TodoType>({
      query: (body) => ({
        url: `todos/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
    deleteTodo: build.mutation<null, number>({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useEditTodoMutation } = todosApi;
