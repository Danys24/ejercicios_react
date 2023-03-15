import React, { PropTypes } from 'react';
import { useParams } from 'react-router-dom';

const TaskDetailsPage = () => {

	const {id} = useParams();

    return (
        <div>
          <h1>Detail Task {id}</h1>
        </div>
    );
};


TaskDetailsPage.propTypes = {
};

export default TaskDetailsPage;
