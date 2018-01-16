import util from '../common/util';

export default {
    childRoutes: [{
        path: '/login/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/login/Index').default);
            }, 'login.index');
        }
    }]
}