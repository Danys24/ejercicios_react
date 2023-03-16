
import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard';
import Notfoundpage from './pages/404/Notfoundpage';
import LoginPage from './pages/auth/LoginPage';
import ProtectedRoutes from './components/pure/ProtectedRoutes';

function AppRoutingFinal() {

  return (
    <Router>
       <Routes>
         <Route path='/'  element={ <Dashboard /> } />
         <Route path='/login' element={ <LoginPage /> } />
         <Route path='*' element={ <Notfoundpage /> } />
       </Routes>
    </Router>
  )
};

export default AppRoutingFinal;