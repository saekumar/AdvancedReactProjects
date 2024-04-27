import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  posts: [
    {
      id: 1,
      text: 'Hello there',
      posturl:
        'https://unsplash.com/photos/a-motorcycle-parked-in-front-of-a-yellow-building-xNYT7Nxa2Nk',
      liked: false,
    },
  ],
}

export const todoSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      const post = {
        id: nanoid(),
        text: action.payload.text,
        posturl: action.payload.posturl,
        liked: action.payload.liked,
      }
      console.log(post)
      state.posts.push(post)
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload)
    },
    updatePost: (state, action) => {
      const postUpdate = state.posts.find(
        (post) => post.id === action.payload.id
      )
      if (postUpdate) {
        postUpdate.text = action.payload.text
        postUpdate.posturl = action.payload.posturl
      }
    },
  },
})

export const { addPost, removePost, updatePost } = todoSlice.actions
export default todoSlice.reducer
