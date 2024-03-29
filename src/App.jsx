import { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Utilities
import * as Data from './utils/getData';

// Comp - Layout
const Layout = lazy(() => import('./layout/Layout'));
const LayoutTop = lazy(() => import('./layout/LayoutTop'));
const LayoutCourse = lazy(() => import('./layout/LayoutCourse'));

// Comp - Page
const Home = lazy(() => import('./pages/Home'));
const Notification = lazy(() => import('./pages/Notification'));
const Cart = lazy(() => import('./pages/Cart'));
const AllCategories = lazy(() => import('./pages/AllCategories'));
const Courses = lazy(() => import('./pages/Courses'));
const CourseDetail = lazy(() => import('./pages/CourseDetail'));
const Transaction = lazy(() => import('./pages/Transaction'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const MyLearning = lazy(() => import('./pages/MyLearning'));
const MyCourseDetail = lazy(() => import('./pages/MyCourseDetail'));
const Profile = lazy(() => import('./pages/Profile'));
const NoMatch = lazy(() => import('./pages/NoMatch'));

function App() {
  const [activeMenu, setActiveMenu] = useState('');
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  // Dummy data (temporary)
  const categories = Data.getCategories();
  const [courses, setCourses] = useState(Data.getCourses());
  const [myCourses, setMyCourses] = useState(Data.getMyCourses());

  const coursesQty = (category) =>
    courses.filter((course) => course.category === category).length;

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
                element={
                  <Home
                    categories={categories}
                    courses={courses}
                    qty={coursesQty}
                  />
                }
              />
              <Route path='/' element={<LayoutTop />}>
                <Route path='notification' element={<Notification />} />
                <Route
                  path='category/all'
                  element={
                    <AllCategories categories={categories} qty={coursesQty} />
                  }
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
                  element={
                    <Wishlist courses={courses} setCourses={setCourses} />
                  }
                />
                <Route
                  path='my-learning'
                  element={
                    <MyLearning
                      myCourse={myCourses}
                      setMyCourse={setMyCourses}
                    />
                  }
                />
                <Route path='profile' element={<Profile />} />
                <Route path='cart' element={<Cart />} />
                <Route path='*' element={<NoMatch />} />
              </Route>
            </Route>
            <Route
              path='/'
              element={
                <LayoutCourse
                  isComment={isCommentOpen}
                  setIsComment={setIsCommentOpen}
                />
              }>
              <Route
                path='course/:id'
                element={
                  <CourseDetail
                    courses={courses}
                    setCourses={setCourses}
                    isComment={isCommentOpen}
                    setIsComment={setIsCommentOpen}
                  />
                }
              />
              <Route
                path='course/:id/transaction'
                element={<Transaction courses={courses} />}
              />
              <Route
                path='my-learning/:id'
                element={
                  <MyCourseDetail
                    myCourses={myCourses}
                    setMyCourses={setMyCourses}
                    isComment={isCommentOpen}
                    setIsComment={setIsCommentOpen}
                  />
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
