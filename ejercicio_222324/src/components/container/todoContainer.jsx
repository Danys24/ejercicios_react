import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../../store/actions/actions';

import TodoList from '../pure/todoList';

//funcion para gestionar el resultado de elegir un filtro
const filterTodos = (todos, filter) => {

    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);
        default:
            return todos;
    }

}

//metodo que ayuda al flujo de los props
const mapStateToProps = (state) => {
	return {
		todos: filterTodos(state.todosState, state.filterState) //ejecuta la funcion filterTodos
	}
}

//metodo que ayuda a la ejecucion de las acciones
const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id)) //ejecuta la funcion toggleTodo que se encuentra en las actions del store
		}
	}
}

//hace la conexion entre los props y el dispatcher con el TodoList
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)


export default TodosContainer;
