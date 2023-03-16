import axios from 'axios';

//configuracion para axios

export default axios.create(
    {
    	baseURL: 'https://randomuser.me/api',
    	responseType: 'json',
    	timeout: 6000
    }

)