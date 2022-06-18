import React from 'react';

const BtnText = ({ text, btnColor, txtColor, ...props }) => {
  return (
    <button
      onClick={props.btnHandler}
      className={`w-full p-3 flex justify-center items-center rounded-xl shadow 
                 ${btnColor ? btnColor : 'bg-primary-base'}`}>
      <p className={`font-medium ${txtColor ? txtColor : 'text-white'}`}>
        {text || 'Text Button'}
      </p>
    </button>
  );
};

export default BtnText;
