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

// Comp
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const AllCategories = lazy(() => import('./pages/AllCategories'));
const NoMatch = lazy(() => import('./pages/NoMatch'));
const Layout = lazy(() => import('./pages/Layout'));

function App() {
  const [activeMenu, setActiveMenu] = useState('');

  // Dummy data (temporary)
  const [categories, setCategories] = useState([
    {
      title: 'Sports',
      subTitle: '20 Courses',
      iconPath: Sport,
    },
    {
      title: 'Photography',
      subTitle: '18 Courses',
      iconPath: Photography,
    },
    {
      title: 'Graphic Design',
      subTitle: '10 Courses',
      iconPath: Paint,
    },
    {
      title: 'Accounting',
      subTitle: '16 Courses',
      iconPath: Dashboard,
    },
    {
      title: 'Logic',
      subTitle: '8 Courses',
      iconPath: Puzzle,
    },
    {
      title: 'Marketing',
      subTitle: '21 Courses',
      iconPath: Marketing,
    },
    {
      title: 'Finance',
      subTitle: '14 Courses',
      iconPath: Wallet,
    },
    {
      title: 'Fishing',
      subTitle: '4 Courses',
      iconPath: Fishing,
    },
  ]);

  const [courses, setCourses] = useState([
    {
      title: 'Figma UI/UX Design Essential',
      rating: '4.8 (18.1k)',
      price: 135000,
      wishlist: true,
    },
    {
      title: 'Figma UI/UX Design Essential',
      rating: '4.8 (18.1k)',
      price: 135000,
      wishlist: true,
    },
    {
      title: 'Figma UI/UX Design Essential',
      rating: '4.8 (18.1k)',
      price: 135000,
      wishlist: true,
    },
    {
      title: 'Figma UI/UX Design Essential',
      rating: '4.8 (18.1k)',
      price: 135000,
      wishlist: false,
    },
    {
      title: 'Figma UI/UX Design Essential',
      rating: '4.8 (18.1k)',
      price: 135000,
      wishlist: false,
    },
  ]);

  const location = useLocation();
  useEffect(() => setActiveMenu(() => location.pathname), []);

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
                path='all-categories'
                element={<AllCategories categories={categories} />}
              />
              <Route path='profile' element={<Profile />} />
              <Route path='*' element={<NoMatch />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
