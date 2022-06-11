import { Icon } from '@iconify/react';

const TopNavBar = (props) => {
  const isActiveL = props.isOnL || 1;
  const isActiveR = props.isOnR || 1;

  return (
    <div className='flex items-center'>
      <div className='h-11 w-[3.25rem]'>
        <button className={`${isActiveL ? '' : 'hidden'} w-full h-full`}>
          <Icon icon='bx:cart' width='28' />
        </button>
      </div>
      <h1 className={`w-full text-heading-2 text-center`}>
        {props.menuName || 'Menu Name'}
      </h1>
      <div className='h-11 w-[3.25rem]'>
        <button className={`${isActiveR ? '' : 'hidden'} w-full h-full`}>
          <Icon icon='bx:cart' width='28' />
        </button>
      </div>
    </div>
  );
};

export default TopNavBar;
