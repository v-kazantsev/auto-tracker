import { AppBar, Container, Toolbar, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Outlet } from 'react-router-dom';
import { UiLink } from 'ui';

export const Layout = () => (
  <>
  <AppBar position='static'>
    {/* <Container maxWidth='xl'> */}
      <Toolbar>
        <Box sx={{ml: 40, display: 'flex'}}>
          <UiLink to='/' caption='Домой' />
          <UiLink to='/devices' caption='Список устройств' />
        </Box>
        <AccountCircleIcon sx={{ml: 'auto'}} />
      </Toolbar>
    {/* </Container> */}
  </AppBar>
  <Outlet />
  </>
)