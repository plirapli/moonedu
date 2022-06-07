import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

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
    setActiveMenu(() => path);
    navigate(path);
  };

  const iconPath = activeMenu === path ? icActive : icInactive;

  return (
    <li
      onClick={() => redirect(path)}
      className='w-full p-2 flex flex-col justify-center items-center cursor-pointer'>
      <div className={activeMenu === path ? 'text-primary-base' : 'text-gray'}>
        <Icon icon={iconPath} width='28' />
      </div>
      <p
        className={`mt-1 text-smallest font-medium ${
          activeMenu === path ? 'text-primary-base' : 'text-gray'
        }`}>
        {title || `Menu`}
      </p>
    </li>
  );
};

export default NavButton;
