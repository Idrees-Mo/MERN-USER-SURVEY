import React, { useEffect, useState } from 'react'
import User from './User'
import axios from "axios"
const UserList = () => {
  const getData = async () => {
    const data = await axios.get('/user')
    console.log(data)
  }
  useEffect(() => {
    getData()
  })
  const [step, setStep] = useState(1)
  return (
    <div>
      <User />
      <User />
      <User />
    </div>
  )
}

export default UserList