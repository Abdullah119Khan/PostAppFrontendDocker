import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import decode from 'jwt-decode'

import styleList from './style'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const classes = styleList()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const Navigate = useNavigate()
  const Location = useLocation()
  const dispatch = useDispatch()

  const logout = () => {
    dispatch({ type: 'LOGOUT'})
    setUser(null)
    Navigate('/auth')
  }

  useEffect(() => {
    const token = user?.token;

    if(token) {
      const decodedToken = decode(token)

      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [Location])

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
     <div className={classes.logoProfile}>
      <Typography component={Link} to='/' className={classes.logo}>MaLak KhAn</Typography>
     </div>
     <Toolbar className={classes.toolbar}>
     {user ? (
      <div className={classes.profile}>
       <Avatar title={user?.result.name} src={user?.result.imageUrl} >{user?.result.name.charAt[0]}</Avatar>
       <Typography>{user?.result.name}</Typography>
       <Button onClick={logout} variant='contained' size='small' color='secondary'>Logout</Button>
      </div>
     ) : (
       <Button component={Link} to='/auth' variant='contained' size='small' color='primary'>Sign In</Button>
     )}
     </Toolbar>
    </AppBar>
  )
}

export default Navbar