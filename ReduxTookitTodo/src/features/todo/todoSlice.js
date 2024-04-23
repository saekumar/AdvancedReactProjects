import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [
    {
      id: 1,
      text: 'Hello there',
    },
  ],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    updateTodo: (state, action) => {
      const todoUpdate = state.todos.find((tod) => tod.id === action.payload.id)
      console.log(todoUpdate)
      if (todoUpdate) {
        todoUpdate.text = action.payload.text
      }
    },
  },
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer
