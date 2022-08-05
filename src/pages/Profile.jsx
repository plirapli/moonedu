import Donate from '../components/Donate';
import TopNavBar from '../components/TopNavBar';

const Profile = () => {
  const menuName = 'Profile';

  return (
    <>
      {/* HEADER */}
      <TopNavBar buttonR={1} menuName={menuName} />

      {/* Donate State Handler */}
      <div className='mt-34 px-6'>
        <Donate />
      </div>
    </>
  );
};

export default Profile;
