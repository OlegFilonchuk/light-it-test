import React, { useState } from 'react'
import {connect} from 'react-redux'
import {loginUserAction, registerUserAction} from '../../redux/reducers/userReducer'

const LoginForm = (props) =>  {
  const [userForm, setUserForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (ev) => {
    setUserForm({
      ...userForm,
      [ev.target.name]: ev.target.value
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

  console.log(userForm)
  return (
    <div>
      <label htmlFor="usename">Username</label>
      <input type="text" name="username" value={userForm.username} onChange={handleChange}/>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" value={userForm.password} onChange={handleChange}/>
      <input type="submit" value="Submit login" onClick={submitLoginForm}/>
      <input type="submit" value="Submit register" onClick={submitRegisterForm}/>
    </div>
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