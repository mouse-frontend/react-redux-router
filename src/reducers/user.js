import * as constants from '../actions/constants';

const initialState = {
	test: 'property from user reducer'
};

export default (state = initialState, action) => {
	switch (action.type) {
		case constants.USER_LOGIN:
			return {...state, ...action.payload};

		default:
			return state;
	}
}
