const initialState = {
    categoryList: []
};

function petCategory(state = initialState, action) {
    switch (action.type) {
        case 'petCategory':
            return Object.assign({}, state, action.data);
        default :
            return state;
    }
}

export default petCategory;