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
    }]
}
