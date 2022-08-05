import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const TopNavBar = (props) => {
  const isActiveL = props.buttonL || 0;
  const isActiveR = props.buttonR || 0;

  let navigate = useNavigate();
  const backButton = () => navigate(-1);
  const cartButton = () => navigate('/cart');

  return (
    <div
      className='max-w-screen-sm w-full fixed top-0 
                    bg-primary-bg flex items-center px-4 py-2'>
      <button
        type='button'
        onClick={props.backButton || backButton}
        className={`${
          isActiveL ? '' : 'hidden'
        } p-2 rounded-lg transition-all hover:bg-primary-sub`}>
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
        onClick={props.rightButton || cartButton}
        className={`${
          isActiveR ? '' : 'hidden'
        } p-2 rounded-lg transition-all hover:bg-primary-sub`}>
        <Icon icon='bx:cart' width='28' />
      </button>
    </div>
  );
};

export default TopNavBar;
