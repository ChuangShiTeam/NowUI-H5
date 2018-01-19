const initialState = {
    memberName: '',
    memberList: []
}

function forumRemind(state = initialState, action) {
    switch (action.type) {
        case 'forumRemind':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default forumRemind;