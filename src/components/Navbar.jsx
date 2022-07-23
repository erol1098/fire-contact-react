import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import LoginIcon from '@mui/icons-material/Login'
import { useNavigate } from 'react-router-dom'
import useFirebase from 'auth-web-firebase'
import AuthContext from '../context/auth-context'
import { AppBar, Button, Container, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
export default function AccountMenu() {
  const { userInfo, auth } = useContext(AuthContext)
  const { logOut } = useFirebase(auth)
  const navigate = useNavigate()

  //* Navbar Functions
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorElNav, setAnchorElNav] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <LocalFireDepartmentIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>Item</Typography>
                </MenuItem>
              </Menu>
            </Box>

            <LocalFireDepartmentIcon
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
            <Typography
              variant='h5'
              noWrap
              component='a'
              href=''
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Item
              </Button>
            </Box>

            <Tooltip title='Account settings'>
              <IconButton
                onClick={handleClick}
                size='small'
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar
                  src={`https://ui-avatars.com/api/?name=${userInfo?.displayName?.replace(
                    ' ',
                    '+'
                  )}`}
                  sx={{ width: 32, height: 32 }}
                >
                  M
                </Avatar>
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={anchorEl}
              id='account-menu'
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0
                  }
                }
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              {userInfo && (
                <MenuItem onClick={(e) => navigate('/profile')}>
                  <Avatar
                    src={`https://ui-avatars.com/api/?name=${
                      userInfo.displayName?.replace(' ', '+') || 'undefined'
                    }`}
                  />
                  {userInfo?.displayName}
                </MenuItem>
              )}
              <Divider />
              <MenuItem onClick={(e) => navigate('/register')}>
                <ListItemIcon>
                  <PersonAdd fontSize='small' />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize='small' />
                </ListItemIcon>
                Settings
              </MenuItem>
              {!userInfo && (
                <MenuItem onClick={(e) => navigate('/login')}>
                  <ListItemIcon>
                    <LoginIcon fontSize='small' />
                  </ListItemIcon>
                  Login
                </MenuItem>
              )}
              {userInfo && (
                <MenuItem onClick={() => logOut()}>
                  <ListItemIcon>
                    <Logout fontSize='small' />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              )}
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
