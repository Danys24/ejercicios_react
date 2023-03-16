import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import Notfoundpage from './pages/404/Notfoundpage';
import AboutPage from './pages/about/AboutPage';
import TaskPages from './pages/task/TaskPages';
import ProfilePage from './pages/profile/ProfilePage';
import TaskDetailsPage from './pages/task/TaskDetailsPage';
import LoginPage from './pages/auth/LoginPage';
import ProtectedRoutes from './components/pure/ProtectedRoutes';



function AppRoutingOne() {
  const logged = false;

  return (
    <Router>
      <div>
        <aside>
          <Link to='/' >| Home |</Link>
          <Link to='/profile' >| Profile |</Link>
          <Link to='/about' >| About |</Link>
          <Link to='/pagina' >| pagina |</Link>
          <Link to='/tasks' >| Tareas |</Link>
        </aside>
        <main>
          <Routes>
             <Route path='/' element={ <HomePage /> } />
             <Route path='/profile' element={ 
                <ProtectedRoutes loged={logged}>
                   <ProfilePage />
                </ProtectedRoutes>
              } />
             <Route path='/about' element={ <AboutPage /> } />
             <Route path='/tasks' element={ <TaskPages /> } />
             <Route path='/tasks/:id' element={ <TaskDetailsPage /> } />
             <Route path='/login' element={ <LoginPage /> } />
             <Route path='*' element={ <Notfoundpage /> } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;