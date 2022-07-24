import React, { useContext, useEffect, useState } from 'react'
import { Grid, TextField, Button, Typography } from '@mui/material'
import { useAuth } from 'web-firebase'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/auth-context'
import BasicModal from '../components/Modal'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { auth } = useContext(AuthContext)
  const navigate = useNavigate()
  const { signIn, googleAuth, error } = useAuth(auth)

  useEffect(() => {
    console.log('error', error)
  }, [error])

  const submitHandler = (e) => {
    e.preventDefault()
    signIn(email, password, navigate)
  }
  const googleHandler = () => {
    googleAuth(navigate)
  }

  return (
    <>
      {error && (
        <BasicModal
          show={true}
          title={'Authentication Failed'}
          message={error}
        />
      )}
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
            id='outlined-basic1'
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
            id='outlined-basic2'
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
        <Grid item xs={12} sm={8}>
          <Button
            variant='contained'
            type='button'
            sx={{ padding: '0.5rem 0', fontSize: '1.3rem' }}
            onClick={googleHandler}
            fullWidth
          >
            Google
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Login
