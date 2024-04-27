import { useState } from 'react'
import { Provider } from 'react-redux'

import AddTodo from './components/AddTodo'

import { store } from './store/store.js'
import TodoList from './components/TodoList.jsx'

function App() {
  return (
    <div className="flex items-center justify-center flex-col px-1 py-4">
      <Provider store={store}>
        <AddTodo />
        <TodoList />
      </Provider>
    </div>
  )
}

export default App
