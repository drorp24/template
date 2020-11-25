import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/users'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '3em',
    minWidth: '15vw',
  },
  username: {
    marginRight: '1em',
    lineHeight: '2',
    fontSize: '0.8125rem',
    textTransform: 'uppercase',
  },
  button: {
    lineHeight: '2',
    fontSize: '0.8125rem',
    color: 'white',
  },
}))

const Logout = () => {
  const username = useSelector(store => store.users.loggedIn.username)
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleClick = () => {
    dispatch(logout())
  }

  return (
    <div className={classes.root}>
      <span className={classes.username}>
        {username || 'No user logged in'}
      </span>
      {username && (
        <Button
          className={classes.button}
          size="small"
          color="primary"
          endIcon={<PowerSettingsNewIcon />}
          onClick={handleClick}
        >
          Logout
        </Button>
      )}
    </div>
  )
}

export default Logout
