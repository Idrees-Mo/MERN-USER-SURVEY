import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, TextField, RaisedButton } from 'material-ui'

const UserPersonal = ({ nextStep, values, handleChange }) => {
  const next = (e) => {
    e.preventDefault()
    nextStep()
  }
  return (
    <MuiThemeProvider>
      <>
        <AppBar title='Personal Information' />
        <TextField
          hintText="Enter your firt name"
          floatingLabelText="First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          required="true" />
        <br />
        <TextField
          hintText="Enter your last name"
          floatingLabelText="Last Name"
          onChange={handleChange('lastName')}
          defaultValue={values.lastName} />
        <br />
        <TextField
          hintText="Enter your email"
          floatingLabelText="Email"
          onChange={handleChange('email')}
          defaultValue={values.email} />
      </>
      <br />
      <RaisedButton
        label="Next"
        primary={true}
        onClick={next}
        style={{ margin: '18px', width: '70%' }}
      />
    </MuiThemeProvider>
  )
}

export default UserPersonal