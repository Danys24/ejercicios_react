import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../store/actions/actions';

import TodoForm from '../pure/todoForm';

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
	return {
		submit: (text) => {
			dispatch(addTodo(text))
		}
	}
}

const TodosFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)


export default TodosFormContainer;