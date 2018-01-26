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
    }, {
        path: '/my/bookmark',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Bookmark').default);
            }, 'my.bookmark');
        }
    }, {
        path: '/my/dynamic',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Dynamic').default);
            }, 'my.dynamic');
        }
    }, {
            path: '/my/adorable',
            onEnter: util.handleEnter,
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('../view/my/Adorable').default);
                }, 'my.adorable');
            }
        }, {
        path: '/my/shop',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Shop').default);
            }, 'my.shop');
        }
    }, {
        path: '/my/whole',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Whole').default);
            }, 'my.whole');
        }
    },{
        path: '/my/follow',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Follow').default);
            }, 'my.follow');
        }
    },{
        path: '/my/followme',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Followme').default);
            }, 'my.followme');
        }
    },{
        path: '/my/qrcode',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Qrcode').default);
            }, 'my.qrcode');
        }
    },{
            path: '/my/search',
            onEnter: util.handleEnter,
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('../view/my/Search').default);
                }, 'my.search');
            }
        },{
        path: '/my/collectionfind',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Collectionfind').default);
            }, 'my.collectionfind');
        }
    },{
        path: '/my/searchtype',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Searchtype').default);
            }, 'my.searchtype');
        }
    },{
        path: '/my/personalletter',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Personalletter').default);
            }, 'my.personalletter');
        }
    },{
        path: '/my/systemmessage',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Systemmessage').default);
            }, 'my.systemmessage');
        }
    },{
        path: '/my/notice',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Notice').default);
            }, 'my.notice');
        }
    },{
        path: '/my/comment',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Comment').default);
            }, 'my.comment');
        }
    },{
        path: '/my/publish',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Publish').default);
            }, 'my.publish');
        }
    },{
        path: '/my/info',
        onEnter:util.handleEnter,
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
        path: '/my/follow',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/my/Follow').default);
            }, 'my.follow');
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
