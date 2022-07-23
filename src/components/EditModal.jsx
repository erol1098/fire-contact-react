import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack
} from '@mui/material'
import useFirestore from '../hooks/useFirestore'
import UserContext from '../context/user-context'

const EditModal = () => {
  const { currentData, setCurrentData } = useContext(UserContext)
  console.log('current', currentData)
  const [userName, setUserName] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [gender, setGender] = useState()

  useEffect(() => {
    currentData && setUserName(currentData[0])
    currentData && setPhoneNumber(currentData[1])
    currentData && setGender(currentData[2])
  }, [currentData])

  const { getEntries } = useFirestore()

  const submitHandler = (e) => {
    e.preventDefault()
    // addNewEntry('users', { userName, phoneNumber, gender })
    getEntries('users')
    handleClose()
    setCurrentData(null)
  }
  //* Modal Functions
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    padding: '2rem',
    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
  }
  const [open, setOpen] = useState(false)

  useEffect(() => {
    currentData && setOpen(true)
  }, [currentData])

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Stack sx={style} component='form' onSubmit={submitHandler} spacing={2}>
          <Typography variant='h1' fontSize={24} textAlign={'center'} mb={1}>
            Edit Contact
          </Typography>

          <TextField
            id='outlined-basic'
            type={'text'}
            label='Name'
            variant='outlined'
            // placeholder='Enter name'
            error={false}
            required
            fullWidth
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <TextField
            id='outlined-basic'
            type={'tel'}
            label='Phone'
            variant='outlined'
            // placeholder='Enter phone number'
            error={false}
            required
            fullWidth
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

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

          <Button
            variant='contained'
            type='submit'
            sx={{ padding: '0.5rem 0', fontSize: '1.3rem' }}
            fullWidth
          >
            Add
          </Button>
        </Stack>
      </Modal>
    </div>
  )
}
export default EditModal
