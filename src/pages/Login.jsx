import React, { useContext, useState } from 'react'
import { Grid, TextField, Button, Typography } from '@mui/material'
import useFirebase from 'auth-web-firebase'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/auth-context'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { auth } = useContext(AuthContext)
  const navigate = useNavigate()
  const { signIn } = useFirebase(auth)

  const submitHandler = (e) => {
    e.preventDefault()
    signIn(email, password, navigate)
  }

  return (
    <Grid
      component={'form'}
      container
      justifyContent={'center'}
      spacing={2}
      sx={{
        padding: '2rem 0'
      }}
      onSubmit={submitHandler}
    >
      <Grid item xs={12} sm={8}>
        <Typography variant='h1' fontSize={48} textAlign={'center'} mb={3}>
          Login
        </Typography>
      </Grid>

      <Grid item xs={12} sm={8}>
        <TextField
          id='outlined-basic'
          type={'email'}
          label='Email'
          variant='outlined'
          placeholder='Enter your email'
          error={false}
          required
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField
          id='outlined-basic'
          type={'password'}
          label='Password'
          variant='outlined'
          placeholder='Enter your password'
          error={false}
          required
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Button
          variant='contained'
          type='submit'
          sx={{ padding: '0.5rem 0', fontSize: '1.3rem' }}
          fullWidth
        >
          Login
        </Button>
      </Grid>
    </Grid>
  )
}

export default Login
