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
const InputPanel = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <form
      onSubmit={submitHandler}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        marginTop: '3rem'
      }}
    >
      <Grid
        container
        justifyContent={'center'}
        spacing={3}
        sx={{
          padding: '2rem 0'
        }}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
              <MenuItem value={'female'}>Female</MenuItem>
              <MenuItem value={'male'}>Male</MenuItem>
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
    </form>
  )
}

export default InputPanel
