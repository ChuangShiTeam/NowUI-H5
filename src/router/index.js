import util from '../common/util';

export default {
    childRoutes: [{
        path: '/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/Index').default);
            }, 'index');
        }
    }]
}
