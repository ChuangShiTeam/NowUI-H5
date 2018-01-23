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
        path: '/topic/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/topic/Add').default);
            }, 'forum.add');
        }
    }, {
        path: '/topic/like/:topicId',
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
    },{
        path:'/topic/hottopic',
        onEnter:util.handleEnter,
        getComponent(location, cb){
            require.ensure([], (require) => {
                cb(null, require('../view/topic/HotTopic').default);
            }, 'forum.hotTopic');
        }
    }, {
        path: '/topic/remind',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/topic/Remind').default);
            }, 'forum.remind');
        }
    }, {
        path: '/topic/detail/:topicId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/topic/Detail').default);
            }, 'forum.detail');
        }
    }, {
        path: '/topic/location',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/topic/Location').default);
            }, 'forum.location');
        }
    }]
}
