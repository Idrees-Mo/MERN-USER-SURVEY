import React, { useContext } from 'react'
import { context } from '../../context/userContext/UserState'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, RaisedButton } from 'material-ui'

const Success = ({ reset }) => {
  const { error } = useContext(context)
  const restart = (e) => {
    e.preventDefault()
    reset()
  }


  const submitted = <>
    <AppBar title="Submitted" />
    <p style={{ backgroundColor: 'lightGreen', padding: '6px' }}>All done!</p>
    <p> Thanks &#128522;</p>
  </>
  const notSumitted = <>
    <AppBar title="Submitted" />
    <p style={{ backgroundColor: 'tomato', padding: '6px' }}>Not done!</p>
    <p> Sorry, something went wrong &#128543;</p>
  </>


  return (
    <MuiThemeProvider>
      {error ? notSumitted : submitted}
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