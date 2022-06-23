import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';

// Comp
import TopNavBar from '../components/TopNavBar';
import BtnText from '../components/BtnText';
import CircleIc from '../components/CircleIc';
import PlaylistPlayer from '../components/PlaylistPlayer';
import HorIc from '../components/HorIc';
import BuyCTA from '../components/BuyCTA';

const CourseDetail = (props) => {
  const [isPlaylist, setIsPlaylist] = useState(true);
  const { id } = useParams();

  const dispCourse = props.courses.filter(
    (course) => course.id === parseInt(id)
  )[0];
  const menuName = dispCourse.title;
  const boolState = dispCourse.wishlist || 0;

  const icSolid = 'bxs:heart';
  const icOutline = 'bx:heart';

  const pageHandler = (state, setState) => setState(() => state);
  const btnHandler = (e) => {
    e.stopPropagation();
    props.setState(
      props.items.map((item) =>
        item.id === props.data.id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  const dummyText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit tes tes';
  const dummyTextLong = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Proin non congue arcu. Phasellus mollis pretium.`;

  return (
    <div className='w-full mt-4 pb-6'>
      {/* Header */}
      <TopNavBar buttonL={1} buttonR={1} menuName={menuName} />

      {/* Main Content */}
      <div className='px-6 pt-2'>
        <div className='w-full h-[11.25rem] rounded-2xl flex justify-center items-center bg-primary-sub shadow'>
          <CircleIc size='32' />
        </div>

        {/* Course Brief Information */}
        <div className='mt-4'>
          <div className='flex justify-between items-start'>
            <div>
              <h2 className='text-heading-2 clamp'>
                {dispCourse.title || dummyText}
              </h2>
              <p className='text-subtext'>
                By <span className='text-primary-base'>John H. Doe</span>
              </p>
            </div>
            <button
              onClick={btnHandler}
              className='
                ml-2 p-2 text-red-500 
                transition-all hover:bg-red-100 hover:rounded-full'>
              <Icon icon={`${boolState ? icSolid : icOutline}`} width='24' />
            </button>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex items-center text-smallest text-gray'>
              <Icon icon='bxs:star' width='12' />
              <p className='ml-1'>{dispCourse.rating || 'Subtext'}</p>
            </div>
            <p className='ml-2 text-heading-2'>
              Rp{dispCourse.price || 'Subtext'},-
            </p>
          </div>
        </div>

        {/* Playlist - Desc Btn */}
        <div className='mt-4 p-2 bg-primary-sub flex items-center rounded-2xl shadow'>
          <div
            className='w-full'
            onClick={() => pageHandler(true, setIsPlaylist)}>
            <BtnText
              text={`Playlist (${dispCourse.chapterQty || 22})`}
              className={
                !isPlaylist &&
                `bg-primary-sub text-black shadow-none transition 
                 hover:bg-primary-base hover:bg-opacity-20`
              }
            />
          </div>
          <div
            className='w-full'
            onClick={() => pageHandler(false, setIsPlaylist)}>
            <BtnText
              text='Description'
              className={
                isPlaylist &&
                `bg-primary-sub text-black shadow-none transition 
                 hover:bg-primary-base hover:bg-opacity-20`
              }
            />
          </div>
        </div>

        {/* Playlist/Desc Menu */}
        <>
          {/* Playlist menu */}
          {isPlaylist && (
            <div className='mt-1'>
              <PlaylistPlayer iconR='bi:check-lg' />
              <PlaylistPlayer
                icClassNameL='bg-primary-sub text-primary-base'
                icClassNameR='bg-secondary-sub text-secondary-base'
                iconR='bxs:lock-alt'
              />
            </div>
          )}

          {/* Desc menu */}
          {!isPlaylist && (
            <div className='mt-3'>
              <div>
                <p className='font-medium'>Description</p>
                <p className='text-gray'>{dummyTextLong}</p>
              </div>
              <div className='mt-3 grid gap-3'>
                <HorIc icon='bxs:detail' text='Course Details' />
                <HorIc icon='bxs:chat' text='Discussion' />
                <HorIc icon='bxs:star' text='Reviews' />
              </div>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default CourseDetail;
