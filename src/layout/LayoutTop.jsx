import { Outlet } from 'react-router-dom';

const LayoutTop = () => {
  return (
    <div className='w-full mt-[3.875rem] pb-6'>
      <Outlet />
    </div>
  );
};

export default LayoutTop;
