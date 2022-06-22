import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

function NavBar(props) {
  const menus = [
    {
      id: 1,
      title: 'Home',
      icInactive: 'fluent:home-16-regular',
      icActive: 'fluent:home-16-filled',
      path: ['/', '/category/'],
    },
    {
      id: 2,
      title: 'My Learning',
      icInactive: 'ep:video-play',
      icActive: 'ci:play-circle-filled',
      path: ['/my-learning', '/my-learning/'],
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

const NavButton = ({
  title,
  icInactive,
  icActive,
  path,
  activeMenu,
  setActiveMenu,
}) => {
  let navigate = useNavigate();

  const redirect = (path) => {
    setActiveMenu(() => path[0]);
    navigate(path[0]);
  };

  const isActive = () => {
    return path.some((p) => {
      let slash = p.split('').filter((pSlash) => pSlash === '/').length;
      return slash > 1 ? activeMenu.includes(p) : p === activeMenu;
    });
  };

  return (
    <li
      onClick={() => redirect(path)}
      className='w-full p-1 flex flex-col justify-center items-center cursor-pointer'>
      <div className={isActive() ? 'text-primary-base' : 'text-gray'}>
        <Icon icon={isActive() ? icActive : icInactive} width='24' />
      </div>
      <p
        className={`mt-1 text-smallest font-medium ${
          isActive() ? 'text-primary-base' : 'text-gray'
        }`}>
        {title || `Menu`}
      </p>
    </li>
  );
};

export default NavBar;
