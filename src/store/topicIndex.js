const initialState = {
    topicPageIndex: 1,
    topicPageSize: 2,
    topicTotal: 0,
    topicList: []
};

function topicIndex(state = initialState, action) {
    switch (action.type) {
        case 'topicIndex':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default topicIndex;