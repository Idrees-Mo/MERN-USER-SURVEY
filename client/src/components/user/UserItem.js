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
          <div style={{ minWidth: '340px', textAlign: 'center', backgroundColor: '#00BCD4', padding: '1px', color: '#fff' }}>
            <h1 style={{ color: '#333', paddingBottom: '0' }}>{`${firstName} ${lastName}`}</h1>
            <p style={{ fontSize: '20px' }}>{profession}</p>
          </div>
          <p style={{ fontSize: '18px', padding: '0 6px' }}>Email: <spn style={{ fontSize: '16px', }} >{email}</spn></p>
          <p style={{ fontSize: '18px', padding: '0 6px' }}>Education: <spn style={{ fontSize: '16px', }} >{skills}</spn></p>
          <p style={{ fontSize: '18px', padding: '0 6px' }}>Location: <spn style={{ fontSize: '16px', }} >{location}</spn></p>

        </Card>
      </>
    </MuiThemeProvider>
  )
}

export default UserItem