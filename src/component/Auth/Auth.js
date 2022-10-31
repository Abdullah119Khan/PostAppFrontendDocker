import React, { useState } from 'react'
import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import Input from './Input'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signUp, signIn } from '../../actions/Auth'

import styleList from './style'

const initialData = {firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Auth = () => {
  const classes = styleList()
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState()
  const [formData, setFormData] = useState(initialData)

  const dispatch = useDispatch()
  const Navigate = useNavigate()

  const handleShowPassword = () => setShowPassword((showPassword) => !showPassword)

  const handleChange = (e) => {

    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(isSignUp) {
      dispatch(signUp(formData, Navigate))
    } else {
      dispatch(signIn(formData, Navigate))
    }
  }

  const handleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token }})
      Navigate('/')
    } catch(err) {
      console.log(err)
    }
  }
  
  const handleFailure = async (res) => {
    console.log('Login fail')
  }
  
  const clear = () => {
    setIsSignUp((isSignUp) => !isSignUp)
  }

  return (
    <Container maxWidth='xs' component='main'>
     <Paper className={classes.paper} elevation={3}>
     <div className={classes.avatar}>
      <Avatar>
       <LockOutlined color='error'/>
      </Avatar>
      <Typography>Sign In</Typography>
     </div>
     <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
      {isSignUp && (
        <>
         <Input label='First Name' name='firstName' handleChange={handleChange} half autoFocus/>
         <Input label='Last Name' name='lastName' handleChange={handleChange} half/>
        </>
      )}
      <Input label='Email' name='email' handleChange={handleChange} fullWidth/>
      <Input label="Password" name='password' handleChange={handleChange} type={ showPassword ? 'text': 'password'} handleShowPassword={handleShowPassword}/>
      {isSignUp && <Input type='password' name='confirmPassword' handleChange={handleChange} label='Confirm Password'/>}
      </Grid>
      <Button className={classes.submit} type='submit' variant='contained' size='mediam' color='primary' fullWidth>{ isSignUp ? 'Sign Up' : 'Sign In'}</Button>
      <GoogleLogin
      clientId='387976466966-35vltee65j1b8aathtea1mij825ps4l7.apps.googleusercontent.com'
      render={(renderItem) => (
        <Button variant='contained' size='medium' color='secondary' onClick={renderItem.onClick} fullWidth>Google Login</Button>
      )}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy="single_host_origin"
      />
      <Grid container justifyContent='flex-end'>
      <Grid item>
       <Button onClick={clear}>
       {isSignUp ? 'Have an Account Sign In' : "Don't have account Sign Up"}
       </Button>
      </Grid>
      </Grid>
     </form>
     </Paper>
    </Container>
  )
}

export default Auth