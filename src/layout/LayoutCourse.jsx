import { Outlet } from 'react-router-dom';
import CommentTab from '../components/CommentTab';

function LayoutCourse({ isComment, setIsComment }) {
  return (
    <>
      <div className='w-full mt-[3.75rem] pb-6'>
        <Outlet />
      </div>
      <CommentTab isComment={isComment} setIsComment={setIsComment} />
    </>
  );
}

export default LayoutCourse;
