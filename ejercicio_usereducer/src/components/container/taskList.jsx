import React, { useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { NIVEL } from '../../models/nivel.enum';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/taskForm';
import Filter from '../pure/filter';

//acciones
const CREAR_TAREA = 'CREAR_TAREA';
const ELIMINAR_TAREA = 'ELIMINAR_TAREA';
const COMPLETAR_TAREA = 'COMPLETAR_TAREA';
const AGREGAR_FILTRO = 'AGREGAR_FILTRO';


const myContext = React.createContext(null);


//estado inicial tareas
const estadoInicial = [];

//reducer para las tareas
const taskReducer = (state, action) => {
	switch (action.type) {
		case CREAR_TAREA:
			return [
			    ...state,
			    action.payload
			]
		case ELIMINAR_TAREA:
			return state.map((task) => 
				    (task.id === action.payload.id) ?
				    state.splice(state.indexOf(task), 1)
				    :
				    task
				    )
	   case COMPLETAR_TAREA:
			return state.map((task) => 
				    (task.id === action.payload.id) ?
				    {
					   id: action.payload.id,
					   nombre: action.payload.nombre,
					   descripcion: action.payload.descripcion,
					   prioridad: action.payload.prioridad,
					   completed: !action.payload.completed
				    }
				    : task
				    )
		default:
			return state;
	}
}

//Estado inicial del filtro
const estadoInicialFilter = 'TAREAS';

//Reducer para el filtro
const filterReducer = (state, action) => {
    switch (action.type) {
        case AGREGAR_FILTRO:
            return action.payload.filtro;
        default:
            return state;
    }
}


const TaskList = () => {

   const [state, dispatch] = useReducer(taskReducer, estadoInicial);

   const [stateFilter, dispatchFilter] = useReducer(filterReducer, estadoInicialFilter);

   function crearTarea(Task){
      dispatch({type:CREAR_TAREA, payload: {
      	                             id:Task.id,
			    	                       nombre:Task.nombre,
			    	                       descripcion:Task.descripcion,
			    	                       prioridad: Task.prioridad,
			    	                       completed: Task.completed 
                                   }})	
   }

   function eliminarTarea(Task){
   	dispatch({type: ELIMINAR_TAREA, payload: {
      	                             id:Task.id,
			    	                       nombre:Task.nombre,
			    	                       descripcion:Task.descripcion,
			    	                       prioridad: Task.prioridad,
			    	                       completed: Task.completed 
                                   }})
   }

   function completarTarea(Task){
   	dispatch({type:COMPLETAR_TAREA, payload: {
      	                             id:Task.id,
			    	                       nombre:Task.nombre,
			    	                       descripcion:Task.descripcion,
			    	                       prioridad: Task.prioridad,
			    	                       completed: Task.completed 
                                   }})
   }

   function agregarFiltro(filtro){
        dispatchFilter({type:AGREGAR_FILTRO, payload:{filtro}})
   }

   //Para filtrar las tareas
	const filtrarTareas = (state, filtro) => {
		switch (filtro) {
			case 'TAREAS':
				return state.map((task, index) => (
					   <TaskComponent key={index} 
	               	            task={task}
	               	            completed={completarTarea}
	               	            eliminar={eliminarTarea}>
	               </TaskComponent> 
					));
			case 'TAREAS_ACTIVAS':
				return state.filter((task) => !task.completed).map((task, index) => (
					   <TaskComponent key={index} 
	               	            task={task}
	               	            completed={completarTarea}
	               	            eliminar={eliminarTarea}>
	               </TaskComponent> 
					));
			case 'TAREAS_COMPLETADAS':
				return state.filter((task) => task.completed).map((task, index) => (
					   <TaskComponent key={index} 
	               	            task={task}
	               	            completed={completarTarea}
	               	            eliminar={eliminarTarea}>
	               </TaskComponent> 
					));
			default:
				return state.map((task, index) => (
					   <TaskComponent key={index} 
	               	            task={task}
	               	            completed={completarTarea}
	               	            eliminar={eliminarTarea}>
	               </TaskComponent> 
					));
		}
	}
    

    return (
    	<myContext.Provider value={state}>
    	<div>
        <table>
           <thead>
              <tr>
                 <th>#</th>
                 <th>Nombre</th>
                 <th>Descripcion</th>
                 <th>Prioridad</th>
                 <th>estado</th>
                 <th>accion</th>
              </tr>
           </thead>
           <tbody>
               {  
               	filtrarTareas(state, stateFilter)
               }
           </tbody>
        </table>
        <TaskForm crear={crearTarea}></TaskForm>
        <div>
           <h4>Filtrar</h4>
           <Filter filtro='TAREAS' filtrar={agregarFiltro}>
              TODAS LAS TAREAS
           </Filter>
           <Filter filtro='TAREAS_ACTIVAS' filtrar={agregarFiltro}>
              TAREAS ACTIVAS
           </Filter>
           <Filter filtro='TAREAS_COMPLETADAS' filtrar={agregarFiltro}>
              TAREAS COMPLETADAS
           </Filter>
        </div>
      </div>
      </myContext.Provider>
    );
};


TaskList.propTypes = {
};

export default TaskList;
