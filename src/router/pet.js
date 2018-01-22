import util from '../common/util';

export default {
    childRoutes: [{
        path: '/pet/category',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/pet/Category').default);
            }, 'pet.category');
        }
    }, {
        path: '/pet/hot',
        onEnter: util.handleEnter,
        getComponent(location, cb) {
            require.ensure([], (require) => {
                cb(null, require('../view/pet/Hot').default);
            }, 'pet.hot');
        }
    }]
}
