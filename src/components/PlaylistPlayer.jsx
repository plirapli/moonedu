import CircleIc from '../components/CircleIc';

const PlaylistPlayer = ({ data, ...props }) => {
  const dummyText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit tes tes';
  const title = data.title || dummyText;
  const duration = data.duration || '00:00';
  const isBool = data.isLocked;
  const isSelected = props.selected === data.id;

  return (
    <div
      className={`px-4 py-[0.75rem] flex items-center rounded-2xl 
                 transition-all hover:bg-primary-sub 
                 ${isSelected ? 'bg-primary-sub' : ''}
                 ${!isBool ? 'cursor-pointer' : 'cursor-default'}`}>
      <div className='w-full ml-2 mr-3 overflow-hidden'>
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
