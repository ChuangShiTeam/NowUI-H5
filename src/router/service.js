import util from '../common/util';

export default {
    childRoutes: [{
        path: '/service/index',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/service/Index').default);
            }, 'service.index');
        }
    }]
}
