import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000/api'})

API.interceptors.request.use((req) => {
  if(localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
})

export const getPost = (page) => API.get(`/post?page=${page}`)
export const fetchPostBySearch = (searchQuery) => API.get(`/post/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (postData) => API.post('/post/create', postData)
export const updatePost = (id, postData) => API.put(`/post/update/${id}`, postData)
export const deletePost = (id) => API.delete(`/post/delete/${id}`)
export const likePost = (id) => API.put(`/post/${id}/like`)

export const signUp = (formData) => API.post('/user/create', formData);
export const signIn = (formData) => API.post('/user/login', formData);