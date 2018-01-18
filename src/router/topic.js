import util from '../common/util';
import Main from "../view/main/Index";

export default {
    childRoutes: [{
        component: Main,
        childRoutes: [{
            path: '/topic/index',
            onEnter: util.handleEnter,
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('../view/topic/Index').default);
                }, 'topic.index');
            }
        }]
    }, {
        path: '/topic/like',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/topic/Like').default);
            }, 'forum.like');
        }
    }, {
        path: '/topic/follow',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/topic/Follow').default);
            }, 'forum.follow');
        }
    }]
}
