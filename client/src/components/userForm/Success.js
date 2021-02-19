import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, RaisedButton } from 'material-ui'

const Success = ({ reset }) => {
  const restart = (e) => {
    e.preventDefault()
    reset()
  }
  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Submitted" />
        <p style={{ backgroundColor: 'lightGreen', padding: '6px' }}>All done!</p>
        <p> Thanks &#128522;</p>
      </>
      <RaisedButton
        label="Add Another"
        light={true}
        onClick={restart}
        style={{ margin: '18px', width: '70%' }}
      />
    </MuiThemeProvider>
  )
}

export default Success