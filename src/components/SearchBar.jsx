import { Icon } from '@iconify/react';

const SearchBar = (props) => {
  return (
    <>
      <div className='font-medium'>{props.text || 'Search Topic'}</div>
      <form
        className='mt-2 py-3 px-5 bg-white flex justify-between rounded-xl shadow'
        action=''>
        <div className='flex items-center w-full'>
          <div className='flex items-center text-gray'>
            <Icon icon='charm:search' width='28' />
          </div>
          <input
            className='ml-2 outline-none w-full'
            type='text'
            placeholder={props.placeholder || 'Search Courses'}
          />
        </div>
        <span className='ml-2 text-gray'>
          <Icon icon='fluent:mic-16-regular' width='28' />
        </span>
      </form>
    </>
  );
};

export default SearchBar;
