import MiskinImg from '../assets/coins_in_air.png';
import BtnText from '../components/BtnText';

const Donate = () => {
  return (
    <div className='flex flex-col items-center'>
      <img className='w-45 h-45' src={MiskinImg} alt='' />
      <div className='mt-12 text-center'>
        <h2 className='text-heading-2'>I’m not getting paid for this</h2>
        <p className='font-medium text-gray'>
          This is just a personal project. Please donate so that i can complete
          this project goddamnit.
        </p>
      </div>
      <a
        target='_blank'
        rel='noreferrer'
        className='w-full mt-5'
        href='https://saweria.co/mrafli'>
        <BtnText text='Donate' />
      </a>
    </div>
  );
};

export default Donate;
