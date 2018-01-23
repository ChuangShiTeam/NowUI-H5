import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import util from '../../common/util';

import style from './Add.scss';
import baseStyle from '../../css/Base.scss';

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
            let loc = event.data;
            if (loc && loc.module === 'locationPicker') {//防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
                this.props.dispatch({
                    type: 'topicAdd',
                    data: {
                        location: loc
                    }
                });
                this.props.history.push({
                    pathname: '/topic/add',
                    query: {}
                });
            }
        }.bind(this), false);
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className={baseStyle.page} style={{minHeight: document.documentElement.clientHeight}}>
                <iframe id="mapPage" style={{width: '100%', height: document.documentElement.clientHeight}}
                        border="0" scrolling="no"
                        src="http://apis.map.qq.com/tools/locpicker?search=1&type=1&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp">
                </iframe>
            </div>
        );
    }
}

export default connect(() => ({}))(Location);
