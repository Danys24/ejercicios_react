import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { NIVEL } from '../../models/nivel.enum';
import { Task } from '../../models/task.class';

let taskID = 1;

const TaskForm = ({crear}) => {
    
    const nombreRef = useRef('');
    const descripcionRef = useRef('');
    const nivelRef = useRef(NIVEL.BAJO);
    
    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
               taskID ++,
               nombreRef.current.value,
               descripcionRef.current.value,
               nivelRef.current.value,
               false
        );
        crear(newTask);
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }

    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold'
    }

    const blockingStyle = {
        color: 'red',
        fontWeight: 'bold'
    }

    return (
    	<form onSubmit={addTask}>
             <div>
                  <input ref={nombreRef} id='inputName' type='text' required autoFocus placeholder='Task name' />
                  <input ref={descripcionRef} id='inputDescription' type='text' required placeholder='Task Description' />
                  <select ref={nivelRef} defaultValue={NIVEL.BAJO} id='selectLevel'>
                          <option style={normalStyle} value={NIVEL.BAJO}>Bajo</option>
                          <option style={urgentStyle} value={NIVEL.MEDIO}>Medio</option>
                          <option style={blockingStyle} value={NIVEL.ALTO}>Alto</option>
                  </select>
                  <button type='submit'>Create Tarea</button>
             </div>             
    	</form>       
    )
};


TaskForm.propTypes = {
    crear: PropTypes.func.isRequired
};


export default TaskForm;