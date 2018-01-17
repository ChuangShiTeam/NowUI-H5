const initialState = {
	toolbarList: [{
        toolbarName: '首页',
        toolbarUrl: '/index',
        icon: 'index.png',
        selectedIcon: 'index-active.png',
        selected: true
    }, {
        toolbarName: '社区',
        toolbarUrl: '/forum/index',
        icon: 'forum.png',
        selectedIcon: 'forum-active.png',
        selected: false
    }, {
        toolbarName: '服务',
        toolbarUrl: '/service/index',
        icon: 'service.png',
        selectedIcon: 'service-active.png',
        selected: false
    }, {
        toolbarName: '精选',
        toolbarUrl: '/shop/index',
        icon: 'shop.png',
        selectedIcon: 'shop-active.png',
        selected: false
    }, {
        toolbarName: '我的',
        toolbarUrl: '/my/index',
        icon: 'my.png',
        selectedIcon: 'my-active.png',
        selected: false
    }]
};

function main(state = initialState, action) {
	switch (action.type) {
		case 'main':
			return Object.assign({}, state, action.data);

		default :
			return state;
	}
}

export default main;