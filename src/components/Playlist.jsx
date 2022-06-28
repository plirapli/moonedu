import PlaylistPlayer from './PlaylistPlayer';

const Playlist = ({ items, setSelected, ...props }) => {
  const btnHandler = (isBool, selected) => {
    if (!isBool) {
      props.setClickCounter((prev) => (prev += 1));
      setSelected((prev) => (prev = selected));
    }
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} onClick={() => btnHandler(item.isLocked, item)}>
          <PlaylistPlayer
            data={item}
            title={item.title}
            duration={item.duration}
            isBool={item.isLocked}
            selected={props.selected.id}
          />
        </div>
      ))}
    </div>
  );
};

export default Playlist;
