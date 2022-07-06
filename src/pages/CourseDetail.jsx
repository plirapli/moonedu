import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Comp
import TopNavBar from '../components/TopNavBar';
import HorIc from '../components/HorIc';
import MediaPlayer from '../components/MediaPlayer';
import CourseBrief from '../components/CourseBrief';
import BtnSwitcher from '../components/BtnSwitcher';
import Playlist from '../components/Playlist';

const CourseDetail = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispCourse = props.courses.filter(
    (course) => course.id === parseInt(id)
  )[0];

  const [isPlaylist, setIsPlaylist] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(
    dispCourse.courseList[0]
  );
  const [clickCounter, setClickCounter] = useState(1);

  const menuName = dispCourse.title;
  const icSolid = 'bxs:heart';
  const icOutline = 'bx:heart';
  const dummyTextLong = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Proin non congue arcu. Phasellus mollis pretium.`;

  const btnHandler = () =>
    props.setCourses(
      props.courses.map((item) =>
        item.id === dispCourse.id ? { ...item, wishlist: !item.wishlist } : item
      )
    );
  const btnBack = () => navigate(-clickCounter);

  return (
    <>
      {/* Header */}
      <TopNavBar
        backButton={btnBack}
        buttonL={1}
        buttonR={1}
        menuName={menuName}
      />

      {/* Main Content */}
      <div className='px-6 pt-2'>
        <MediaPlayer
          url={selectedCourse.videoURL}
          title={selectedCourse.title}
        />

        {/* Course Brief Information */}
        <div className='mt-4'>
          <CourseBrief
            data={dispCourse}
            btnHandler={btnHandler}
            boolState={dispCourse.wishlist}
            icSolid={icSolid}
            icOutline={icOutline}
          />
        </div>

        {/* Playlist - Desc Btn */}
        <div className='mt-4'>
          <BtnSwitcher
            textLeft={'Playlist (' + dispCourse.chapterQty + ')'}
            textRight={'Description'}
            boolState={isPlaylist}
            setBoolState={setIsPlaylist}
          />
        </div>

        {/* Playlist/Desc Menu */}
        <>
          {/* Playlist menu */}
          {isPlaylist && (
            <div className='mt-2'>
              <Playlist
                items={dispCourse.courseList}
                selected={selectedCourse}
                setSelected={setSelectedCourse}
                setClickCounter={setClickCounter}
              />
            </div>
          )}

          {/* Desc menu */}
          {!isPlaylist && (
            <div className='mt-3'>
              <div>
                <p className='font-medium'>Description</p>
                <p className='text-gray'>{dispCourse.desc || dummyTextLong}</p>
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
    </>
  );
};

export default CourseDetail;
