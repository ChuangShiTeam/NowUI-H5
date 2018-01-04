import util from '../common/util';

export default {
    childRoutes: [{
        path: '/login/quick',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/login/Quick').default);
            }, 'login.quick');
        }
    }, {
        path: '/login/password',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/login/Password').default);
            }, 'login.password');
        }
    }, {
        path: '/forget/password',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/login/ForgetPassword').default);
            }, 'login.password');
        }
    }, {
        path: '/register',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/login/Register').default);
            }, 'login.register');
        }
    }]
}
