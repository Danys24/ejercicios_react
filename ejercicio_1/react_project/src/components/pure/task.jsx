import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { levels } from '../../models/levels.enum';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../styles/task.scss';

const TaskComponent = ({task, complete, remove}) => {

     function taskLevelBadge(){
    	  switch (task.level) {
    	  	case levels.NORMAL:
    	  		return(
    	  			<h6 className= 'mb-0'>
    	  				<span className='badge bg-primary'>
    	  					{task.level}
    	  				</span>
    	  			</h6>
    	  			);
    	  	case levels.URGENT:
    	  		return(
    	  			<h6 className= 'mb-0'>
    	  				<span className='badge bg-warning'>
    	  					{task.level}
    	  				</span>
    	  			</h6>
    	  			);
    	  	case levels.BLOCKING:
    	  		return(
    	  			<h6 className= 'mb-0'>
    	  				<span className='badge bg-danger'>
    	  					{task.level}
    	  				</span>
    	  			</h6>
    	  			);
    	  	default:
    	  		break;
    	  }
     }

     function taskIconCompleted(){
        if (task.completed) {
        	 return (<i className = "bi-toggle-on" style={{color:'green'}} onClick={() => complete(task)}></i>);
        } else{
           return (<i className = "bi-toggle-off" style={{color:'grey'}} onClick={() => complete(task)}></i>);
        }
     }


	return (

          <tr className = "fw-normal">
          	<th><span className= "ms-2">{task.name}</span></th>
          	<td className = "align-middle">
          	    <span>{task.description}</span>
          	</td>
          	<td className = "align-middle">
          	    {taskLevelBadge()}
          	</td>
          	<td className = "align-middle">         	    
          	    {taskIconCompleted()}
          	    <i className = "bi-trash" style={{color:'tomato'}} onClick={() => remove(task)}></i>
          	</td>
          </tr>
	);
};

TaskComponent.propTypes = {
     task: PropTypes.instanceOf(Task).isRequired,
     complete: PropTypes.func.isRequired,
     delete: PropTypes.func.isRequired
};

export default TaskComponent;
