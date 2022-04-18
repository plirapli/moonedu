import { Icon } from '@iconify/react';

const CardInline = ({ title, subtitle, icon }) => {
  return (
    <div className='p-4 bg-white flex items-center rounded-2xl shadow'>
      <div className='p-2 bg-primary-sub rounded-full text-primary-base'>
        <Icon icon={icon || 'mdi:web'} width='28' />
      </div>
      <div className='ml-3'>
        <p>{title || 'Title'}</p>
        <p className='text-subtext text-gray capitalize'>
          {subtitle || 'Subtext'}
        </p>
      </div>
    </div>
  );
};

export default CardInline;
