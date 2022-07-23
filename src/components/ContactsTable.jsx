import React, { useContext, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Edit from '@mui/icons-material/Edit'
import Delete from '@mui/icons-material/Delete'
import UserContext from '../context/user-context'
import useFirestore from '../hooks/useFirestore'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

function createData(username, phoneNumber, gender) {
  return { username, phoneNumber, gender }
}

const rows = [createData('Behzat Ç', 1594433, 'male', 24, 4.0)]

const ContactsTable = () => {
  const { contacts } = useContext(UserContext)
  const { getEntries } = useFirestore()

  useEffect(() => {
    getEntries('users')
  }, [])
  console.log(contacts)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>User Name</StyledTableCell>
            <StyledTableCell align='center'>Phone Number</StyledTableCell>
            <StyledTableCell align='center'>Gender</StyledTableCell>
            <StyledTableCell align='center'>Edit</StyledTableCell>
            <StyledTableCell align='center'>Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts?.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component='th' scope='row'>
                {row.data.userName}
              </StyledTableCell>
              <StyledTableCell align='center'>
                {row.data.phoneNumber}
              </StyledTableCell>
              <StyledTableCell align='center'>
                {row.data.gender}
              </StyledTableCell>
              <StyledTableCell align='center'>
                <Edit />
              </StyledTableCell>
              <StyledTableCell align='center'>
                <Delete />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default ContactsTable
