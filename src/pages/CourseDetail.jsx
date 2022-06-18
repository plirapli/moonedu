import { useParams } from 'react-router-dom';

// Comp
import TopNavBar from '../components/TopNavBar';
import SearchBar from '../components/SearchBar';

const CourseDetail = (props) => {
  const { id } = useParams();
  const dispCourse = props.courses.filter(
    (course) => course.id === parseInt(id)
  )[0];
  const menuName = dispCourse.title;

  return (
    <div className='w-full mt-4'>
      {/* HEADER */}
      <TopNavBar buttonL={1} buttonR={1} menuName={menuName} />
      <div className='px-6 mt-4'>
        <SearchBar />
      </div>
    </div>
  );
};

export default CourseDetail;
