import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NoMatch from './pages/NoMatch';
import Layout from './pages/Layout';

function App() {
  return (
    <div className='min-h-screen flex justify-center font-poppins'>
      <div className='w-full max-w-screen-sm bg-primary-bg flex flex-col justify-between'>
        <Routes>
          <Route path='/' element={<Layout />}>
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
