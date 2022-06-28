import React from 'react';

const MediaPlayer = (props) => {
  const title = props.title || 'Course Video';
  const url = props.url || 'https://www.youtube.com/embed/dQw4w9WgXcQ';

  return (
    <iframe
      title={title}
      frameBorder='0'
      allow='clipboard-write; encrypted-media;'
      className='w-full aspect-video shadow rounded-2xl'
      src={url}></iframe>
  );
};

export default MediaPlayer;
