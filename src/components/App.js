import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';

import { Route, Link } from 'react-router-dom';

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				{this.props.user.test}
			</React.Fragment>
		);
	}
}

export default connect(
	state => ({
		user: state.user
	}),
	dispatch => ({
		userActions: bindActionCreators(userActions, dispatch)
	}),
)(App);
