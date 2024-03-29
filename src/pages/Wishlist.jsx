// Lib
import { Link, useNavigate } from 'react-router-dom';

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
      <TopNavBar buttonR={1} menuName={menuName} />
      <div className='px-6'>
        <div className='mt-4'>
          <SearchBar />
        </div>

        {/* Courses */}
        {dispCourses.length >= 1 && (
          <div className='mt-4'>
            <div className='grid gap-3'>
              {dispCourses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => btnHandler(course.id)}
                  className='cursor-pointer'>
                  <HorImg
                    data={course}
                    lSubtext={course.rating}
                    rSubtext={`Rp${course.price},-`}
                    btnHandler={wishlistBtnHandler}
                    boolState={course.wishlist}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State Handler */}
        {dispCourses.length <= 0 && (
          <div className='mt-16 pb-6 flex flex-col items-center'>
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
    </>
  );
};

export default Wishlist;
