import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { NIVEL } from '../../models/nivel.enum';

const TaskComponent = ({task, eliminar, completed}) => {

   function taskCompleted(){
        if (task.completed) {
        	return (<p onClick={() => completed(task)}>Completa</p>);
        } else{
            return (<p onClick={() => completed(task)}>Activa</p>);
        }
   }
   
	return (

          <tr>
            <td>{task.id}</td>
          	<td>{task.nombre}</td>
          	<td>
          	    {task.descripcion}
          	</td>
          	<td>
          	    {task.prioridad}
          	</td>
          	<td>         	    
          	    {taskCompleted()}
          	</td>
          	<td onClick={() => eliminar(task)} style={{cursor:'pointer'}}>eliminar</td>
          </tr>
	);
};

TaskComponent.propTypes = {
};

export default TaskComponent;
