import util from '../common/util';

export default {
    childRoutes: [{
        childRoutes: [{
            path: '/member/homepage',
            onEnter: util.handleEnter,
            getComponent(location, cb) {
                require.ensure([], (require) => {
                    cb(null, require('../view/member/Homepage').default);
                }, 'member.homepage');
            }
        }]
    }]
}
