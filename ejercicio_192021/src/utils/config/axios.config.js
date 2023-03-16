import axios from 'axios';

//configuracion para axios

export default axios.create(
    {
    	baseURL: 'https://api.chucknorris.io/jokes/random',
    	responseType: 'json',
    	timeout: 6000
    }

)