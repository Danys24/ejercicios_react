import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

const TaskComponent = ({task}) => {
	return (
		<div>
			<h2>Nombre: {task.name}</h2>
			<h3>Descripcion: {task.description}</h3>
			<h3>Nivel: {task.level}</h3>
			<h4>El estado de la tarea es: {task.completed ? 'COMPLETADA' : 'PENDIENTE'}</h4>
		</div>
	);
};

TaskComponent.propTypes = {
     task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
