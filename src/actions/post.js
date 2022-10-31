import { GET_POST, CREATE_POST, UPDATE_POST, LIKE_POST, DELETE_POST, SEARCH_POST } from '../constant/constant'
import * as API from '../apis/apis'

export const getAllPost = (page) => async (dispatch) => {
  try {
    const { data } = await API.getPost(page)
    console.log(data)
    dispatch({ type: GET_POST, payload: data})
  } catch(err) {
    console.log(err)
  }
} 

export const fetchPostBySearch = (searchQuery) => async (dispatch) => {
  try {
    const { data: { data } } = await API.fetchPostBySearch(searchQuery);
    dispatch({ type: SEARCH_POST, payload: data})
    console.log(data)
  } catch(err) {
    console.log(err)
  }
}

export const createPost = (postData) => async (dispatch) => {
  try {
    const { data } = await API.createPost(postData)
    dispatch({ type: CREATE_POST, payload: data})
  } catch(err) {
    console.log(err)
  }
}

export const updatePost = (id, postData) => async (dispatch) => {
  try {
    const { data } = await API.updatePost(id, postData)
    dispatch({ type: UPDATE_POST, payload: data })
  } catch(err) {
    console.log(err)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await API.deletePost(id)
    dispatch({ type: DELETE_POST, payload: id})
  } catch(err) {
    console.log(err)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await API.likePost(id)
    dispatch({ type: LIKE_POST, payload: data })
  } catch(err) {
    console.log(err)
  }
}