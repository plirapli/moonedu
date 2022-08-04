import { Icon } from '@iconify/react';
import DefaultImg from '../assets/courses/uiux.jpg';

const CardVerticlImage = ({ title, img, lSubtext, rSubtext }) => {
  return (
    <div
      className='
        min-w-[11.25rem] rounded-xl bg-white shadow overflow-hidden 
        cursor-pointer transition-all hover:shadow-md'>
      <div
        className='w-45 h-28 bg-cover'
        style={{ backgroundImage: `url(${img || DefaultImg})` }}></div>
      <div className='p-3 pt-1'>
        <p className='w-full font-medium clamp'>
          {title || 'Lorem ipsum dolor sit amet'}
        </p>
        <div className='mt-1 flex justify-between items-center'>
          <div className='flex items-center text-smallest text-gray'>
            <Icon icon='bxs:star' width='12' />
            <p className='ml-1'>{lSubtext || 'Subtext'}</p>
          </div>
          <p className='ml-2 text-smallest'>{rSubtext || 'Subtext'}</p>
        </div>
      </div>
    </div>
  );
};

export default CardVerticlImage;
