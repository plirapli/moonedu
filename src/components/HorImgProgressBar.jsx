import { Icon } from '@iconify/react';
import DefaultImg from '../assets/courses/uiux.jpg';

const HorImgProgressBar = (props) => {
  const boolState = props.boolState || 0;
  const { completed = 0, chapterQty = 0, ...data } = props.data || {};

  const dummyText = 'Lorem ipsum dolor sit amet consectetur edipiscing elit';
  const barWidth = ((completed / chapterQty) * 100 || 0) + '%';
  const icSolid = 'bxs:star';
  const icOutline = 'bx:star';

  const btnHandler = (e) => {
    e.stopPropagation();
    props.setState(
      props.items.map((item) =>
        item.id === props.data.id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  return (
    <div className='rounded-xl bg-white shadow overflow-hidden p-3'>
      <div className='flex'>
        <img
          className='w-16 h-16 bg-primary-base'
          src={data.img || DefaultImg}
          alt=''
        />
        <div className='ml-3 flex-1 flex flex-col justify-center'>
          <div className='flex items-start'>
            <div className='w-full'>
              <p className='font-medium clamp'>{data.title || dummyText}</p>
              <div className='mt-1 flex items-center text-smallest text-gray'>
                <Icon icon='bxs:book' width='12' />
                <p className='ml-1'>{chapterQty} Lessons</p>
              </div>
            </div>
            <button
              onClick={btnHandler}
              className='
                ml-2 p-2 text-secondary-base 
                transition-all hover:bg-secondary-sub hover:rounded-full'>
              <Icon icon={`${boolState ? icSolid : icOutline}`} width='24' />
            </button>
          </div>
          <div className='flex'></div>
        </div>
      </div>
      <div className='mt-2'>
        <div className='flex justify-between items-center text-smallest'>
          <p>Completed</p>
          <p className='text-primary-base'>
            {completed || '-'}/{chapterQty || '-'}
          </p>
        </div>
        <div className='mt-1 w-full h-[0.625rem] bg-primary-sub rounded-full overflow-hidden'>
          <div
            style={{ width: barWidth }}
            className='h-full bg-primary-base rounded-full'></div>
        </div>
      </div>
    </div>
  );
};

export default HorImgProgressBar;
