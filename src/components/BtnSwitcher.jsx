import BtnText from './BtnText';

const BtnSwitcher = ({ qty, boolState, setBoolState, ...props }) => {
  const pageHandler = (state, setState) => setState(() => state);

  return (
    <div className='p-2 bg-primary-sub flex items-center rounded-2xl shadow'>
      <div className='w-full' onClick={() => pageHandler(true, setBoolState)}>
        <BtnText
          text={`Playlist (${qty || 22})`}
          className={
            !boolState &&
            `bg-primary-sub text-black shadow-none transition 
                 hover:bg-primary-base hover:bg-opacity-20`
          }
        />
      </div>
      <div className='w-full' onClick={() => pageHandler(false, setBoolState)}>
        <BtnText
          text='Description'
          className={
            boolState &&
            `bg-primary-sub text-black shadow-none transition 
                 hover:bg-primary-base hover:bg-opacity-20`
          }
        />
      </div>
    </div>
  );
};

export default BtnSwitcher;
