import NavButton from './NavButton';

function NavBar(props) {
  const menus = [
    {
      id: 1,
      title: 'Home',
      icInactive: 'fluent:home-16-regular',
      icActive: 'fluent:home-16-filled',
      path: ['/', '/all-categories'],
    },
    {
      id: 2,
      title: 'My Learning',
      icInactive: 'ep:video-play',
      icActive: 'ci:play-circle-filled',
      path: ['/my-learning'],
    },
    {
      id: 3,
      title: 'Wishlist',
      icInactive: 'ant-design:heart-outlined',
      icActive: 'ant-design:heart-filled',
      path: ['/wishlist'],
    },
    {
      id: 4,
      title: 'Profile',
      icInactive: 'clarity:avatar-line',
      icActive: 'clarity:avatar-solid',
      path: ['/profile'],
    },
  ];

  return (
    <div className='bg-white shadow-navBar'>
      <nav>
        <ul className='flex justify-evenly'>
          {menus.map((menu, i) => (
            <NavButton
              key={i}
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
