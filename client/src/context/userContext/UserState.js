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
    console.log(user)
    try {
      const res = await axios.post('/user', { firstName: user.firstName, lastName: user.lastName, email: user.email })
      console.log(res)
      dispatch({
        type: 'ADD_USER',
        payload: res.data
      })

    } catch (error) {
      console.log(error.message)
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