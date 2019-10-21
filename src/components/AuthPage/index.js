import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField, Button, Grid, Box, makeStyles, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import { loginUserAction, registerUserAction } from '../../redux/reducers/userReducer'
import { asyncValidate } from '../../utils/reduxAsyncValidate'
import { authFormValidator } from '../../utils/schemas/yupAuthFormValidator'
import { toast } from 'react-toastify'
import { history } from './../../utils/history'


const renderTextField = ({label,type,input, meta: { touched, invalid, error }}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    type={type}
    {...input}
  />
)

const useStyles = makeStyles({
  grid: {
    height: '100vh',
    '& > *': {
      marginBottom: 10
    }
  },
  button: {
    minWidth: 180
  }
})

const AuthPageForm = (props) => {

  const submitLoginForm = async (ev) => {
    ev.preventDefault()
    try {
      await authFormValidator.validate(props.fields.values)
      props.loginUser(props.fields.values)
    } catch (e) {
      toast.error(e.message)
    }
  }

  const submitRegisterForm = async (ev) => {
    ev.preventDefault()
    try {
      await authFormValidator.validate(props.fields.values)
      props.registerUser(props.fields.values)
    } catch (e) {
      toast.error(e.message)
    }
  }

  const handleContinueButtonClick = () => {
    history.push('/')
    console.log('continue')
  }

  const classes = useStyles()
  return (
    <Box>
      <Grid container direction="column" justify="center" alignItems="center" className={classes.grid}>
        <Field name="username" label="Username" component={renderTextField}/>
        <Field name="password" label="Password" type="password" component={renderTextField}/>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={submitLoginForm}
        >
          Login
        </Button>

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={submitRegisterForm}
        >
          Register
        </Button>
        
        <Typography variant="caption">
          or
        </Typography>

        <Button onClick={handleContinueButtonClick} size="small">
          Continue without logging
        </Button>

      </Grid>
    </Box>
  )
}

const mapStateToProps = ({userState: {error, token}, form: {authForm}}) => ({
  error,
  token,
  fields: authForm
})

const mapDispatchToProps = {
  loginUser: loginUserAction,
  registerUser: registerUserAction
}

export default reduxForm({
  form: 'authForm',
  asyncValidate: asyncValidate(authFormValidator)
})(connect(mapStateToProps, mapDispatchToProps)(AuthPageForm))
