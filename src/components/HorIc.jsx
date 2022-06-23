import { Icon } from '@iconify/react';
import CircleIc from './CircleIc';

const HorIc = ({ icon, text }) => {
  return (
    <div className='px-4 py-3 flex items-center bg-white rounded-xl shadow'>
      <CircleIc
        icon={icon}
        className='bg-primary-sub text-primary-base p-[0.375rem]'
      />
      <p className='w-full mx-3 font-medium'>{text || 'Lorem ipsum'}</p>
      <div className='text-gray'>
        <Icon icon='eva:arrow-ios-forward-fill' width='32' height='32' />
      </div>
    </div>
  );
};

export default HorIc;
