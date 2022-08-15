import { useParams, useNavigate, Link } from 'react-router-dom';

// Comp
import TopNavBar from '../components/TopNavBar';
import SearchBar from '../components/SearchBar';
import HorImg from '../components/HorImg';
import BtnText from '../components/BtnText';

import EmptyState from '../assets/empty_course.png';

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
      <div className='px-6'>
        <div className='mt-4'>
          <SearchBar />
        </div>

        {/* Courses */}
        {dispCourses.length >= 1 && (
          <>
            <div className='mt-4 grid grid-cols-2 gap-2'>
              <BtnText text='Sort By' className='bg-white text-black' />
              <BtnText text='Filter' className='bg-white text-black' />
            </div>
            <div className='mt-4'>
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
          </>
        )}

        {/* Courses Empty State */}
        {dispCourses.length <= 0 && (
          <div className='mt-16 pb-6 flex flex-col items-center'>
            <img className='w-52 h-52' src={EmptyState} alt='' />
            <div className='mt-4 text-center'>
              <h2 className='text-heading-2'>You wishlist is empty</h2>
              <p className='font-medium text-gray'>
                Explore more and make a wish
              </p>
            </div>
            <div className='w-full mt-5'>
              <Link to='/category/all'>
                <BtnText text='Browse Categories' />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Courses;
