import React from 'react'
import { Card, Typography, makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'column'
  },
  user: {
    fontStyle: 'italic'
  },
  text: {

  },
  rate: {
    marginBottom: 20
  },
  date: {
    alignSelf: 'flex-end'
  },
  caption: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

const Review = ({review: {id, rate, text, created_by, created_at}}) => {

  const classes = useStyles()

  return (
    <Card className={classes.root}>

      <Typography variant="subtitle1" className={classes.text}>
        "{text}"
      </Typography>

      <Typography variant="subtitle2" className={classes.rate}>
        Rated as {rate}
      </Typography>

      <Box className={classes.caption}>
        <Typography className={classes.user} variant="caption">
          by {created_by.username}
        </Typography>

        <Typography variant="caption" className={classes.date}>
          at {new Date(created_at).toLocaleString('ru')}
        </Typography>
      </Box>
    </Card>
  )
}

export default Review
