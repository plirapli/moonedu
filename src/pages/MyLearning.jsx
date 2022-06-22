import { useState } from 'react';

// Comp
import TopNavBar from '../components/TopNavBar';
import SearchBar from '../components/SearchBar';
import HorImgProgressBar from '../components/HorImgProgressBar';

const MyLearning = () => {
  const [myCourse, setMyCourse] = useState([
    {
      id: 1,
      title: 'Figma UI/UX Design Essential',
      category: 'graphic-design',
      rating: '4.8 (18.1k)',
      price: 135000,
      favorite: true,
      completed: 12,
      chapterQty: 22,
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      category: 'sports',
      rating: '4.8 (18.1k)',
      price: 135000,
      favorite: false,
      completed: 8,
      chapterQty: 9,
    },
    {
      id: 3,
      title: 'How to be a bank robber 101',
      category: 'accounting',
      rating: '4.8 (18.1k)',
      price: 135000,
      favorite: true,
      completed: 4,
      chapterQty: 17,
    },
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
        <p className='font-medium'>Favorites</p>
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
    </div>
  );
};

export default MyLearning;
