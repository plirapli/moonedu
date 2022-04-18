import NotAvailableImg from '../assets/under_construction.png';

const NoMatch = () => {
  return (
    <div className='h-full flex justify-center items-center p-5'>
      <div className='mb-32 flex flex-col items-center'>
        <img className='w-60' src={NotAvailableImg} alt='' />
        <div className='text-center'>
          <h1 className='text-heading'>Under Construction</h1>
          <p className='text-gray'>
            This page currently under construction. Please come back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
