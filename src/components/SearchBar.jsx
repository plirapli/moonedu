import { Icon } from '@iconify/react';

const SearchBar = () => {
  const searchHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        className='py-3 px-5 bg-white flex justify-between rounded-full'
        action=''>
        <div className='flex items-center w-full'>
          <button
            onClick={(e) => searchHandler(e)}
            type='submit'
            title='Search Courses'
            className='flex items-center text-gray'>
            <Icon icon='charm:search' width='28' />
          </button>
          <input
            className='ml-2 outline-none w-full'
            type='text'
            placeholder='Search your topic'
          />
        </div>
        <span className='ml-2 text-primary-base'>
          <Icon icon='fluent:mic-16-regular' width='28' />
        </span>
      </form>
    </>
  );
};

export default SearchBar;
