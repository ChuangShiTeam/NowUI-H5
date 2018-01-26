import React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';

import style from './Message.scss';

class Message extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        this.handleLoad();
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

    }

    handleLoad() {

    }

    render() {
        return (
            <div className={style.page} style={{height: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        <div className={style.headerContentLeft}>
                        </div>
                        <div className={style.headerContentCenter}>
                            消息
                        </div>
                        <div className={style.headerContentRight}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(() => ({}))(Message);
