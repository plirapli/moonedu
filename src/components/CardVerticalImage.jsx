import { Icon } from '@iconify/react';
import DefaultImg from '../assets/courses/uiux.jpg';

const CardVerticlImage = (props) => {
  const letterCounter = (str) => {
    const arr = str.split('');
    return (arr.length > 25 ? arr.slice(0, 27).join('') : arr.join()) + '...';
  };

  return (
    <div className='min-w-[11.25rem] rounded-xl bg-white shadow overflow-hidden'>
      <div
        className='w-45 h-28 bg-cover'
        style={{ backgroundImage: `url(${props.img || DefaultImg})` }}>
        {/* <img
          className='w-full h-full bg-cover bg-primary-base'
          src={props.img || DefaultImg}
          alt=''
        /> */}
      </div>
      <div className='p-3 pt-1'>
        <p className='font-medium'>
          {letterCounter(props.title) || 'Lorem ipsum dolor sit amet'}
        </p>
        <div className='mt-1 flex justify-between items-center'>
          <div className='flex items-center text-smallest text-gray'>
            <Icon icon='bxs:star' width='12' />
            <p className='ml-1'>{props.lSubtext || 'Subtext'}</p>
          </div>
          <p className='ml-2 text-smallest'>{props.rSubtext || 'Subtext'}</p>
        </div>
      </div>
    </div>
  );
};

export default CardVerticlImage;
