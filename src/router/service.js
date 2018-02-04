import util from '../common/util';
import Main from "../view/main/Index";

export default {
    childRoutes: [{
        component: Main,
        childRoutes: [{
            path: '/service/index',
            onEnter: util.handleEnter,
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('../view/service/Index').default);
                }, 'service.index');
            }
        }]
    },{
        path: '/service/servicelist',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/service/ServiceList').default);
            }, 'service.servicelist');
        }
    },{
        path: '/service/details',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/service/Details').default);
            }, 'service.details');
        }
    }]
}
