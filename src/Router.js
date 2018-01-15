import React from 'react';
import {Router, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

import constant from './common/constant';

const reducers = {};
const storeContext = require.context('./store', false, /\.js$/);
const storeKeys = storeContext.keys().filter(function (item) {
    return item;
});
for (let i = 0; i < storeKeys.length; i++) {
    let name = storeKeys[i];
    name = name.replace('./', '');
    name = name.replace('.js', '');

    reducers[name] = storeContext(storeKeys[i]).default;
}

const childRoutes = [];
const routerContext = require.context('./router', false, /\.js$/);
const routerKeys = routerContext.keys().filter(function (item) {
    return item;
});
for (let i = 0; i < routerKeys.length; i++) {
    childRoutes.push(routerContext(routerKeys[i]).default);
}

const store = createStore(
    combineReducers(Object.assign(reducers, {
        routing: routerReducer
    }))
);

const routes = {
    path: '/',
    indexRoute: {
        onEnter: function (next, replace, callback) {
            replace(null, constant.index);
            callback();
        }
    },
    childRoutes: [{
        childRoutes: childRoutes
    }]
};

const Routers = () =>
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>

export default Routers;
