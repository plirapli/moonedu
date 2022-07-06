import { useParams, useNavigate } from 'react-router-dom';

// Comp
import TopNavBar from '../components/TopNavBar';
import SearchBar from '../components/SearchBar';
import HorImg from '../components/HorImg';
import BtnText from '../components/BtnText';

const Courses = (props) => {
  const { id } = useParams();
  const category = props.categories.filter((cat) => cat.id === id)[0];

  const menuName = category.title;
  const dispCourses = props.courses.filter(
    (course) => course.category === category.id
  );

  const navigate = useNavigate();
  const btnHandler = (id) => navigate('/course/' + id);
  const wishlistBtnHandler = (id) =>
    props.setCourses(
      props.courses.map((item) =>
        item.id === id ? { ...item, wishlist: !item.wishlist } : item
      )
    );

  return (
    <>
      {/* HEADER */}
      <TopNavBar buttonL={1} buttonR={1} menuName={menuName} />
      <div className='px-6 mt-4'>
        <SearchBar />
      </div>

      <div className='mt-4 px-6 grid grid-cols-2 gap-2'>
        <BtnText text='Sort By' className='bg-white text-black' />
        <BtnText text='Filter' className='bg-white text-black' />
      </div>

      {/* Courses */}
      {dispCourses.length >= 1 && (
        <div className='mt-4 px-6 pb-6'>
          <div className='grid gap-3'>
            {dispCourses.map((course, i) => (
              <div
                key={course.id}
                onClick={() => btnHandler(course.id)}
                className='cursor-pointer'>
                <HorImg
                  data={course}
                  lSubtext={course.rating}
                  rSubtext={`Rp${course.price},-`}
                  boolState={course.wishlist}
                  btnHandler={wishlistBtnHandler}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
