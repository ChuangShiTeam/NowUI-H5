import util from '../common/util';
import Main from "../view/main/Index";

export default {
    childRoutes: [{
        component: Main,
        childRoutes: [{
            path: '/my/index',
            onEnter: util.handleEnter,
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('../view/my/Index').default);
                }, 'my.index');
            }
        }]
    },{
        path: '/my/info',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Info').default);
            }, 'my.info');
        }
    },{
        path: '/my/location',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Location').default);
            }, 'my.location');
        }
    },{
        path: '/my/message',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Message').default);
            }, 'my.message');
        }
    // },{
    //     path: '/my/language',
    //     onEnter: util.handleEnter,
    //     getComponent(location, cb) {
    //         require.ensure([], (require) => {
    //             cb(null, require('../view/my/Language').default);
    //         }, 'my.language');
    //     }
    }],
}
