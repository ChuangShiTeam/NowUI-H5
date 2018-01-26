const initialState = {
    forumList: []
}

function forumMy(state = initialState, action) {
    switch (action.type) {
        case 'forumMy':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default forumMy;