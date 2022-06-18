import React from 'react';

const BtnText = (props) => {
  return (
    <button
      onClick={props.btnHandler}
      className='w-full p-3 flex justify-center items-center bg-primary-base rounded-xl shadow'>
      <p className='text-white font-medium'>{props.text || 'Text Button'}</p>
    </button>
  );
};

export default BtnText;
