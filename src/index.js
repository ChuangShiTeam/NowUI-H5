import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

import './css/Style.css';
import 'rc-notification/assets/index.css';
import 'rmc-select-list/assets/index.css';

// if (typeof String.prototype.startsWith !== 'function') {
//     String.prototype.startsWith = function (prefix) {
//         return this.slice(0, prefix.length) === prefix;
//     };
// }
//
// if (typeof String.prototype.endsWith !== 'function') {
//     String.prototype.endsWith = function (suffix) {
//         return this.indexOf(suffix, this.length - suffix.length) !== -1;
//     };
// }

if((!!window.ActiveXObject || "ActiveXObject" in window) || (/Trident\/7\./).test(navigator.userAgent)) {
    document.getElementById("loading").removeNode(true);
} else {
    document.getElementById("loading").remove();
}

ReactDOM.render(
    <Router/>,
    document.getElementById('root')
);
