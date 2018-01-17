import util from '../common/util';
import Main from "../view/main/Index";
import http from '../common/http';
import storage from '../common/storage';

/*function handleMemberVisitForum(next, replace, callback) {
    let memberVisitForum = storage.getMemberVisitForum();

    if (memberVisitForum === null || memberVisitForum === 'undefined') {
        console.log('memberVisitForum', memberVisitForum);
        http.request({
            url: '/wawi/member/visit/forum/mobile/v1/find',
            data: {},
            success: function (data) {
                if (data.isVisit) {
                    storage.setMemberVisitForum(data.isVisit);
                    if (data.isVisit === 'false') {
                        replace({pathname : '/forum/skip'});
                    } else {
                        callback();
                    }
                } else {
                    callback();
                }
            }.bind(this),
            complete: function () {

            }
        });
    } else {
        callback();
    }
}*/

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
    }, {
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
        path: '/forum/info',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/forum/Info').default);
            }, 'forum.info');
        }
    }]
}
