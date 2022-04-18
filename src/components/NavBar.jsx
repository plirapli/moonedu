import { useState } from 'react';
import NavButton from './NavButton';

function NavBar() {
  const [activeMenu, setActiveMenu] = useState('home');

  const menus = [
    {
      id: 'home',
      title: 'Home',
      icInactive: 'fluent:home-16-regular',
      icActive: 'fluent:home-16-filled',
      path: '/',
    },
    {
      id: 'learning',
      title: 'My Learning',
      icInactive: 'ep:video-play',
      icActive: 'ci:play-circle-filled',
      path: '/tes',
    },
    {
      id: 'wishlist',
      title: 'Wishlist',
      icInactive: 'ant-design:heart-outlined',
      icActive: 'ant-design:heart-filled',
      path: '/tes',
    },
    {
      id: 'profile',
      title: 'Profile',
      icInactive: 'clarity:avatar-line',
      icActive: 'clarity:avatar-solid',
      path: '/profile',
    },
  ];

  return (
    <div className='bg-white'>
      <nav>
        <ul className='flex justify-evenly'>
          {menus.map((menu, i) => (
            <NavButton
              key={menu.id}
              id={menu.id}
              title={menu.title}
              icInactive={menu.icInactive}
              icActive={menu.icActive}
              path={menu.path}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
