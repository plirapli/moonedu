import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const TopNavBar = (props) => {
  const isActiveL = props.buttonL || 0;
  const isActiveR = props.buttonR || 0;

  let navigate = useNavigate();
  const backButton = () => navigate(-1);

  return (
    <div className='flex items-center'>
      <button
        type='button'
        onClick={backButton}
        className={`${isActiveL ? '' : 'hidden'} py-2 pr-4 pl-6`}>
        <Icon icon='eva:arrow-ios-back-fill' width='28' />
      </button>
      <h1
        className={`
        ${isActiveL ? '' : 'ml-[4.25rem]'} ${isActiveR ? '' : 'mr-[4.25rem]'} 
        w-full text-heading-2 text-center truncate`}>
        {props.menuName || 'Menu Name'}
      </h1>
      <button
        type='button'
        className={`${isActiveR ? '' : 'hidden'} py-2 pl-4 pr-6`}>
        <Icon icon='bx:cart' width='28' />
      </button>
    </div>
  );
};

export default TopNavBar;
