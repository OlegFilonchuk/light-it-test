import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField, Button, Grid, Box } from '@material-ui/core'
import { connect } from 'react-redux'
import { loginUserAction, registerUserAction } from '../../redux/reducers/userReducer'
import { makeStyles } from '@material-ui/core/styles'
import { asyncValidate } from "../../utils/reduxAsyncValidate";
import { authFormValidator } from "../../utils/schemas/yupAuthFormValidator";

const renderTextField = ({
                           label,
                           input,
                           meta: { touched, invalid, error },
                         }) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
  />
)

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

const AuthPageForm = (props) => {

  const submitLoginForm = async (ev) => {
    ev.preventDefault()
    try {
      await authFormValidator.validate(props.fields.values);
      props.loginUser(props.fields.values);
    } catch (e) {
      //toast
    }
  }

  const submitRegisterForm = async (ev) => {
    ev.preventDefault()
    try {
      await authFormValidator.validate(props.fields.values);
      props.registerUser(props.fields.values);
    } catch (e) {
      //toast
    }
  }

  const classes = useStyles()
  return (
    <Box>
      <Grid container direction="column" justify="center" alignItems="center" className={classes.grid}>
        <Field name="username" label="Username" component={renderTextField}/>
        <Field name="password" label="Password" type="password" component={renderTextField}/>
        <Button variant="contained" color="primary" className={classes.button} onClick={submitLoginForm}>Submit login</Button>
        <Button variant="contained" color="secondary" className={classes.button}  onClick={submitRegisterForm}>Submit register</Button>
      </Grid>
    </Box>
  )
}

const mapStateToProps = ({userState, form}) => {
  const {error, token} = userState
  const fields = form.authForm;
  return {error, token, fields}
}

const mapDispatchToProps = {
  loginUser: loginUserAction,
  registerUser: registerUserAction
}

export default reduxForm({
  form: 'authForm',
  asyncValidate: asyncValidate(authFormValidator)
})(connect(mapStateToProps, mapDispatchToProps)(AuthPageForm))
