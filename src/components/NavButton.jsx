import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const NavButton = ({
  title,
  icInactive,
  icActive,
  id,
  path,
  activeMenu,
  setActiveMenu,
}) => {
  let navigate = useNavigate();

  const redirect = (path) => {
    setActiveMenu(() => id);
    navigate(path);
  };

  const iconPath = activeMenu === id ? icActive : icInactive;

  return (
    <li
      onClick={() => redirect(path)}
      className='w-full p-2 flex flex-col justify-center items-center cursor-pointer'>
      <div className='text-gray'>
        <Icon icon={iconPath} width='28' />
      </div>
      <p className='mt-1 text-smallest font-medium text-gray'>
        {title || `Menu`}
      </p>
    </li>
  );
};

export default NavButton;
