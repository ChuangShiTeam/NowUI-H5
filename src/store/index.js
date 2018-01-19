const initialState = {
    indexBannerList: [],
    indexNavigationList: [],
    hotArticleList: [],
    petCategoryArticleList: [],
    recommendArticleList: [],
    latestArticleList: []
};

function index(state = initialState, action) {
    switch (action.type) {
        case 'index':
            return Object.assign({}, state, action.data);
        default :
            return state;
    }
}

export default index;