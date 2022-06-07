import { Icon } from '@iconify/react';

// Comp
import CardSquare from '../components/CardSquare';
import SearchBar from '../components/SearchBar';
import CardVerticalImage from '../components/CardVerticalImage';

// Img
import Sport from '../assets/sport.png';
import Photography from '../assets/photo.png';
import Paint from '../assets/painting.png';
import Marketing from '../assets/marketing.png';

function Home(props) {
  const dCategories = [
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

  const dCourses = [
    {
      title: 'Figma UI/UX Design Essential',
      rating: '4.8 (18.1k)',
      price: 135000,
    },
    {
      title: 'Figma UI/UX Design Essential',
      rating: '4.8 (18.1k)',
      price: 135000,
    },
    {
      title: 'Figma UI/UX Design Essential',
      rating: '4.8 (18.1k)',
      price: 135000,
    },
    {
      title: 'Figma UI/UX Design Essential',
      rating: '4.8 (18.1k)',
      price: 135000,
    },
    {
      title: 'Figma UI/UX Design Essential',
      rating: '4.8 (18.1k)',
      price: 135000,
    },
  ];

  return (
    <div className='w-full mt-4'>
      {/* HEADER */}
      <div className='px-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-heading'>Hi, Rafli</h1>
          <div className=''>
            <button className='p-2'>
              <Icon icon='bx:cart' width='28' />
            </button>
            <button className='p-2'>
              <Icon icon='bx:bell' width='28' />
            </button>
          </div>
        </div>
        <div className='mt-4'>
          <SearchBar />
        </div>
      </div>

      {/* Recommended for you page */}
      <div className='mt-6'>
        <div className='px-6 flex justify-between'>
          <h1 className='text-heading-2'>Recommended for you</h1>
          <p className='text-subtext text-primary-base'>See all</p>
        </div>
        <div className='px-6 mt-2 flex gap-4 overflow-x-auto'>
          {dCourses.map((dCourse, i) => (
            <CardVerticalImage
              key={i}
              title={dCourse.title}
              lSubtext={dCourse.rating}
              rSubtext={`Rp${dCourse.price},-`}
            />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className='mt-5 px-6 pb-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-heading-2 text-black'>Explore Categories</h1>
          <p className='text-subtext text-primary-base cursor-pointer'>
            See all
          </p>
        </div>
        <div className='mt-2'>
          <div className='grid grid-cols-2 gap-5'>
            {dCategories.map((dCat, i) => (
              <CardSquare
                key={i}
                title={dCat.title}
                subTitle={dCat.subTitle}
                iconPath={dCat.iconPath}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
