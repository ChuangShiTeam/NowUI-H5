import util from '../common/util';
import Main from "../view/Main";

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
    }]
}
