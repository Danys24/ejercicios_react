import React, { PropTypes } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Copyright = () => {
    return (
        <Typography variant='body2' color='GrayText' align='center'>
           {'Copyright (C)'}
           <Link color='inherit' href='https://google.com'>
              Imagina Formacion
           </Link>
           { ' ' }
           { new Date().getFullYear() }
        </Typography>
    );
};


Copyright.propTypes = {
};

export default Copyright;
