const initialState = {
    forumList: []
}

function forumList(state = initialState, action) {
    switch (action.type) {
        case 'forumList':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default forumList;