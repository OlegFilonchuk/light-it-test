import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, makeStyles, Paper } from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    marginTop: 30,
    marginBottom: 30,
    padding: 10
  },
  text: {

  },
  link: {
    color: '#000',
    textDecoration: 'none',
    fontWeight: 'bold',
    '$:hover': {
      color: '#fff'
      //TODO: hovering animation
    }
  }
})

const LoginSuggest = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Typography className={classes.text}>
        You have to <Link to={'/login'} className={classes.link}>log in</Link> to leave reviews
      </Typography>
    </Paper>
  )
}

export default LoginSuggest
