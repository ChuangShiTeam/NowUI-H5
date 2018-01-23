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
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        window.addEventListener('message', function(event) {
            let location = event.data;
            //防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
            if (location && location.module === 'locationPicker') {
                notification.emit('notification_location_submit', location);
            }

            this.props.history.goBack();
        }.bind(this), false);
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className={classNames(style.page, baseStyle.page)} style={{minHeight: document.documentElement.clientHeight,}}>
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
