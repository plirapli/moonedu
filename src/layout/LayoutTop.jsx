import { Outlet } from 'react-router-dom';

const LayoutTop = () => {
  return (
    <div className='w-full mt-[3.75rem] pb-6'>
      <Outlet />
    </div>
  );
};

export default LayoutTop;
