import CircleIc from './CircleIc';

const HorIcSubtext = ({ icon, isActive, text, subtext, ...props }) => {
  const dummyTextLong = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Proin non congue arcu. Phasellus mollis pretium.`;

  return (
    <div
      className={`px-4 py-3 flex items-start rounded-xl shadow ${
        isActive ? 'bg-primary-base' : 'bg-white'
      }`}>
      <div className='mt-1'>
        <CircleIc
          icon={icon}
          className='bg-primary-sub text-primary-base p-[0.375rem]'
        />
      </div>
      <div className='w-full mx-3'>
        <div className='flex justify-between items-center font-medium'>
          <div className={isActive && 'text-white'}>
            {text || 'Lorem ipsum'}
          </div>
          <div
            className={`text-smallest ${
              isActive ? 'text-white' : 'text-gray'
            }`}>
            {props.tinyText || 'Lorem ipsum'}
          </div>
        </div>
        <div
          className={`text-subtext clamp ${
            isActive ? 'text-white' : 'text-gray'
          }`}>
          {subtext || dummyTextLong}
        </div>
      </div>
    </div>
  );
};

export default HorIcSubtext;
