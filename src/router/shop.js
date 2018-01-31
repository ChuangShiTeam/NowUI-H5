import util from '../common/util';
import Main from "../view/main/Index";

export default {
    childRoutes: [{
        component: Main,
        childRoutes: [{
            path: '/shop/index',
            onEnter: util.handleEnter,
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('../view/shop/Index').default);
                }, 'shop.index');
            }
        },{
            path: '/shop/searchresult',
            onEnter:util.handleEnter,
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('../view/shop/SearchResult').default);
                }, 'shop.searchresult');
            }
        }]
    },{
        path: '/shop/brand',
        onEnter:util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/shop/Brand').default);
            }, 'shop.brand');
        }
    },{
        path: '/shop/brandproduct',
        onEnter:util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/shop/BrandProduct').default);
            }, 'shop.brandproduct');
        }
    },{
        path: '/shop/brandstory',
        onEnter:util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/shop/BrandStory').default);
            }, 'shop.brandstory');
        }
    },{
        path: '/shop/details',
        onEnter:util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/shop/Details').default);
            }, 'shop.details');
        }
    }]
}
