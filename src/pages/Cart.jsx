import Donate from '../components/Donate';
import TopNavBar from '../components/TopNavBar';

const Cart = () => {
  const menuName = 'Cart';

  return (
    <>
      {/* HEADER */}
      <TopNavBar buttonL={1} menuName={menuName} />

      {/* Donate State Handler */}
      <div className='mt-34 px-6'>
        <Donate />
      </div>
    </>
  );
};

export default Cart;
