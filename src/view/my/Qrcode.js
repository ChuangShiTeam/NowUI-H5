import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import baseStyle from '../../css/Base.scss';


import util from '../../common/util';

import style from './Qrcode.scss';


class Qrcode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className={baseStyle.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.messages}>
                    <img className={style.photo} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?listView/1/w/72/h/72" alt=""/>
                </div>
                <div className={style.messages}>
                    <span className={style.names}>大木木_Lin</span>
                    <div>
                        {
                            true?
                                <img src={require("../../image/womanIcon.png")} alt=""/>
                                :
                                <img src={require("../../image/manIcon.png")} alt=""/>
                        }

                    </div>
                </div>
                <div className={style.messages}>
                    <img className={style.qrCode} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?listView/1/w/100/h/101" alt=""/>
                </div>
                <div className={style.messages}>
                    <span className={style.joinUs}>扫开时间与空间，让我们在哇咿相遇吧</span>
                </div>

            </div>
        );
    }
}
export default connect(() => ({}))(Qrcode);


