const initialState = {
    total: 0,
    pageIndex: 1,
    pageSize: 10,
    list: []
};

function product(state = initialState, action) {
    switch (action.type) {
        case 'index':
            return Object.assign({}, state, action.data);

        default :
            return state;
    }
}

export default product;