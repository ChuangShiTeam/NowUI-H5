import reqwest from 'reqwest';
import md5 from 'blueimp-md5';
import Notification from 'rc-notification';

import constant from './constant';
import storage from './storage';

let notification = null;
Notification.newInstance({}, (n) => notification = n);

function request(config) {
    config.data.appId = constant.appId;
    config.data.token = storage.getToken();
    config.data.platform = constant.platform;
    config.data.version = constant.version;
    config.data.timestamp = Math.round(new Date().getTime() / 1000);

    let sign = '';
    var sdic = Object.keys(config.data).sort();
    for (let ki in sdic) {
        sign += sdic[ki];
        sign += config.data[sdic[ki]];
    }
    config.data.sign = md5(sign);

    reqwest({
        url: constant.host + config.url,
        type: 'json',
        method: 'POST',
        crossOrigin: true,
        processData: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(config.data),
        success: function (response) {
            if (response.code === 200) {
                config.success(response.data);
            } else if (response.code === 400) {
                if (config.error) {
                    config.error();
                }
                notification.notice({
                    content: response.message
                });
            } else {
                if (config.error) {
                    config.error();
                }
                notification.notice({
                    content: '网络异常，请重试'
                });
                
                console.log('接口异常信息：', response.message);
            }
        },
        error: function () {
            if (config.error) {
                config.error();
            } else {
                notification.notice({
                    content: '网络异常，请重试'
                });
            }
        },
        complete: function () {
            config.complete();
        }
    });
}

export default {
    request: request
};
