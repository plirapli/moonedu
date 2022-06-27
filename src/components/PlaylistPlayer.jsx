import CircleIc from '../components/CircleIc';

const PlaylistPlayer = ({ title, dur, ...props }) => {
  const dummyText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit tes tes';

  return (
    <div className='px-4 py-[0.75rem] flex items-center'>
      <CircleIc icon={props.iconL} className={props.icClassNameL} />
      <div className='w-full mx-3 overflow-hidden'>
        <p className='font-medium truncate'>{title || dummyText}</p>
        <p className='text-subtext text-gray'>{dur || '00:00'}</p>
      </div>
      <CircleIc
        icon={props.iconR}
        className={`p-1 shadow-none ${
          props.icClassNameR || 'bg-green-600 text-white'
        }`}
        size='16'
      />
    </div>
  );
};

export default PlaylistPlayer;
