import React, { useState } from 'react'
import {
  Grid,
  Typography,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl
} from '@mui/material'
import useFirestore from '../hooks/useFirestore'
const InputPanel = () => {
  const [userName, setUserName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [gender, setGender] = useState('')

  const { addNewEntry, getEntries } = useFirestore()
  const submitHandler = (e) => {
    e.preventDefault()
    addNewEntry('users', { userName, phoneNumber, gender })
    getEntries('users')
  }
  return (
    <Grid
      container
      justifyContent={'center'}
      spacing={3}
      component='form'
      sx={{
        padding: '2rem 0',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      }}
      onSubmit={submitHandler}
    >
      <Grid item xs={12} sm={8}>
        <Typography variant='h1' fontSize={24} textAlign={'center'} mb={1}>
          Add Contact
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField
          id='outlined-basic'
          type={'text'}
          label='Name'
          variant='outlined'
          placeholder='Enter name'
          error={false}
          required
          fullWidth
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField
          id='outlined-basic'
          type={'tel'}
          label='Phone'
          variant='outlined'
          placeholder='Enter phone number'
          error={false}
          required
          fullWidth
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <FormControl fullWidth>
          <InputLabel id='demo-simple-select-label'>Gender</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={gender}
            label='Gender'
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value={'Female'}>Female</MenuItem>
            <MenuItem value={'Male'}>Male</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Button
          variant='contained'
          type='submit'
          sx={{ padding: '0.5rem 0', fontSize: '1.3rem' }}
          fullWidth
        >
          Add
        </Button>
      </Grid>
    </Grid>
  )
}

export default InputPanel
