import { Icon } from '@iconify/react';
import CardSquare from '../components/CardSquare';
import SearchBar from '../components/SearchBar';
import Sport from '../assets/sport.png';
import Photography from '../assets/photo.png';
import Paint from '../assets/painting.png';
import Marketing from '../assets/marketing.png';

function Home() {
  const courses = [
    {
      title: 'Sports',
      subTitle: '20 Courses',
      iconPath: Sport,
    },
    {
      title: 'Photography',
      subTitle: '18 Courses',
      iconPath: Photography,
    },
    {
      title: 'Graphic Design',
      subTitle: '10 Courses',
      iconPath: Paint,
    },
    {
      title: 'Marketing',
      subTitle: '16 Courses',
      iconPath: Marketing,
    },
  ];

  return (
    <div>
      <div className='p-5 bg-gradient-to-br from-primary-gradient to-primary-base rounded-b-large'>
        <div className='flex justify-between items-center'>
          <div className='text-white'>
            <h1 className='text-heading'>Hello,</h1>
            <p>Good Morning</p>
          </div>
          <button className='p-2 bg-primary-sub bg-opacity-75 rounded-full'>
            <Icon icon='clarity:bell-solid' color='white' width='28' />
          </button>
        </div>
        <div className='mt-8'>
          <SearchBar />
        </div>
      </div>

      <div className='mt-4 p-5'>
        <div className='flex justify-between items-center'>
          <h1 className='text-heading text-black'>Explore Categories</h1>
          <p className='text-subtext text-primary-base'>See all</p>
        </div>
        <div className='mt-2'>
          <div className='grid grid-cols-2 gap-5'>
            {courses.map((course, i) => (
              <CardSquare
                key={i}
                title={course.title}
                subTitle={course.subTitle}
                iconPath={course.iconPath}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
