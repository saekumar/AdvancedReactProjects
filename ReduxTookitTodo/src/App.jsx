import { useState } from 'react'

import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
function App() {
  return (
    <div className="flex items-center flex-col space-y-5">
      <h1 className="text-3xl font-bold "> Redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
