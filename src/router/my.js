import util from '../common/util';

export default {
    childRoutes: [{
        path: '/my/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Index').default);
            }, 'my.index');
        }
    }]
}
