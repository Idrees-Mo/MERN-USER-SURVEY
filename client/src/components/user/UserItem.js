import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, AppBar, RaisedButton } from 'material-ui'

const UserItem = ({ user: { firstName,
  lastName,
  email,

} }) => {
  return (
    <MuiThemeProvider>
      <>
        <Card style={{ padding: '0.3rem', margin: '0.3rem', minWidth: '6rem' }}>
          <h3>{`${firstName} ${lastName}`}</h3>
          <p>{email}</p>

        </Card>
      </>
    </MuiThemeProvider>

  )
}

export default UserItem
