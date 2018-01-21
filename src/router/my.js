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
        path: '/forum/info',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/forum/Info').default);
            }, 'forum.info');
        }
    },{
        path: '/forum/location',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/forum/Location').default);
            }, 'forum.location');
        }
    },{
        path: '/forum/message',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/forum/Message').default);
            }, 'forum.message');
        }
    }],
}
