import { Icon } from '@iconify/react';

const CircleIc = ({ icon, size, ...props }) => {
  return (
    <div
      className={`p-2 bg-primary-base text-white rounded-full ${props.className}`}>
      <Icon
        icon={icon || 'bi:play-fill'}
        width={size || '24'}
        height={size || '24'}
      />
    </div>
  );
};

export default CircleIc;
