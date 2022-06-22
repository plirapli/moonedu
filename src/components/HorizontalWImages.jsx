import { Icon } from '@iconify/react';
import DefaultImg from '../assets/courses/uiux.jpg';

const HorizontalWImages = (props) => {
  const boolState = props.boolState || 0;

  const btnHandler = (e) => {
    e.stopPropagation();
    props.setState(
      props.items.map((item) =>
        item.id === props.data.id ? { ...item, wishlist: !item.wishlist } : item
      )
    );
  };

  const iconSolid = 'bxs:heart';
  const iconOutline = 'bx:heart';

  return (
    <div className='rounded-xl bg-white shadow overflow-hidden'>
      <div className='flex'>
        <img
          className='w-20 h-20 bg-primary-base'
          src={props.data.img || DefaultImg}
          alt=''
        />
        <div className='px-3 py-2 flex-1 flex flex-col justify-center'>
          <div className='flex items-start'>
            <p className='w-full h-12 font-medium clamp'>
              {props.data.title || 'Lorem ipsum dolor sit amet'}
            </p>
            <button
              onClick={btnHandler}
              className='
                ml-2 p-2 text-red-500 
                transition-all hover:bg-red-100 hover:rounded-full'>
              <Icon
                icon={`${boolState ? iconSolid : iconOutline}`}
                width='24'
              />
            </button>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center text-smallest text-gray'>
              <Icon icon='bxs:star' width='12' />
              <p className='ml-1'>{props.lSubtext || 'Subtext'}</p>
            </div>
            <p className='ml-2 text-smallest'>{props.rSubtext || 'Subtext'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalWImages;
