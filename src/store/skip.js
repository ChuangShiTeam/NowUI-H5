const initialState = {
    forumList: []
}

function skip(state = initialState, action) {
    switch (action.type) {
        case 'skip':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default skip;