import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    marginTop: 40,
    marginBottom: 40
  }
})

const LoginSuggest = () => {
  const classes = useStyles()
  return (
    <Typography className={classes.root}>
      You need to <Link to={'/login'}>log in</Link> to leave reviews
    </Typography>
  )
}

export default LoginSuggest
