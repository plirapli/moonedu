import React from 'react';

const BtnText = ({ text, btnColor, txtColor, ...props }) => {
  return (
    <button
      onClick={props.btnHandler}
      className={`w-full p-3 flex justify-center items-center rounded-xl shadow 
                 ${props.className || 'bg-primary-base text-white'}`}>
      <p className='font-medium'>{text || 'Text'}</p>
    </button>
  );
};

export default BtnText;
