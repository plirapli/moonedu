import React from 'react';

const CardSquare = ({ title, subTitle, iconPath }) => {
  return (
    <div className='p-4 bg-white col-span-1 flex flex-col items-center rounded-2xl shadow-card cursor-pointer transition-all hover:shadow-lg'>
      <img className='w-24 h-24 bg-cover' src={iconPath} alt='Icon' />
      <div className='mt-4 self-start'>
        <p className='text-black font-medium'>{title || 'Title'}</p>
        <p className='text-subtext text-gray'>{subTitle || 'Subtitle'}</p>
      </div>
    </div>
  );
};

export default CardSquare;
