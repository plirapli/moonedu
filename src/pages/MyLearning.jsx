// Lib
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Comp
import TopNavBar from '../components/TopNavBar';
import SearchBar from '../components/SearchBar';
import HorImgProgressBar from '../components/HorImgProgressBar';
import BtnText from '../components/BtnText';

// Img
import EmptyStates from '../assets/empty_course.png';

const MyLearning = () => {
  const [myCourse, setMyCourse] = useState([
    // {
    //   id: 1,
    //   title: 'Figma UI/UX Design Essential',
    //   category: 'graphic-design',
    //   rating: '4.8 (18.1k)',
    //   price: 135000,
    //   favorite: true,
    //   completed: 12,
    //   chapterQty: 22,
    // },
    // {
    //   id: 2,
    //   title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    //   category: 'sports',
    //   rating: '4.8 (18.1k)',
    //   price: 135000,
    //   favorite: false,
    //   completed: 8,
    //   chapterQty: 9,
    // },
    // {
    //   id: 3,
    //   title: 'How to be a bank robber 101',
    //   category: 'accounting',
    //   rating: '4.8 (18.1k)',
    //   price: 135000,
    //   favorite: true,
    //   completed: 4,
    //   chapterQty: 17,
    // },
  ]);

  const favCourse = myCourse.filter((course) => course.favorite);
  const otherCourse = myCourse.filter((course) => !course.favorite);
  const menuName = 'My Learning';

  return (
    <div className='w-full mt-4 pb-6'>
      {/* HEADER */}
      <TopNavBar buttonR={1} menuName={menuName} />
      <div className='px-6 mt-4'>
        <SearchBar text='Search My Course' />
      </div>

      {/* Favorites Section */}
      {myCourse.length > 0 && (
        <>
          <section className='px-6 mt-4'>
            <p className='font-medium'>Favorites</p>
            <div className='mt-2 grid gap-3'>
              {favCourse.map((course) => (
                <div key={course.id} className='cursor-pointer'>
                  <HorImgProgressBar
                    data={course}
                    boolState={course.favorite}
                    setState={setMyCourse}
                    items={myCourse}
                  />
                </div>
              ))}
            </div>
          </section>

          <section className='px-6 mt-6'>
            <p className='font-medium'>All Courses</p>
            <div className='mt-2 grid gap-3'>
              {otherCourse.map((course) => (
                <div key={course.id} className='cursor-pointer'>
                  <HorImgProgressBar
                    data={course}
                    boolState={course.favorite}
                    setState={setMyCourse}
                    items={myCourse}
                  />
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Empty States Handler */}
      {/* Empty State Handler */}
      {myCourse.length <= 0 && (
        <div className='mt-4 px-6 pb-6 flex flex-col items-center'>
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
    </div>
  );
};

export default MyLearning;
