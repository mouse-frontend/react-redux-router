import * as constants from './constants';

export function userLogin(data) {
	return {
		type: constants.USER_LOGIN,
		payload: data
	};
}
export function userLogout(data) {
	return dispatch => {
		// async
		dispatch({
			type: constants.USER_LOGOUT,
			payload: data
		});
	};
}
