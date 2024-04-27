import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../reduxTodo/todoSlicer'
import { store } from '../store/store'

const AddTodo = () => {
  const dispatch = useDispatch()
  const [textInput, setTextInput] = useState('')
  const [urlInput, setUrlInput] = useState('')

  const handleAddPost = (e) => {
    e.preventDefault()
    console.log(textInput, urlInput)
    dispatch(addPost({ text: textInput, posturl: urlInput }))
    setTextInput('')
    setUrlInput('')
  }

  return (
    <form
      onSubmit={handleAddPost}
      className="flex flex-col items-center justify-center px-1 py-4 space-y-5 "
    >
      <input
        type="text"
        className="rounded bg-blue-100 text-black text-center flex items-center
         justify-center"
        placeholder="Add text"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <input
        type="url"
        className="rounded bg-blue-100 text-black text-center flex items-center
         justify-center"
        placeholder="Add post url"
        value={urlInput}
        onChange={(e) => setUrlInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-blue-600 rounded-md px-1 py-3"
      >
        Add Post
      </button>
    </form>
  )
}

export default AddTodo
