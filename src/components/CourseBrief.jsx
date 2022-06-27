import { Icon } from '@iconify/react';

const CourseBrief = ({ data, btnHandler, ...props }) => {
  const icSolid = props.icSolid || 'bxs:heart';
  const icOutline = props.icOutline || 'bx:heart';
  const icon = props.boolState ? icSolid : icOutline;
  const text =
    data.title || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
  const creator = data.creator || 'John H. Doe';
  const rating = data.rating || 'subtext';
  const price = `Rp${data.price || '00.0000'},-`;

  return (
    <>
      <div className='flex justify-between items-start'>
        <div>
          <h2 className='text-heading-2 clamp'>{text}</h2>
          <p className='text-subtext'>
            By <span className='text-primary-base'>{creator}</span>
          </p>
        </div>
        <button
          onClick={btnHandler || console.error('Button handlernya mana woi')}
          className={` ml-2 p-2 transition-all rounded-full 
            ${props.btnClassName || 'text-red-500 hover:bg-red-100'}`}>
          <Icon icon={`${icon}`} width='24' />
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center text-smallest text-gray'>
          <Icon icon='bxs:star' width='12' />
          <p className='ml-1'>{rating}</p>
        </div>
        {!data.isBought && <p className='ml-2 text-heading-2'>{price}</p>}
      </div>
    </>
  );
};

export default CourseBrief;
