import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box
} from '@mui/material'
import useFirestore from '../hooks/useFirestore'

const EditModal = ({ show, title, message }) => {
  const [userName, setUserName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [gender, setGender] = useState('')

  const { addNewEntry, getEntries } = useFirestore()
  const submitHandler = (e) => {
    e.preventDefault()
    addNewEntry('users', { userName, phoneNumber, gender })
    getEntries('users')
    handleClose()
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
    show && setOpen(true)
  }, [show])

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
        <Box sx={style} component='form' onSubmit={submitHandler}>
          <Typography variant='h1' fontSize={24} textAlign={'center'} mb={1}>
            Edit Contact
          </Typography>

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
        </Box>
      </Modal>
    </div>
  )
}
export default EditModal
