import React, { useState } from 'react'
import { connect } from 'react-redux'
import { loginUserAction, registerUserAction } from '../../redux/reducers/userReducer'
import { TextField, Button, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  grid: {
    height: '100vh',
    '&& > *': {
      marginBottom: 10
    }
  }, 
  button: {
    minWidth: 180
  }
})

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

  const classes = useStyles()

  return (
    <Box>
      <Grid container direction="column" justify="center" alignItems="center" className={classes.grid}>
        <TextField id="username" value={userForm.username} onChange={handleChange} label="Username" />
        <TextField id="password" value={userForm.password} onChange={handleChange} label="Password" type="password" />

        <Button variant="contained" color="primary" onClick={submitLoginForm}  className={classes.button}>Submit login</Button>
        <Button variant="contained" color="secondary" onClick={submitRegisterForm}  className={classes.button} >Submit register</Button>
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