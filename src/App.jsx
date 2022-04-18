import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NoMatch from './pages/NoMatch';
import Layout from './pages/Layout';
import { useEffect, useState } from 'react';

function App() {
  const [activeMenu, setActiveMenu] = useState('');

  const location = useLocation();

  useEffect(() => setActiveMenu(() => location.pathname), []);

  return (
    <div className='min-h-screen flex justify-center font-poppins'>
      <div className='w-full max-w-screen-sm bg-primary-bg flex flex-col justify-between overflow-hidden'>
        <Routes>
          <Route
            path='/'
            element={
              <Layout activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            }>
            <Route index element={<Home />} />
            <Route path='profile' element={<Profile />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
