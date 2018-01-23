import React, {Component} from 'react';
import classNames from "classnames";

import notification from '../../common/notification';
import util from '../../common/util';

import style from './Location.scss';
import baseStyle from '../../css/Base.scss';
import {connect} from "react-redux";

class Location extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        }

        this.handleMessage = this.handleMessage.bind(this);
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        if (window.addEventListener) {
            window.addEventListener('message', this.handleMessage);
        } else {
            window.attachEvent('message', this.handleMessage);
        }
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {
        if (window.addEventListener) {
            window.removeEventListener('message', this.handleMessage);
        } else {
            window.detachEvent('message', this.handleMessage);
        }
    }

    handleMessage(event) {
        let location = event.data;
        if (location && location.module === 'locationPicker') {
            notification.emit('notification_location_submit', location);
        }

        this.props.history.goBack();
    }

    render() {
        return (
            <div className={classNames(style.page, baseStyle.page)}
                 style={{minHeight: document.documentElement.clientHeight,}}>
                {
                    <iframe style={{width: '100%', height: document.documentElement.clientHeight}}
                            border="0" scrolling="no"
                            src="http://apis.map.qq.com/tools/locpicker?search=1&type=1&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp">
                    </iframe>
                }
            </div>
        );
    }
}

export default connect(() => ({}))(Location);
