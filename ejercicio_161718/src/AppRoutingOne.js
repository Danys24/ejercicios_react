import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';

//Paginas
import HomePage from './pages/home/HomePage';
import Notfoundpage from './pages/404/Notfoundpage';
import AboutPage from './pages/about/AboutPage';
import TaskPages from './pages/task/TaskPages';
import ProfilePage from './pages/profile/ProfilePage';
import TaskDetailsPage from './pages/task/TaskDetailsPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

//Para proteger las rutas
import ProtectedRoutes from './components/pure/ProtectedRoutes';



function AppRoutingOne() {
  const logged = false;

  return (
    <Router>
      <div>
        <aside>
          <Link to='/' >| Home |</Link>
          <Link to='/profile' >| Profile |</Link>
          <Link to='/login' >| Login |</Link>
          <Link to='/register' >| Register |</Link>
          <Link to='/tasks' >| Tareas |</Link>
          <Link to='/about' >| About |</Link>
        </aside>
        <main>
          <Routes>
             <Route path='/' element={ <HomePage /> } />
             <Route element={<ProtectedRoutes loged={logged} />}>
                <Route path='/tasks' element={ <TaskPages /> } />
                <Route path='/tasks/:id' element={ <TaskDetailsPage /> } />
             </Route>
             <Route path='/profile' element={ 
                <ProtectedRoutes loged={logged}>
                   <ProfilePage />
                </ProtectedRoutes>
              } />
             <Route path='/about' element={ <AboutPage /> } />            
             <Route path='/login' element={ <LoginPage /> } />
             <Route path='/register' element={ <RegisterPage /> } />
             <Route path='*' element={ <Notfoundpage /> } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;