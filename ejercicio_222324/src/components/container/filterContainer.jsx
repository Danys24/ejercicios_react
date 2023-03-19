import React from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../../store/actions/actions';

import Filter from '../pure/filter';

const mapStateToProps = (state, ownProps) => { //ownProps gestiona el prop {filter} que viene del filterOption.
	return {
		active: ownProps.filter === state.filterState
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter)


export default FilterContainer;