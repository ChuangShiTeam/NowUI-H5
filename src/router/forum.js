import util from '../common/util';
import Main from "../view/main/Index";
export default {
    childRoutes: [{
        component: Main,
        childRoutes: [{
            path: '/forum/index',
            onEnter: util.handleEnter,
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('../view/forum/Index').default);
                }, 'forum.index');
            }
        }]
    } ,{
        path: '/forum/homepage',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/forum/Homepage').default);
            }, 'forum.homepage');
        }
    },  {
        path: '/forum/skip',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/forum/Skip').default);
            }, 'forum.skip');
        }
    }, {
        path: '/forum/add',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/forum/Add').default);
            }, 'forum.add');
        }
    }, {
        path: '/forum/search',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/forum/Search').default);
            }, 'forum.search');
        }
    }, {
        path: '/forum/info/:forumId',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/forum/Info').default);
            }, 'forum.info');
        }
    }, {
        path: '/forum/homepage/:forumId',
        onEnter: util.handleEnter,
        getComponent(location, cb){
            require.ensure([], (require) => {
                cb(null, require('../view/forum/Homepage').default);
            }, 'forum.homepage');
        }
    }, {
        path: '/forum/my',
        onEnter: util.handleEnter,
        getComponent(location, cb){
            require.ensure([], (require) => {
                cb(null, require('../view/forum/My').default);
            }, 'forum.list');
        }
    }]
}
