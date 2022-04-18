import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Layout() {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
}

export default Layout;
