import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import util from '../../common/util';

import style from './Info.scss';
import baseStyle from '../../css/Base.scss';

class Info extends Component {
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
            <div className={style.page} style={{height: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        圈子信息
                    </div>
                </div>
                <div className={style.content}>
                    <div className={classNames(style.image, baseStyle.list)}>
                        <div className={baseStyle.listLeft}>圈子头像</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            <img className={style.imageCenterImage}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/58/h/58'
                                 alt=''/>
                        </div>
                        <div className={baseStyle.listRight}>
                            <div className={baseStyle.rightArrow}></div>
                        </div>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={style.content}>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={baseStyle.listLeft}>圈子名称</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            魔都喵星人
                        </div>
                        <div className={baseStyle.listRight}>
                            <div className={baseStyle.rightArrow}></div>
                        </div>
                    </div>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={baseStyle.listLeft}>圈子简介</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            这里是魔都喵星人的聚集这里是魔都喵星人的聚集这里是魔都喵星人的聚集
                        </div>
                        <div className={baseStyle.listRight}>
                            <div className={baseStyle.rightArrow}></div>
                        </div>
                    </div>
                    <div className={style.infoTitle}>
                        圈子信息
                    </div>
                    <div className={classNames(style.info, baseStyle.bottomLine)}>
                        <div className={style.infoLeft}>
                            <img className={style.infoLeftCrown}
                                 src={require('../../image/crown.png')}
                                 alt=''/>
                            <img className={style.infoLeftImage}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/35/h/35'
                                 alt=''/>
                        </div>
                        <div className={style.infoRight}>
                            <div className={style.infoRightName}>小野</div>
                            <div
                                className={style.infoRightDescription}>资深遛狗师一枚，对宠物行为有很深的造诣。资深遛狗师一枚，对宠物行为有很深的造诣。资深遛狗师一枚，对宠物行为有很深的造诣。
                            </div>
                        </div>
                    </div>
                    <div className={style.memberTitle}>
                        全部圈友
                    </div>
                    <div className={style.member}>
                        <div className={style.memberAvatar}>
                            <img className={style.memberAvatarImage}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/35/h/35'
                                 alt=''/>
                        </div>
                        <div className={style.memberAvatar}>
                            <img className={style.memberAvatarImage}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/35/h/35'
                                 alt=''/>
                        </div>
                        <div className={style.memberAvatar}>
                            <img className={style.memberAvatarImage}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/35/h/35'
                                 alt=''/>
                        </div>
                        <div className={style.memberAvatar}>
                            <img className={style.memberAvatarImage}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/35/h/35'
                                 alt=''/>
                        </div>
                        <div className={style.memberAvatar}>
                            <img className={style.memberAvatarImage}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/35/h/35'
                                 alt=''/>
                        </div>
                        <div className={style.memberAvatar}>
                            <img className={style.memberAvatarImage}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/35/h/35'
                                 alt=''/>
                        </div>
                        <div className={style.memberAvatar}>
                            <img className={style.memberAvatarImage}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/35/h/35'
                                 alt=''/>
                        </div>
                        <div className={style.memberAvatar}>
                            <img className={style.memberAvatarImage}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/35/h/35'
                                 alt=''/>
                        </div>
                        <div className={style.memberAvatar}>
                            <img className={style.memberAvatarImage}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/35/h/35'
                                 alt=''/>
                        </div>
                        <div className={style.memberAvatar}>
                            <img className={style.memberAvatarImage}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/35/h/35'
                                 alt=''/>
                        </div>
                        <div className={style.memberAvatar}>
                            <img className={style.memberAvatarImage}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/35/h/35'
                                 alt=''/>
                        </div>
                        <div className={style.memberAvatar}>
                            <img className={style.memberAvatarImage}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/35/h/35'
                                 alt=''/>
                        </div>
                        <div className={style.memberAvatar}>
                            <img className={style.memberAvatarImage}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/35/h/35'
                                 alt=''/>
                        </div>
                    </div>
                    <div className={style.delete}>删除圈子</div>
                </div>
            </div>
        );
    }
}

export default connect(() => ({}))(Info);
