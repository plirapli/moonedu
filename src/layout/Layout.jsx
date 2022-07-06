import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Layout(props) {
  return (
    <>
      <div className='min-h-screen pb-14'>
        <Outlet />
      </div>
      <div className='w-full max-w-screen-sm fixed bottom-0'>
        <NavBar
          activeMenu={props.activeMenu}
          setActiveMenu={props.setActiveMenu}
        />
      </div>
    </>
  );
}

export default Layout;
