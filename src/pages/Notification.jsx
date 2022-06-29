import React from 'react';
import HorIcSubtext from '../components/HorIcSubtext';
import TopNavBar from '../components/TopNavBar';

const Notification = () => {
  return (
    <div className='w-full mt-4'>
      <TopNavBar buttonL={1} buttonR={1} menuName={'Notification'} />

      <div className='px-6 pt-4 pb-6'>
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
    </div>
  );
};

export default Notification;
