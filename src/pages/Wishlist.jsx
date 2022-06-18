// Comp
import TopNavBar from '../components/TopNavBar';
import SearchBar from '../components/SearchBar';
import HorizontalWImages from '../components/HorizontalWImages';
import BtnText from '../components/BtnText';

// Img
import EmptyStates from '../assets/empty_wishlist.png';
import { Link } from 'react-router-dom';

const Wishlist = (props) => {
  const menuName = 'Wishlist';
  const dispCourses = props.courses.filter((course) => course.wishlist);

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
