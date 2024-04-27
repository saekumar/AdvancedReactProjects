import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../reduxTodo/todoSlicer'
export const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
  },
})
