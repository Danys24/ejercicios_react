import React from 'react'
import PropTypes from 'prop-types'

export default class greeting extends React.Component {

	constructor(props){
        super(props);
        this.state = {
           age: 23
        }
    }

	static propTypes = {
		name : PropTypes.string,
	}

	render() {
		return (
			<div>
				<h1>Hola {this.props.name}</h1>
				<h2>Su edad es: {this.state.age}</h2>
			</div>
		)
	}
}



/*
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {

    constructor(props){
        super(props);
        this.state = {
           age: 23
        }
    }

	render() {
		return (
			<div>
				<h1>Hola {this.props.name}</h1>
				<h2>Su edad es: {this.state.age}</h2>
			</div>
		);
	}
}

Greeting.PropTypes = {
     name : PropTypes.string,
}

export default Greeting;
*/