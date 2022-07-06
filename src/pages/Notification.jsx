import React from 'react';
import HorIcSubtext from '../components/HorIcSubtext';
import TopNavBar from '../components/TopNavBar';

const Notification = () => {
  return (
    <>
      <TopNavBar buttonL={1} buttonR={1} menuName={'Notification'} />

      <div className='px-6 pt-4'>
        <div>
          <div className='font-medium text-gray'>Today</div>
          <div className='mt-2 grid gap-3'>
            <HorIcSubtext isActive={true} />
            <HorIcSubtext />
            <HorIcSubtext />
          </div>
        </div>
        <div className='mt-6'>
          <div className='font-medium text-gray'>Last Week</div>
          <div className='mt-2 grid gap-3'>
            <HorIcSubtext />
            <HorIcSubtext />
          </div>
        </div>
        <div className='mt-6'>
          <div className='font-medium text-gray'>Last Month</div>
          <div className='mt-2 grid gap-3'>
            <HorIcSubtext />
            <HorIcSubtext />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
