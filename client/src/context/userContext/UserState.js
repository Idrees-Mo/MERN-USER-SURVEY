import React, { createContext, useReducer } from 'react'
import reducer from './userReducer'
import axios from 'axios'

export const context = createContext()

const UserState = (props) => {
  const initState = {
    users: [],
    error: null,
  }
  const [state, dispatch] = useReducer(reducer, initState)

  const fetchUsers = async () => {
    try {
      const res = await axios.get('/user')
      dispatch({
        type: 'FETCH_USERS',
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: 'ADD_ERROR',
        payload: error.message
      })
    }
  }
  const addUser = async (user) => {
    try {
      const res = await axios.post('/user', { user })
      dispatch({
        type: 'ADD_USER',
        payload: res.data
      })
      dispatch({
        type: 'REMOVE_ERROR'
      })

    } catch (error) {
      dispatch({
        type: 'ADD_ERROR',
        payload: error.message
      })
    }
  }

  return (
    <context.Provider value={{
      users: state.users,
      error: state.error,
      fetchUsers,
      addUser
    }}>
      {props.children}
    </context.Provider>
  )
}

export default UserState