import PlaylistPlayer from './PlaylistPlayer';

const Playlist = ({ items, ...props }) => {
  return (
    <div>
      {items.map((item) => (
        <PlaylistPlayer
          key={item.id}
          title={item.title}
          duration={item.duration}
          isBool={item.isLocked}
        />
      ))}
    </div>
  );
};

export default Playlist;
