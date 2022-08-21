import { useState } from 'react';

import CommentCard from './CommentCard';
import { Icon } from '@iconify/react';

// Avatars
import { Avatar_1, Avatar_2, Avatar_3, Avatar_4 } from '../utils/getAvatar';

const CommentTab = ({ isComment, setIsComment }) => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState('');

  const randomizeProfile = () => {
    const profilePics = [Avatar_1, Avatar_2, Avatar_3, Avatar_4];
    const colors = [];

    const randPic = Math.floor(Math.random() * profilePics.length);
    const randColor = Math.floor(Math.random() * profilePics.length);

    return profilePics[randPic];
  };

  const btnClose = (setState) => setState(() => false);
  const onChangeHandler = (e) => setContent(() => e.target.value);
  const addCommentHandler = (e, content) => {
    e.preventDefault();
    setComments((prev) => [
      ...prev,
      {
        id: +new Date(),
        profilePics: randomizeProfile(),
        userId: 'john_doe',
        userName: 'John Doe',
        content,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

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
          <form
            onSubmit={addCommentHandler}
            className='flex items-center'
            action=''>
            <input
              onChange={onChangeHandler}
              className='p-4 outline-none w-full'
              type='text'
              value={content}
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
