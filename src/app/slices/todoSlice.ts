import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { TodoType } from '../../types/todosTypes';



const initialState: TodoType[] = []

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodos(state, action: PayloadAction<TodoType[]>) {
      return action.payload;
    },
  },
});

export const { getTodos } = todosSlice.actions;

export default todosSlice.reducer