import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card } from 'material-ui/'

const UserItem = ({ user: { firstName,
  lastName,
  email,
  profession,
  skills,
  location
} }) => {
  return (
    <MuiThemeProvider>
      <>
        <Card style={{ margin: '0.6rem' }} >
          <div style={{ width: '260px', textAlign: 'center', fontSize: '26px', backgroundColor: '#00BCD4', padding: '1px', color: '#fff' }}>
            <p>{`${firstName} ${lastName}`}</p>
          </div>
          <p>{profession}</p>

          <p>{email}</p>
          <p>{skills}</p>
          <p>{location}</p>
        </Card>
      </>
    </MuiThemeProvider>
  )
}

export default UserItem