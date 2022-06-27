// Lib
import { Link } from 'react-router-dom';

// Comp
import TopNavBar from '../components/TopNavBar';
import SearchBar from '../components/SearchBar';
import HorImg from '../components/HorImg';
import BtnText from '../components/BtnText';

// Img
import EmptyStates from '../assets/empty_wishlist.png';

const Wishlist = (props) => {
  const menuName = 'Wishlist';
  const dispCourses = props.courses.filter((course) => course.wishlist);

  const btnHandler = (id) =>
    props.setCourses(
      props.courses.map((item) =>
        item.id === id ? { ...item, wishlist: !item.wishlist } : item
      )
    );

  return (
    <div className='w-full mt-4'>
      {/* HEADER */}
      <TopNavBar buttonR={1} menuName={menuName} />
      <div className='px-6 mt-4'>
        <SearchBar />
      </div>

      {/* Courses */}
      {dispCourses.length >= 1 && (
        <div className='mt-4 px-6 pb-6'>
          <div className='grid gap-3'>
            {dispCourses.map((course, i) => (
              <HorImg
                key={course.id}
                data={course}
                lSubtext={course.rating}
                rSubtext={`Rp${course.price},-`}
                btnHandler={btnHandler}
                boolState={course.wishlist}
              />
            ))}
          </div>
        </div>
      )}

      {/* Empty State Handler */}
      {dispCourses.length <= 0 && (
        <div className='mt-16 px-6 pb-6 flex flex-col items-center'>
          <img className='w-56 h-56' src={EmptyStates} alt='' />
          <div className='text-center'>
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
  );
};

export default Wishlist;
