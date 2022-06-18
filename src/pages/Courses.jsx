import { useParams, Link } from 'react-router-dom';

// Comp
import TopNavBar from '../components/TopNavBar';
import SearchBar from '../components/SearchBar';
import HorizontalWImages from '../components/HorizontalWImages';
import BtnText from '../components/BtnText';

const Courses = (props) => {
  const { id } = useParams();
  const category = props.categories.filter((cat) => cat.id === id)[0];

  const menuName = category.title;
  const dispCourses = props.courses.filter(
    (course) => course.category === category.id
  );

  return (
    <div className='w-full mt-4'>
      {/* HEADER */}
      <TopNavBar buttonL={1} buttonR={1} menuName={menuName} />
      <div className='px-6 mt-4'>
        <SearchBar />
      </div>

      <div className='mt-4 px-6 grid grid-cols-2 gap-2'>
        <BtnText text='Sort By' btnColor='bg-white' txtColor='text-black' />
        <BtnText text='Filter' btnColor='bg-white' txtColor='text-black' />
      </div>

      {/* Courses */}
      {dispCourses.length >= 1 && (
        <div className='mt-4 px-6 pb-6'>
          <div className='grid gap-3'>
            {dispCourses.map((course, i) => (
              <HorizontalWImages
                key={i}
                data={course}
                lSubtext={course.rating}
                rSubtext={`Rp${course.price},-`}
                boolState={course.wishlist}
                setState={props.setCourses}
                items={props.courses}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
