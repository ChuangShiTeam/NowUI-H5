import util from '../common/util';

export default {
    childRoutes: [{
        path: '/forum/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/forum/Index').default);
            }, 'forum.index');
        }
    }]
}
