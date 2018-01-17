const initialState = {
    joinList: []
}

function forumIndex(state = initialState, action) {
    switch (action.type) {
        case 'forumIndex':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default forumIndex;