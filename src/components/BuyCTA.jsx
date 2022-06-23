import BtnText from './BtnText';
import CircleIc from './CircleIc';

const BuyCTA = () => {
  return (
    <div className='w-full px-5 py-2.5 bg-white flex items-center shadow-navBar'>
      <div className='cursor-pointer'>
        <CircleIc icon='bx:cart' size='28' className='rounded-[0.5rem]' />
      </div>
      <div className='ml-4 flex-1'>
        <BtnText text='Enroll Now' className='py-2.5' />
      </div>
    </div>
  );
};

export default BuyCTA;
