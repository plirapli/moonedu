import NavButton from './NavButton';

function NavBar(props) {
  const menus = [
    {
      title: 'Home',
      icInactive: 'fluent:home-16-regular',
      icActive: 'fluent:home-16-filled',
      path: '/',
    },
    {
      title: 'My Learning',
      icInactive: 'ep:video-play',
      icActive: 'ci:play-circle-filled',
      path: '/learning',
    },
    {
      title: 'Wishlist',
      icInactive: 'ant-design:heart-outlined',
      icActive: 'ant-design:heart-filled',
      path: '/wishlist',
    },
    {
      title: 'Profile',
      icInactive: 'clarity:avatar-line',
      icActive: 'clarity:avatar-solid',
      path: '/profile',
    },
  ];

  return (
    <div className='bg-white shadow-navBar'>
      <nav>
        <ul className='flex justify-evenly'>
          {menus.map((menu, i) => (
            <NavButton
              key={menu.id}
              title={menu.title}
              icInactive={menu.icInactive}
              icActive={menu.icActive}
              path={menu.path}
              activeMenu={props.activeMenu}
              setActiveMenu={props.setActiveMenu}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
