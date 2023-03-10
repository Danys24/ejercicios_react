import React, { useState, useEffect } from 'react';

//formik and yup
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

//models
import { Task } from '../../models/task.class';
import { levels } from '../../models/levels.enum';

//Task Components 
import TaskComponent  from '../pure/task';
import TaskForm from '../pure/forms/taskForm';
import TaskFormik from '../pure/forms/taskFormik';
import '../../styles/task.scss';

const TaskList = () => {

    const task1 = new Task('Tarea_1', 'Tarea de ejemplo 1', true, levels.BLOCKING);
    const task2 = new Task('Tarea_2', 'Tarea de ejemplo 2', false, levels.NORMAL);
    const task3 = new Task('Tarea_3', 'Tarea de ejemplo 3', true, levels.URGENT);

    const [ tasks, setTask] = useState([task1, task2, task3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    })

    
    function completeTask(task){
        console.log('complete esta tarea: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        setTask(tempTasks);
    }

    function deleteTask(task){
        console.log('se ha eliminado la tarea: ', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTask(tempTasks);

    }

    function addTask(task){
        console.log('se ha creado la tarea: ', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTask(tempTasks);
    }

    const Tabla = () => {
        return (
           <table>
                         <thead>
                               <tr>
                                  <th scope='col'>Title</th>
                                  <th scope='col'>Description</th>
                                  <th scope='col'>Priority</th>
                                  <th scope='col'>Actions</th>
                               </tr>
                         </thead>
                         <tbody>
                               {
                                  tasks.map( (task, index) => {
                                       return (
                                           <TaskComponent key={index} 
                                                          task={task} 
                                                          complete={completeTask}
                                                          remove={deleteTask}></TaskComponent>
                                        )
                                   })
                               }
                               
                         </tbody>
            </table>
        )
    }

    let tasksTable;

    if(tasks.length > 0){
        tasksTable = <Tabla></Tabla>
    }else{
        tasksTable = (
            <div>
                <h3>No hay tareas que mostrar</h3>
                <h4>Por favor crea una tarea</h4>
            </div>
        )
    }


	return (
		<div>
		    <div className="col-12">
                 <div className = "card">
                      <div className = "card-header p-3">
                           <h5>
                               Your Task:
                           </h5>
                      </div>
                 </div>

                 {/* contenido del card*/}
                 <div className = "card-body" data-mbd-perfect-scrollbar = 'true' style = { {position : 'relative', height : '400px'} }>
                      {loading ? <p>Cargando Tareas...</p> : tasksTable}
                 </div>

			</div>

            {/*<TaskForm add={addTask}></TaskForm>*/}
            <TaskFormik add={addTask}></TaskFormik>

		</div>
	);
};


export default TaskList;
