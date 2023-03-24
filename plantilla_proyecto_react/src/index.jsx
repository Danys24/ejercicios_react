//react
import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './components/App';

//estilos
import 'bootstrap/dist/css/bootstrap.css';
import './styles/css/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
	   <App />
	</React.StrictMode>
);