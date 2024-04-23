import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

const Todos = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const [editedTodoId, setEditedTodoId] = useState(null)
  const [editedTodoText, setEditedTodoText] = useState('')

  const handleEdit = (todo) => {
    setEditedTodoId(todo.id)
    setEditedTodoText(todo.text)
  }

  const handleSaveEdit = () => {
    console.log(editedTodoText)
    dispatch(updateTodo({ id: editedTodoId, text: editedTodoText })) // Corrected dispatch
    setEditedTodoId(null)
    setEditedTodoText('')
  }

  return (
    <>
      <div className="text-3xl text-center font-bold text-white">Todos</div>
      <ul className="">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-evenly items-center bg-zinc-800 px-4 py-2 rounded space-x-4"
            key={todo.id}
          >
            {editedTodoId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editedTodoText}
                  onChange={(e) => setEditedTodoText(e.target.value)}
                />
                <button
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                  onClick={handleSaveEdit}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <div className="text-white">{todo.text}</div>
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
