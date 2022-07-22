import { Grid } from '@mui/material'

import React from 'react'
import ContactsTable from '../components/ContactsTable'
import InputPanel from '../components/InputPanel'

const Home = () => {
  return (
    <Grid
      container
      justifyContent={'space-between'}
      alignItems={'center'}
      // gap={2}
    >
      <Grid item xs={12} sm={6} md={5} lg={4} padding={3}>
        <InputPanel />
      </Grid>
      <Grid item xs={12} sm={6} md={7} lg={8}>
        <ContactsTable />
      </Grid>
    </Grid>
  )
}

export default Home
