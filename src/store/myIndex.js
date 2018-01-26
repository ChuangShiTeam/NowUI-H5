const initialState = {
	userAvatar: '',
	userNickName: '',
	memberBackground: '',
	hasNewMessage: false
};

function myIndex(state = initialState, action) {
	switch (action.type) {
		case 'myIndex':
			return Object.assign({}, state, action.data);

		default :
			return state;
	}
}

export default myIndex;