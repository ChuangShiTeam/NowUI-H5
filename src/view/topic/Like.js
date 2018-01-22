import React, {Component} from 'react';
import {connect} from 'react-redux';

import util from '../../common/util';

import style from './Like.scss';
import baseStyle from '../../css/Base.scss';
import classNames from "classnames";

class Like extends Component {
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
                <div className={style.header}>
                    <div className={style.headerLeft}>赞过的人</div>
                </div>
                <div className={classNames(style.list, baseStyle.bottomLine)}>
                    <div className={style.listLeft}>
                        <img className={style.listLeftIcon} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=''/>
                    </div>
                    <div className={style.listCenter}>
                        是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊
                    </div>
                    <div className={style.listRight}>
                        {
                            true ?
                                <div className={style.listRightFollow}>
                                    <span>+ 关注</span>
                                </div>
                                :
                                <div className={style.listRightFollowActive}>
                                    <span>已关注</span>
                                </div>
                        }
                    </div>
                </div>
                <div className={classNames(style.list, baseStyle.bottomLine)}>
                    <div className={style.listLeft}>
                        <img className={style.listLeftIcon} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=''/>
                    </div>
                    <div className={style.listCenter}>
                        是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊
                    </div>
                    <div className={style.listRight}>
                        {
                            false ?
                                <div className={style.listRightFollow}>
                                    <span>+ 关注</span>
                                </div>
                                :
                                <div className={style.listRightFollowActive}>
                                    <span>+ 关注</span>
                                </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(() => ({}))(Like);
