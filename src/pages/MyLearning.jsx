// Lib
import { Link, useNavigate } from 'react-router-dom';

// Comp
import TopNavBar from '../components/TopNavBar';
import SearchBar from '../components/SearchBar';
import HorImgProgressBar from '../components/HorImgProgressBar';
import BtnText from '../components/BtnText';

// Img
import EmptyStates from '../assets/empty_my_learning.png';

const MyLearning = (props) => {
  const favCourse = props.myCourse.filter((course) => course.favorite);
  const menuName = 'My Learning';

  const navigate = useNavigate();
  const btnHandler = (id) => navigate('/my-learning/' + id);
  const favoriteBtnHandler = (id) =>
    props.setMyCourse(
      props.myCourse.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );

  return (
    <>
      {/* HEADER */}
      <TopNavBar buttonR={1} menuName={menuName} />
      <div className='px-6'>
        <SearchBar text='Search My Course' />
      </div>

      {/* Favorites Section */}
      {props.myCourse.length > 0 && (
        <>
          <section className='px-6 mt-4'>
            <p className='font-medium'>Favorites</p>
            <div className='mt-2 grid gap-3'>
              {favCourse.length <= 0 && (
                <p className='font-medium text-black text-opacity-30'>
                  No favorite
                </p>
              )}
              {favCourse.map((course) => (
                <div
                  key={course.id}
                  onClick={() => btnHandler(course.id)}
                  className='cursor-pointer'>
                  <HorImgProgressBar
                    data={course}
                    boolState={course.favorite}
                    btnHandler={favoriteBtnHandler}
                  />
                </div>
              ))}
            </div>
          </section>

          <section className='px-6 mt-6'>
            <p className='font-medium'>All Courses</p>
            <div className='mt-2 grid gap-3'>
              {props.myCourse.map((course) => (
                <div
                  key={course.id}
                  onClick={() => btnHandler(course.id)}
                  className='cursor-pointer'>
                  <HorImgProgressBar
                    data={course}
                    boolState={course.favorite}
                    btnHandler={favoriteBtnHandler}
                  />
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Empty State Handler */}
      {props.myCourse.length <= 0 && (
        <div className='mt-4 px-6 flex flex-col items-center'>
          <img className='w-56 h-56' src={EmptyStates} alt='' />
          <div className='mt-12 text-center'>
            <h2 className='text-heading-2'>You wishlist is empty</h2>
            <p className=' font-medium text-gray'>
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
    </>
  );
};

export default MyLearning;
