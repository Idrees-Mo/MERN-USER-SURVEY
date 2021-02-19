import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, List, ListItem, RaisedButton } from 'material-ui'

const UserConfirm = ({ nextStep, previousStep, values }) => {
  const { firstName, lastName, email, profession, location, skills } = values
  const next = (e) => {
    e.preventDefault()
    nextStep()
  }
  const last = (e) => {
    e.preventDefault()
    previousStep()
  }
  let disable;
  if (firstName === '' || lastName === '' || email === '') {
    disable = true
  }
  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Confirm & Submit" />
        {disable && <p style={{ backgroundColor: 'tomato', padding: '6px' }}>Please fill the form to submit!</p>}
        <List style={{ display: 'flex', justifyContent: "space-around", flexWrap: 'wrap' }}>
          <ListItem
            primaryText="Fist Name"
            secondaryText={firstName}
            style={{ minWidth: '180px' }}
          />
          <ListItem
            primaryText="Last Name"
            secondaryText={lastName}
            style={{ minWidth: '180px' }}
          />
          <ListItem
            primaryText="Email"
            secondaryText={email}
            style={{ minWidth: '180px' }}
          />
          <ListItem
            primaryText="Profession"
            secondaryText={profession}
            style={{ minWidth: '180px' }}
          /> <ListItem
            primaryText="Location"
            secondaryText={location}
            style={{ minWidth: '180px' }}
          /> <ListItem
            primaryText="Skills"
            secondaryText={skills}
            style={{ minWidth: '180px' }}
          />
        </List>
      </>
      <br />

      <RaisedButton
        label="Back"
        light={true}
        onClick={last}
        style={{ margin: '18px', width: '30%' }}
      />
      <RaisedButton
        label="Submit"
        disabled={disable}
        primary={true}
        onClick={next}
        style={{ margin: '18px', width: '30%' }}
      />

    </MuiThemeProvider>
  )
}

export default UserConfirm