import React, { useState } from 'react'
import { useTodo } from '../contexts'

const TodoForm = () => {
  const [todo, setTodo] = useState('')
  const { addTodo } = useTodo()
  const add = (e) => {
    e.preventDefault()
    if (!todo) return
    addTodo({
      todo,
      completed: false,
    })
    setTodo('')
  }
  return (
    <form onSubmit={add} className="flex space-x-1">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-2"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-lg gap-4 px-3 py-1 bg-blue-500 text-white shrink-0"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm
