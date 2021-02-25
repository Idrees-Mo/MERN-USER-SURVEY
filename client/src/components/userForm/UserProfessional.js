import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, TextField, RaisedButton } from 'material-ui'

const UserProfessional = ({ nextStep, previousStep, values, handleChange }) => {
  const next = (e) => {
    e.preventDefault()
    nextStep()
  }
  const last = (e) => {
    e.preventDefault()
    previousStep()
  }

  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Professional Information" />
        <TextField
          hintText="Enter your profession"
          floatingLabelText="Your Profession"
          onChange={handleChange('profession')}
          defaultValue={values.profession} />
        <br />
        <TextField
          hintText="Enter your education"
          floatingLabelText="Education"
          onChange={handleChange('skills')}
          defaultValue={values.skills} />
        <br />
        <TextField
          hintText="Enter your location"
          floatingLabelText="Location"
          onChange={handleChange('location')}
          defaultValue={values.location} />
      </>
      <br />
      <RaisedButton
        label="Back"
        light={true}
        onClick={last}
        style={{ margin: '18px', width: '30%' }}
      />
      <RaisedButton
        label="Next"
        primary={true}
        onClick={next}
        style={{ margin: '18px', width: '30%' }}
      />
    </MuiThemeProvider>
  )
}

export default UserProfessional