import { Outlet } from 'react-router-dom';
import { Navigation } from './nav/navigation';


export const Layout = () => (
  <>
  <Navigation />
  <Outlet />
  </>
)