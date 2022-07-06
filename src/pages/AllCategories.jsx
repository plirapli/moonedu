// Comp
import TopNavBar from '../components/TopNavBar';
import CardSquare from '../components/CardSquare';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

const AllCategories = (props) => {
  const menuName = 'All Categories';

  return (
    <>
      {/* HEADER */}
      <TopNavBar buttonL={1} buttonR={1} menuName={menuName} />
      <div className='px-6 mt-4'>
        <SearchBar placeholder='Search Categories' />
      </div>

      {/* Categories */}
      <div className='mt-5 px-6'>
        <div className='grid grid-cols-2 gap-5'>
          {props.categories.map((dCat, i) => (
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
    </>
  );
};

export default AllCategories;
