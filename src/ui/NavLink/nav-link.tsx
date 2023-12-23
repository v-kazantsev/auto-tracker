import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import './style.scss';

type Props = {
  to: string;
  caption: string;
}

export const UiNavLink = ({ to, caption }: Props) => (
  <NavLink to={to}>
    {<Typography
      variant="h6"
      noWrap
      sx={{
        display: { xs: 'none', md: 'flex' },
        fontWeight: 700,
        color: 'inherit',
        textDecoration: 'none'
      }}
    >
      {caption}
    </Typography>}
  </NavLink>
)