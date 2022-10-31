import { AUTH } from '../constant/constant'
import * as API from '../apis/apis'

export const signUp = (formData, Navigate) => async (dispatch) => {
  try {
    const { data } = await API.signUp(formData, Navigate);
    dispatch({ type: AUTH, data})
    Navigate('/')
  } catch(err) {
    console.log(err)
  }
}

export const signIn = (formData, Navigate) => async (dispatch) => {
  try {
    const { data } = await API.signIn(formData);
    dispatch({ type: AUTH, data})
    Navigate('/')
  } catch(err) {
    console.log(err)
  }
}