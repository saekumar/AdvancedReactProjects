import React, { useState } from 'react'
import { GoHeartFill } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'

import { removePost, updatePost } from '../reduxTodo/todoSlicer'

const TodoList = () => {
  const posts = useSelector((state) => state.todos.posts)
  const dispatch = useDispatch()
  const [editedPostId, setEditedPostId] = useState(null)
  const [editedPostText, setEditedPostText] = useState('')
  const [editedPostUrl, setEditedPostUrl] = useState('')
  const [likedPosts, setLikedPosts] = useState({})

  const handleEdit = (post) => {
    setEditedPostId(post.id)
    setEditedPostText(post.text)
    setEditedPostUrl(post.posturl)
  }

  const handleLike = (post) => {
    const updatedLikedPosts = { ...likedPosts, [post.id]: !likedPosts[post.id] }
    setLikedPosts(updatedLikedPosts)
    dispatch(
      updatePost({
        id: post.id,
        liked: !likedPosts[post.id],
        text: post.text,
        posturl: post.posturl,
      })
    )
  }

  const isPostLiked = (postId) => {
    return likedPosts[postId] || false
  }

  const handleSaveEdit = () => {
    dispatch(
      updatePost({
        id: editedPostId,
        text: editedPostText,
        posturl: editedPostUrl,
      })
    )
    setEditedPostId(null)
    setEditedPostText('')
    setEditedPostUrl('')
  }

  return (
    <div className="">
      <div className="text-3xl text-center font-bold text-white">Posts</div>
      <ul className="">
        {posts.map((post) => (
          <li
            className="mt-4 flex justify-evenly items-center bg-zinc-800 px-4 py-2 rounded space-x-4"
            key={post.id}
          >
            {editedPostId === post.id ? (
              <>
                <input
                  type="text"
                  value={editedPostText}
                  onChange={(e) => setEditedPostText(e.target.value)}
                />
                <input
                  type="url"
                  value={editedPostUrl}
                  onChange={(e) => setEditedPostUrl(e.target.value)}
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
                <div className="flex flex-col items-center justify-end space-y-3">
                  <div className="relative h-[200px] w-[200px] bg-fuchsia-200">
                    <img
                      src={post.posturl}
                      alt=""
                      className="absolute inset-0 object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex space-x-3 px-1 py-2">
                    <div className="text-white text-center">{post.text}</div>
                    <GoHeartFill
                      onClick={() => handleLike(post)}
                      className={`${
                        isPostLiked(post.id) ? 'text-red-500' : 'text-white'
                      } cursor-pointer mt-1 w-6 h-6`}
                    />
                  </div>
                </div>

                <button
                  onClick={() => handleEdit(post)}
                  className="text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(removePost(post.id))}
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
