import { useParams } from 'react-router-dom';
import Donate from '../components/Donate';
import TopNavBar from '../components/TopNavBar';

const Transaction = ({ courses }) => {
  const { id } = useParams();
  const dispCourse = courses.filter((course) => course.id === parseInt(id))[0];
  const menuName = dispCourse.title;

  return (
    <>
      {/* HEADER */}
      <TopNavBar buttonL={1} menuName={menuName} />

      {/* Donate State Handler */}
      <div className='mt-34 px-6'>
        <Donate />
      </div>
    </>
  );
};

export default Transaction;
