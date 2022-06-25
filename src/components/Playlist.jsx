import PlaylistPlayer from './PlaylistPlayer';

const Playlist = ({ items, ...props }) => {
  return (
    <div>
      {items.map((item) => (
        <PlaylistPlayer
          key={item.id}
          title={item.title}
          icClassNameL={item.isLocked ? 'bg-primary-sub text-primary-base' : ''}
          icClassNameR={
            item.isLocked ? 'bg-secondary-sub text-secondary-base' : ''
          }
          iconR={item.isLocked ? 'bxs:lock-alt' : 'bi:check-lg'}
          dur={item.duration}
        />
      ))}
    </div>
  );
};

export default Playlist;
