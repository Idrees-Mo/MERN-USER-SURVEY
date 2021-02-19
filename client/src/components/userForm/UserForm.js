import React, { useState } from 'react'
import UserPersonal from './UserPersonal'
import UserProfessional from './UserProfessional'
import UserConfirm from './UserConfirm'
import Success from './Success'

const UserForm = () => {
  const [state, setState] = useState({
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    profession: '',
    location: '',
    skills: ''
  })
  // next stage 
  const nextStep = () => {
    setState({
      ...state,
      step: state.step + 1
    })
  }
  // previouse stage
  const previousStep = () => {
    setState((preState => (
      {
        ...preState,
        step: preState.step - 1
      })
    ))
  }
  const reset = () => {
    setState({
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      profession: '',
      location: '',
      skills: ''
    })
  }

  // HandleChange 
  const handleChange = input => e => {
    setState(preState => ({
      ...preState,
      [input]: e.target.value
    }))
  }
  const { step } = state

  const { firstName, lastName, email, profession, location, skills } = state
  const values = { firstName, lastName, email, profession, location, skills }
  switch (step) {
    case 1:
      return (<UserPersonal nextStep={nextStep} handleChange={handleChange} values={values} />)
    case 2:
      return (<UserProfessional nextStep={nextStep} previousStep={previousStep} handleChange={handleChange} values={values} />)
    case 3:
      return (<UserConfirm nextStep={nextStep} previousStep={previousStep} values={values} />)
    case 4:
      return (<Success reset={reset} />)
    default: return (<h5>Opps! sorry, something went wrong :(</h5>)
  }
}

export default UserForm