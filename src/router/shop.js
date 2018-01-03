import util from '../common/util';
import Main from "../view/Main";

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
        }]
    }]
}
