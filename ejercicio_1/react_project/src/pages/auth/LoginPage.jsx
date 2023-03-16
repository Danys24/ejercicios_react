import React, { PropTypes } from 'react';
import LoginFormik from '../../components/pure/forms/loginFormik';

const LoginPage = () => {
    return (
        <div>
          <h1>Pagina de Login</h1>
          <LoginFormik></LoginFormik>
        </div>
    );
};


LoginPage.propTypes = {
};

export default LoginPage;
