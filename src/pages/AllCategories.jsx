import { Icon } from '@iconify/react';

// Comp
import TopNavBar from '../components/TopNavBar';
import CardSquare from '../components/CardSquare';
import SearchBar from '../components/SearchBar';

// Img
import Sport from '../assets/icon/sport.png';
import Photography from '../assets/icon/photo.png';
import Paint from '../assets/icon/painting.png';
import Dashboard from '../assets/icon/dashboard.png';
import Puzzle from '../assets/icon/puzzle.png';
import Marketing from '../assets/icon/megaphone.png';
import Wallet from '../assets/icon/wallet.png';
import Fishing from '../assets/icon/fishing.png';

const AllCategories = () => {
  const menuName = 'All Categories';
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
      title: 'Accounting',
      subTitle: '16 Courses',
      iconPath: Dashboard,
    },
    {
      title: 'Logic',
      subTitle: '8 Courses',
      iconPath: Puzzle,
    },
    {
      title: 'Marketing',
      subTitle: '21 Courses',
      iconPath: Marketing,
    },
    {
      title: 'Finance',
      subTitle: '14 Courses',
      iconPath: Wallet,
    },
    {
      title: 'Fishing',
      subTitle: '4 Courses',
      iconPath: Fishing,
    },
  ];

  return (
    <div className='w-full mt-4'>
      {/* HEADER */}
      <div className='px-6'>
        <TopNavBar menuName={menuName} />
        <div className='mt-4'>
          <SearchBar />
        </div>
      </div>

      {/* Categories */}
      <div className='mt-5 px-6 pb-6'>
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
  );
};

export default AllCategories;
