import { Icon } from '@iconify/react';
import DefaultImg from '../assets/courses/uiux.jpg';

const HorImg = (props) => {
  const iconSolid = 'bxs:heart';
  const iconOutline = 'bx:heart';
  const icon = props.boolState ? iconSolid : iconOutline;
  const img = props.data.img || DefaultImg;
  const title = props.data.title || 'Lorem ipsum dolor sit amet';
  const leftSubtext = props.lSubtext || 'Subtext';
  const rightSubtext = props.rSubtext || 'Subtext';
  const btnHandler = (e) => {
    e.stopPropagation();
    props.btnHandler(props.data.id);
  };

  return (
    <div className='rounded-xl bg-white shadow overflow-hidden'>
      <div className='flex'>
        <img className='w-20 h-20 bg-primary-base' src={img} alt='' />
        <div className='px-3 py-2 flex-1 flex flex-col justify-center'>
          <div className='flex items-start'>
            <p className='w-full font-medium clamp'>{title}</p>
            <button
              onClick={btnHandler}
              className='
                ml-2 p-2 text-red-500 
                transition-all hover:bg-red-100 hover:rounded-full'>
              <Icon icon={icon} width='24' />
            </button>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center text-smallest text-gray'>
              <Icon icon='bxs:star' width='12' />
              <p className='ml-1'>{leftSubtext}</p>
            </div>
            <p className='ml-2 text-smallest'>{rightSubtext}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorImg;
