const initialState = {

};

function forumSkip(state = initialState, action) {
    switch (action.type) {
        case 'forumSkip':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default forumSkip;