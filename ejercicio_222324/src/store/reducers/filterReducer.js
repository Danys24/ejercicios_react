import { SET_VISIBILITY_FILTER } from '../actions/actions';

//estado inicial del filter
let initialState = 'SHOW_ALL';

//funcion para gestionar las acciones del filter
export const filterReducer = (state=initialState, action) => {

	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.payload.filter
		default:
			return state;
	}
}