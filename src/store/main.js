const initialState = {
	toolbarList: []
};

function main(state = initialState, action) {
	switch (action.type) {
		case 'main':
			return Object.assign({}, state, action.data);

		default :
			return state;
	}
}

export default main;