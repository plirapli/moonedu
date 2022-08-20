import { Icon } from '@iconify/react';
import CommentCard from './CommentCard';

const CommentTab = ({ isComment, setIsComment }) => {
  const btnClose = (setState) => setState(() => false);

  return (
    <div
      className={`fixed ${
        isComment ? '' : 'hidden'
      } top-0 h-screen max-w-screen-sm w-full bg-black bg-opacity-40 transition-all`}>
      <div
        className='w-full h-4/6 absolute bottom-0 
                   flex flex-col
                 bg-white rounded-t-[1.75rem] shadow-navBar 
                   animate-bottomPopUp overflow-y-auto no-scroll'>
        {/* Header */}
        <div className='w-full sticky top-0 bg-white flex items-center shadow-card'>
          <p className='w-full ml-[4.25rem] font-medium text-center truncate'>
            Discussions
          </p>
          <button
            type='button'
            onClick={() => btnClose(setIsComment)}
            className='p-4 text-gray'>
            <Icon icon='eva:close-fill' width='24' />
          </button>
        </div>

        {/* Main */}
        <div className='flex-auto p-5 bg-white flex flex-col gap-4'>
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>

        {/* Footer / Input Comment */}
        <div className='w-full sticky bottom-0 bg-white shadow-navBar'>
          <form className='flex items-center' action=''>
            <input
              className='p-4 outline-none w-full'
              type='text'
              placeholder='Add a comment...'
            />
            <span
              className='p-4 text-primary-base cursor-pointer 
                         transition-all hover:bg-primary-sub'>
              <Icon icon='bxs:send' width='24' />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentTab;
