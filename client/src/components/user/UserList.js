import React, { useContext, useEffect } from 'react'
import { context } from '../../context/userContext/UserState'
import UserItem from './UserItem'

const UserList = () => {
  const { users, fetchUsers } = useContext(context)
  useEffect(() => {
    fetchUsers()
  }, [])
  console.log(users)
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '18px' }}>
      {users.map(user => <UserItem key={user._id} user={user} />)}
    </div>
  )
}

export default UserList