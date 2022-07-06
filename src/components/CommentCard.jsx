import { Icon } from '@iconify/react';
import React from 'react';
import CircleIc from './CircleIc';

const CommentCard = () => {
  const dummyTextLong = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Proin non congue arcu. Phasellus mollis pretium.`;

  return (
    <div className='rounded-2xl shadow-md overflow-hidden'>
      <div className='px-4 py-3 flex bg-primary-bg'>
        <div className='mt-1'>
          <CircleIc
            icon='bxs-star'
            className='bg-primary-sub text-primary-base p-[0.375rem]'
          />
        </div>
        <div className='w-full mx-2'>
          <div className='flex justify-between items-center font-medium'>
            <div className='text-black'>Lorem ipsum</div>
            <div className='text-smallest text-gray'>Just now</div>
          </div>
          <div className='text-subtext clamp-4 text-black'>{dummyTextLong}</div>
        </div>
      </div>
      <div className='p-4 flex justify-between items-center bg-primary-base text-white'>
        <p className='text-subtext'>View Replies</p>
        <Icon icon='eva:arrow-ios-forward-fill' width='20' />
      </div>
    </div>
  );
};

export default CommentCard;
