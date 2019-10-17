import React, { useState } from 'react'
import {connect} from 'react-redux'
import {loginUserAction, registerUserAction} from '../../redux/reducers/userReducer'
import { TextField, Button, Grid, Box } from '@material-ui/core'
import { height } from '@material-ui/system'

const LoginForm = (props) =>  {
  const [userForm, setUserForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (ev) => {
    setUserForm({
      ...userForm,
      [ev.target.id]: ev.target.value
    })
  }

  const submitLoginForm = async (ev) => {
    ev.preventDefault()
    props.loginUser(userForm);
  }
  
  const submitRegisterForm = async (ev) => {
    ev.preventDefault()
    props.registerUser(userForm);
  }

  return (
    <Box height="100%">
      <Grid container direction="column" justify="space-between" alignItems="center" height="100%">
        <TextField id="username" value={userForm.username} onChange={handleChange} label="Username" margin="normal"/>
        <TextField id="password" value={userForm.password} onChange={handleChange} label="Password" margin="normal"/>

        <Button variant="contained" color="primary" onClick={submitLoginForm}>Submit login</Button>
        <Button variant="contained" color="secondary" onClick={submitRegisterForm}>Submit register</Button>
      </Grid>
    </Box>
  )
}

const mapStateToProps = ({userState}) => {
  const {error, token} = userState
  return {error, token}
}

const mapDispatchToProps = {
  loginUser: loginUserAction,
  registerUser: registerUserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)