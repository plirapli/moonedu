// Comp
import TopNavBar from '../components/TopNavBar';
import SearchBar from '../components/SearchBar';
import HorizontalWImages from '../components/HorizontalWImages';

const Wishlist = (props) => {
  const menuName = 'Wishlist';
  const dispCourses = props.courses.filter((course) => course.wishlist);

  return (
    <div className='w-full mt-4'>
      {/* HEADER */}
      <TopNavBar buttonR={1} menuName={menuName} />
      <div className='px-6 mt-4'>
        <SearchBar />
      </div>

      {/* Courses */}
      <div className='mt-4 px-6 pb-6'>
        <div className='grid gap-3'>
          {dispCourses.map((course, i) => (
            <HorizontalWImages
              key={i}
              data={course}
              lSubtext={course.rating}
              rSubtext={`Rp${course.price},-`}
              boolState={course.wishlist}
              setState={props.setCourses}
              items={props.courses}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
