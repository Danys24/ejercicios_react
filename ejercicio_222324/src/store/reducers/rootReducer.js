import { combineReducers } from 'redux';
import { filterReducer } from './filterReducer';
import { todosReducer } from './todosReducer';

//funcion que gestiona todos los reducers
export const rootReducer = combineReducers(
	{
		todosState: todosReducer,
		filterState: filterReducer
	}

)
