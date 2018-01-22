import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';


import util from '../../common/util';

import style from './Follow.scss';


class Follow extends Component {
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
            <div className={style.page} style={{minHeight: document.documentElement.clientHeight}}>

                <div className={style.header}>
                    <div>TA关注的人</div>
                </div>
                <div className={style.contentMargin}>
                        <div className={style.content}>
                            <div className={style.imageLeft}>
                                <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=''/>
                                <div className={style.imageCenter}> 是大熊啊</div>
                            </div>
                            <div  className={style.imageRight}>
                                 <div className={style.imageRight1}>+</div>
                                <div className={style.imageRightFont}>关注</div>
                            </div>
                        </div>
                        <div className={style.divNull}></div>
                        <div className={style.content}>
                            <div className={style.imageLeft}>
                                <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=''/>
                                <div className={style.imageCenter}> 粒粒</div>
                            </div>
                            <div className={style.imageRight}>
                                <div className={style.imageRight1}>+</div>
                                <div className={style.imageRightFont}>关注</div>
                            </div>
                        </div>
                    <div className={style.divNull}></div>
                        <div className={style.content}>
                            <div className={style.imageLeft}>
                                <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=''/>
                                <div className={style.imageCenter}> 小高同志</div>
                            </div>
                            <div className={style.imageRights}>
                                <div className={style.imageRightFont1}>已关注</div>
                            </div>
                        </div>
                    <div className={style.divNull}></div>
                        <div className={style.content}>
                            <div className={style.imageLeft}>
                                <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=''/>
                                <div className={style.imageCenter}> 大大大饺子</div>
                            </div>
                            <div className={style.imageRights}>
                                <div className={style.imageRightFont1}>已关注</div>
                            </div>
                        </div>
                    <div className={style.divNull}></div>
                        <div className={style.content}>
                            <div className={style.imageLeft}>
                                <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=''/>
                                <div className={style.imageCenter}> 阿拉系蕾</div>
                            </div>
                            <div className={style.imageRights}>
                                <div className={style.imageRightFont1}>已关注</div>
                            </div>
                        </div>
                    <div className={style.divNull}></div>
                </div>


            </div>

        );
    }
}

export default connect(() => ({}))(Follow);
