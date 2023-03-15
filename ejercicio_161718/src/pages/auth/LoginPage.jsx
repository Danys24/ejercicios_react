import React, { PropTypes } from 'react';

import { useNavigate, Link } from 'react-router-dom';

import LoginFormik from '../../components/pure/forms/loginFormik';

const LoginPage = () => {
    
    const navigate = useNavigate();

    return (
        <div>
          <h1>Pagina de Login</h1>
          <LoginFormik></LoginFormik>
          <p> no tengo una cuenta <Link to='/register'> Registrarme </Link></p>
        </div>
    );
};


LoginPage.propTypes = {
};

export default LoginPage;
