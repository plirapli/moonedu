import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Layout(props) {
  return (
    <>
      <Outlet />
      <NavBar
        activeMenu={props.activeMenu}
        setActiveMenu={props.setActiveMenu}
      />
    </>
  );
}

export default Layout;
