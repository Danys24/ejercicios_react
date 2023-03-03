import React from 'react';
import { Task } from '../../models/task.class';
import { levels } from '../../models/levels.enum';
import TaskComponent  from '../pure/task';
import '../../styles/task.scss';

const TaskList = () => {

    const task1 = new Task('Tarea_1', 'Tarea de ejemplo', true, levels.NORMAL);

	return (
		<div>
			<h1 className="task-title">Lista de Tareas</h1>
			<div>
			   <TaskComponent task={task1}></TaskComponent>
			</div>
		</div>
	);
};


export default TaskList;