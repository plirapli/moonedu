import { Icon } from '@iconify/react';
import CircleIc from './CircleIc';

// Avatars
import { Avatar_1, Avatar_2, Avatar_3, Avatar_4 } from '../utils/getAvatar';

const CommentCard = () => {
  const randomizeProfile = () => {
    const profilePics = [Avatar_1, Avatar_2, Avatar_3, Avatar_4];
    const colors = [];

    const randPic = Math.floor(Math.random() * profilePics.length);
    const randColor = Math.floor(Math.random() * profilePics.length);

    return profilePics[randPic];
  };

  const dummyTextLong = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Proin non congue arcu. Phasellus mollis pretium.`;

  return (
    <div className='rounded-2xl shadow overflow-hidden'>
      <div className='px-4 py-3 flex bg-primary-bg'>
        <div className='mt-1'>
          <div className='rounded-full'>
            <img className='w-11' src={randomizeProfile()} alt='' srcset='' />
          </div>
        </div>
        <div className='w-full mx-2'>
          <div className='flex justify-between items-center font-medium'>
            <div className='text-black'>Lorem ipsum</div>
            <div className='text-smallest text-gray'>Just now</div>
          </div>
          <div className='text-subtext clamp-4 text-black'>{dummyTextLong}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
