import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Post {
  id: number
  title: string
  done: boolean
  text: string
}

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63565c319243cf412f82a6f0.mockapi.io/' }),
  endpoints: (build) => ({
    //              ResultType  QueryArg
    //                    v       v
    getTodos: build.query<Post[], null>({query: () => 'todos'}),
  }),
})

export const { useGetTodosQuery } = todosApi


