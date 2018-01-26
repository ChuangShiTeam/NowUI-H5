const initialState = {
    forumJoinPageIndex: 1,
    forumJoinPageSize: 3,
    forumJoinTotal: 0,
    forumJoinList: [],
    forumRecommendList: [],
    hotTopicPageIndex: 1,
    hotTopicPageSize: 3,
    hotTopicTotal: 0,
    hotTopicList: []
};

function forumIndex(state = initialState, action) {
    switch (action.type) {
        case 'forumIndex':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default forumIndex;