import React from 'react';

const BtnText = ({ text, btnColor, txtColor, ...props }) => {
  return (
    <button
      onClick={props.btnHandler}
      className={`w-full p-3 flex justify-center items-center rounded-xl shadow 
                 bg-primary-base text-white ${props.className}`}>
      <p className='font-medium'>{text || 'Text'}</p>
    </button>
  );
};

export default BtnText;
