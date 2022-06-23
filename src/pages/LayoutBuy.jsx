import { Outlet } from 'react-router-dom';
import BuyCTA from '../components/BuyCTA';

function LayoutBut() {
  return (
    <>
      <div className='min-h-screen pb-14'>
        <Outlet />
      </div>
      <div className='w-full max-w-screen-sm fixed bottom-0'>
        <BuyCTA />
      </div>
    </>
  );
}

export default LayoutBut;
