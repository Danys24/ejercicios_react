//indice de las actividades
let nextTodoID = 0;

//acciones que se pueden realizar

//Acciones para el TODO
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

//Acciones para el filter
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

//añadir actividad
export const addTodo = (text) => {
	return {
		type: ADD_TODO,
		payload: {
			id: nextTodoID ++,
			text
		}
	}
}

//tachar actividad
export const toggleTodo = (id) => {
	return {
		type: TOGGLE_TODO,
		payload : {
			id
		}
	}
}

//añadir un filtro
export const setVisibilityFilter = (filter) => {
	return {
		type: SET_VISIBILITY_FILTER,
		payload: {
			filter
		}
	}
}