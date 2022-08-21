import { Avatar_1 as DefaultPics } from '../utils/getAvatar';

const CommentCard = (props) => {
  const dummyTextLong = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Proin non congue arcu. Phasellus mollis pretium.`;

  return (
    <div className='rounded-2xl shadow overflow-hidden'>
      <div className='px-4 py-3 flex bg-primary-bg'>
        <div className='mt-1'>
          <div className='rounded-full'>
            <img className='w-11' src={props.profile || DefaultPics} alt='' />
          </div>
        </div>
        <div className='w-full mx-2'>
          <div className='flex justify-between items-center font-medium'>
            <div className='text-black'>{props.userName || 'John H. Doe'}</div>
            <div className='text-smallest text-gray'>Just now</div>
          </div>
          <div className='text-subtext clamp-4 text-black'>
            {props.content || dummyTextLong}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
