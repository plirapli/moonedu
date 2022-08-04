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
            <button className='p-2 rounded-lg transition-all hover:bg-primary-sub'>
              <Icon icon='bx:cart' width='28' />
            </button>
          </div>
        </div>
      </div>

      <div className='px-6'>
        <SearchBar />
      </div>

      {/* Recommended for you page */}
      <div className='mt-6'>
        <div className='px-6 flex justify-between'>
          <h1 className='text-heading-2'>Recommended for you</h1>
          <p className='text-subtext text-primary-base'>See all</p>
        </div>
        <div className='px-6 mt-2 flex gap-4 overflow-x-auto no-scroll pb-2'>
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
      <div className='mt-4 px-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-heading-2 text-black'>Explore Categories</h1>
          <Link to='/category/all'>
            <p className='text-subtext text-primary-base cursor-pointer'>
              See all
            </p>
          </Link>
        </div>
        <div className='mt-2'>
          <div className='grid grid-cols-2 gap-5'>
            {dispCategories.map((dCat, i) => (
              <Link key={dCat.id} to={'/category/' + dCat.id}>
                <CardSquare
                  title={dCat.title}
                  subTitle={dCat.subTitle}
                  iconPath={dCat.iconPath}
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
