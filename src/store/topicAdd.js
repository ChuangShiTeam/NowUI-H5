const initialState = {
    topicTipUserList: [],
    location: {},
    forumList: []
};

function topicAdd(state = initialState, action) {
    switch (action.type) {
        case 'topicAdd':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default topicAdd;