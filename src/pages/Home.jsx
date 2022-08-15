import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';

// Comp
import CardSquare from '../components/CardSquare';
import SearchBar from '../components/SearchBar';
import CardVerticalImage from '../components/CardVerticalImage';

function Home(props) {
  const dispCourses = props.courses;
  const dispCategories = props.categories.slice(0, 4);

  const navigate = useNavigate();
  const btnHandler = (id) => navigate('/course/' + id);

  return (
    <div className='w-full pb-6'>
      {/* Header */}
      <div className='py-2 pl-6 pr-4'>
        <div className='flex justify-between items-center'>
          <h1 className='text-heading'>Hi, Rafli</h1>
          <div className=''>
            <Link to='notification'>
              <button className='p-2 rounded-lg transition-all hover:bg-primary-sub'>
                <Icon icon='bx:bell' width='28' />
              </button>
            </Link>
            <Link to='cart'>
              <button className='p-2 rounded-lg transition-all hover:bg-primary-sub'>
                <Icon icon='bx:cart' width='28' />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='px-6'>
        <SearchBar />
      </div>

      {/* Recommended for you page */}
      <div className='mt-4'>
        <div
          className='
            py-2 px-6 flex justify-between items-center 
            transition-all hover:bg-primary-sub'>
          <h1 className='text-heading-2'>Recommended for you</h1>
          <p className='text-subtext text-primary-base'>See all</p>
        </div>
        <div className='px-6 flex gap-4 overflow-x-auto no-scroll pb-2'>
          {dispCourses.map((course) => (
            <div key={course.id} onClick={() => btnHandler(course.id)}>
              <CardVerticalImage
                title={course.title}
                lSubtext={course.rating}
                rSubtext={`Rp${course.price},-`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className='mt-4'>
        <Link to='/category/all'>
          <div
            className='
              py-2 px-6 flex justify-between items-center 
              transition-all hover:bg-primary-sub'>
            <h1 className='text-heading-2 text-black'>Explore Categories</h1>
            <p className='text-subtext text-primary-base cursor-pointer'>
              See all
            </p>
          </div>
        </Link>
        <div className='px-6'>
          <div className='grid grid-cols-2 gap-5'>
            {dispCategories.map((cat, i) => (
              <Link key={cat.id} to={'/category/' + cat.id}>
                <CardSquare
                  title={cat.title}
                  subTitle={props.qty(cat.id) + ' Courses'}
                  iconPath={cat.iconPath}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
