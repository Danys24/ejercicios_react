import { compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/rootReducer';


//Funcion para crear y/o gestionar el store 
export const createAppStore = () => {
	let store = createStore(rootReducer, composeWithDevTools());

	return store;
}
