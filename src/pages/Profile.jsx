import React, { useContext } from 'react'
import AuthContext from '../context/auth-context'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import DraftsIcon from '@mui/icons-material/Drafts'
import PersonIcon from '@mui/icons-material/Person'
const Profile = () => {
  const { userInfo } = useContext(AuthContext)
  console.log(userInfo)
  const {
    displayName,
    email,
    reloadUserInfo: { createdAt }
  } = userInfo
  // const date = new Date(createdAt)
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        margin: '2rem auto'
      }}
    >
      <nav aria-label='main mailbox folders'>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={displayName} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HowToRegIcon />
              </ListItemIcon>
              <ListItemText primary={createdAt} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  )
}
export default Profile
