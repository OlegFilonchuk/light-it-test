import React from 'react'
import { Link } from '@material-ui/core'
import { Typography, makeStyles, Paper } from "@material-ui/core"
import { history } from './../../utils/history'

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
    '&:hover': {
      cursor: 'pointer'
    }
  }
})

const LoginSuggest = () => {

  const handleLinkClick = () => {
    history.push('/login')
  }

  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Typography className={classes.text}>
        You have to <Link onClick={handleLinkClick} className={classes.link}>log in</Link> to leave reviews
      </Typography>
    </Paper>
  )
}

export default LoginSuggest
