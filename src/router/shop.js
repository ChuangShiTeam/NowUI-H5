import util from '../common/util';

export default {
    childRoutes: [{
        path: '/shop/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/shop/Index').default);
            }, 'shop.index');
        }
    }]
}
