import { GET_POST, CREATE_POST, UPDATE_POST, LIKE_POST, DELETE_POST, SEARCH_POST } from '../constant/constant'

const posts = (state = [], action) => {
  switch(action.type) {
    case SEARCH_POST:
      return {
        ...state,
        posts: action.payload
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload)
      }
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)
      }
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)
      }
    case CREATE_POST:
      return {
        ...state, 
        posts: [...state, action.payload]
      }
    case GET_POST:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPage: action.payload.numberOfPage 
      }
    default:
      return state;
  }
}

export default posts;