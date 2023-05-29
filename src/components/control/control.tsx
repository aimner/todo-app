import React from 'react'
import { useGetTodosQuery } from '../../app/api/todosApi';

export const Control = () => {
  const { data, isError, isLoading,  } = useGetTodosQuery(null);
  return (
    <div>contorl</div>
  )
}
