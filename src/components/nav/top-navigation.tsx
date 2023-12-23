import { Box, AppBar as MuiAppBar, AppBarProps as MuiAppBarProps, Toolbar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SIDEBAR_WIDTH } from 'config/constants';
import { UiNavLink } from 'ui';
import { topBarConfig } from './topbar-config';

type Props = {
  onDrawerOpen: VoidFunction;
}

type AppBarProps = {
  open?: boolean;
} & MuiAppBarProps

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: SIDEBAR_WIDTH,
    width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const TopNavigation = ({ open, onDrawerOpen, ...props }: AppBarProps & Props) => (
  <AppBar position="fixed" open={open} {...props}>
    <Toolbar>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
      </IconButton>
      <Box sx={{ml: 40, display: 'flex', gap: 6}}>
        {topBarConfig.map(({ to, text }) => (
          <UiNavLink to={to} caption={text} key={to} />
        ))}
      </Box>
      <AccountCircleIcon sx={{ml: 'auto'}} />
    </Toolbar>
  </AppBar>
)