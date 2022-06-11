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
    setActiveMenu(() => path[0]);
    navigate(path[0]);
  };

  let isActive = path.some((p) => p === activeMenu);

  return (
    <li
      onClick={() => redirect(path)}
      className='w-full p-1 flex flex-col justify-center items-center cursor-pointer'>
      <div className={isActive ? 'text-primary-base' : 'text-gray'}>
        <Icon icon={isActive ? icActive : icInactive} width='24' />
      </div>
      <p
        className={`mt-1 text-smallest font-medium ${
          isActive ? 'text-primary-base' : 'text-gray'
        }`}>
        {title || `Menu`}
      </p>
    </li>
  );
};

export default NavButton;
