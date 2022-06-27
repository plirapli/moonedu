import { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Img
import Sport from './assets/icon/sport.png';
import Photography from './assets/icon/photo.png';
import Paint from './assets/icon/painting.png';
import Dashboard from './assets/icon/dashboard.png';
import Puzzle from './assets/icon/puzzle.png';
import Marketing from './assets/icon/megaphone.png';
import Wallet from './assets/icon/wallet.png';
import Fishing from './assets/icon/fishing.png';

// Comp - Layout
const Layout = lazy(() => import('./pages/Layout'));
const LayoutBuy = lazy(() => import('./pages/LayoutBuy'));

// Comp - Page
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const AllCategories = lazy(() => import('./pages/AllCategories'));
const Courses = lazy(() => import('./pages/Courses'));
const CourseDetail = lazy(() => import('./pages/CourseDetail'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const NoMatch = lazy(() => import('./pages/NoMatch'));
const MyLearning = lazy(() => import('./pages/MyLearning'));

function App() {
  const [activeMenu, setActiveMenu] = useState('');

  // Dummy data (temporary)
  const categories = [
    {
      id: 'sports',
      title: 'Sports',
      subTitle: '20 Courses',
      iconPath: Sport,
    },
    {
      id: 'photography',
      title: 'Photography',
      subTitle: '18 Courses',
      iconPath: Photography,
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      subTitle: '10 Courses',
      iconPath: Paint,
    },
    {
      id: 'accounting',
      title: 'Accounting',
      subTitle: '16 Courses',
      iconPath: Dashboard,
    },
    {
      id: 'logic',
      title: 'Logic',
      subTitle: '8 Courses',
      iconPath: Puzzle,
    },
    {
      id: 'marketing',
      title: 'Marketing',
      subTitle: '21 Courses',
      iconPath: Marketing,
    },
    {
      id: 'finance',
      title: 'Finance',
      subTitle: '14 Courses',
      iconPath: Wallet,
    },
    {
      id: 'fishing',
      title: 'Fishing',
      subTitle: '4 Courses',
      iconPath: Fishing,
    },
  ];
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Figma UI/UX Design Essential',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non congue arcu. Phasellus mollis pretium.',
      category: 'graphic-design',
      rating: '4.8 (18.1k)',
      price: 135000,
      chapterQty: '22',
      courseList: [
        { id: 1, title: 'Introduction', isLocked: false, duration: '02:18' },
        {
          id: 2,
          title: 'What is UI/UX Design?',
          isLocked: true,
          duration: '18:46',
        },
        {
          id: 3,
          title: 'How to make a wireframe',
          isLocked: true,
          duration: '20:58',
        },
      ],
      wishlist: true,
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      category: 'sports',
      rating: '4.8 (18.1k)',
      price: 135000,
      wishlist: true,
    },
    {
      id: 3,
      title: 'Figma UI/UX Design Essential',
      category: 'graphic-design',
      rating: '4.8 (18.1k)',
      price: 135000,
      wishlist: true,
    },
    {
      id: 4,
      title: 'Figma UI/UX Design Essential',
      category: 'graphic-design',
      rating: '4.8 (18.1k)',
      price: 135000,
      wishlist: false,
    },
    {
      id: 5,
      title: 'Figma UI/UX Design Essential',
      category: 'graphic-design',
      rating: '4.8 (18.1k)',
      price: 135000,
      wishlist: false,
    },
  ]);

  const location = useLocation();
  useEffect(() => setActiveMenu(() => location.pathname), [location]);

  return (
    <div className='min-h-screen flex justify-center font-poppins'>
      <div className='w-full max-w-screen-sm bg-primary-bg flex flex-col justify-between overflow-hidden'>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path='/'
              element={
                <Layout activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
              }>
              <Route
                index
                element={<Home categories={categories} courses={courses} />}
              />
              <Route
                path='category/all'
                element={<AllCategories categories={categories} />}
              />
              <Route
                path='category/:id'
                element={
                  <Courses
                    categories={categories}
                    courses={courses}
                    setCourses={setCourses}
                  />
                }
              />
              <Route
                path='wishlist'
                element={<Wishlist courses={courses} setCourses={setCourses} />}
              />
              <Route path='my-learning' element={<MyLearning />} />
              <Route path='profile' element={<Profile />} />
              <Route path='*' element={<NoMatch />} />
            </Route>
            <Route path='/course/' element={<LayoutBuy />}>
              <Route
                path=':id'
                element={
                  <CourseDetail courses={courses} setCourses={setCourses} />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
