import React, { PropTypes } from 'react';

import Button from '@mui/material/Button';
import Copyright from '../../components/pure/copyright';

import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
   
   const navigate = useNavigate();

   const logout = () => {
      navigate('/login');
   }

   return (
       <div>
          <h1>Dashboard</h1>
          <Button variant='contained' onClick={logout}>Logout</Button>
          <Copyright></Copyright>
       </div>
   );
};


Dashboard.propTypes = {
};

export default Dashboard;
