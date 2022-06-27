import CircleIc from '../components/CircleIc';

const PlaylistPlayer = ({ isBool, ...props }) => {
  const dummyText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit tes tes';
  const title = props.title || dummyText;
  const duration = props.duration || '00:00';
  const icClassNameL = isBool ? 'bg-primary-sub text-primary-base' : '';

  return (
    <div className='px-4 py-[0.75rem] flex items-center'>
      <CircleIc className={icClassNameL} />
      <div className='w-full mx-3 overflow-hidden'>
        <p className='font-medium truncate'>{title}</p>
        <p className='text-subtext text-gray'>{duration}</p>
      </div>
      {isBool && (
        <CircleIc
          icon='bxs:lock-alt'
          size='16'
          className='p-1 shadow-none bg-secondary-sub text-secondary-base'
        />
      )}
    </div>
  );
};

export default PlaylistPlayer;
