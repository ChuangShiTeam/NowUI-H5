import util from '../common/util';
import Main from "../view/Main";

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
    }]
}
