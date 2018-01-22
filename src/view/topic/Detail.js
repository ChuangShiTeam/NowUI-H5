import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Notification from "rc-notification";
import classNames from 'classnames';

import util from '../../common/util';

import style from './Detail.scss';
import baseStyle from '../../css/Base.scss';


let notification = null;
Notification.newInstance({}, (n) => notification = n);

class Detail extends Component {
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
                    <div className={style.headerLeft}>
                        <img className={style.headerLeftImage} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/28/h/28' alt=''/>
                    </div>
                    <div className={style.headerCenter}>
                        <p className={style.headerCenterName}>Nami</p>
                        <p className={style.headerCenterTime}>20分钟前</p>
                    </div>
                    <div className={style.headerRight}></div>
                </div>
                <div className={style.line}></div>
                <div className={style.content}>
                    <img className={style.contentImage} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/255' alt=''/>
                </div>
                <div className={style.footer}>
                    <div className={classNames(style.footerText, baseStyle.bottomLine)}>
                        奶糖和福禄娃给你过圣诞啦～
                    </div>
                    <div className={style.footerInfo}>
                        <div className={style.footerInfoLeft}>
                            <img className={style.footerInfoLeftLocationIcon} src={require('../../image/location.png')} alt=''/>
                            <span className={style.footerInfoLeftLocationText}>上海  松江区</span>
                        </div>
                        <div className={style.footerInfoRight}>
                            <span className={style.footerInfoRightFrom}>来自</span>
                            <span className={style.footerInfoRightTag}>大爱猫咪控</span>
                            <span className={style.footerInfoRightTag}>大爱猫咪控</span>
                        </div>
                    </div>
                    <div className={style.footerCount}>
                        <div className={style.footerCountLeft}>
                            <img className={style.footerCountLeftLikeIcon} src={true ? require('../../image/like.png') : require('../../image/like-active.png')} alt=''/>
                            <div className={style.footerCountLeftLikeIconNumber}>60</div>
                        </div>
                        <Link to='/topic/like' className={style.footerCountCenter}>
                            <img className={style.footerCountLeftAvatarIcon} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/255' alt=''/>
                            <img className={style.footerCountLeftAvatarIcon} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/255' alt=''/>
                            <img className={style.footerCountLeftAvatarIcon} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/255' alt=''/>
                            <img className={style.footerCountLeftAvatarIcon} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/255' alt=''/>
                            <img className={style.footerCountLeftAvatarIcon} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/255' alt=''/>
                        </Link>
                        <div className={style.footerCountRight}>
                            <img className={style.footerCountRightBookmarkIcon} src={true ? require('../../image/bookmark.png') : require('../../image/bookmark-acitve.png')} alt=''/>
                            <span className={style.footerCountRightBookmarkNumber}>10</span>
                            <img className={style.footerCountRightCommentIcon} src={require('../../image/comment.png')} alt=''/>
                            <span className={style.footerCountRightCommentNumber}>10</span>
                        </div>
                    </div>
                </div>
                <div className={style.line2}></div>
                <div className={style.content}>
                    {
                        [{},{},{}].map(function (comment, index) {
                            return (
                                <div key={index} className={classNames(style.comment, baseStyle.maxWidthWithPadding, index > 0 ? baseStyle.marginTop : '')}>
                                    <div className={style.commentLeft}>
                                        <img className={style.commentLeftImage} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/38/h/38' alt=''/>
                                    </div>
                                    <div className={classNames(style.commentRight, baseStyle.bottomLine)}>
                                        <div className={style.commentRightLike}>
                                            <div className={style.commentRightLikeContent}>
                                                <img className={style.commentRightLikeIcon} src={true ? require('../../image/like.png') : require('../../image/like-active.png')} alt=''/>
                                                <span className={style.commentRightLikeText}>3</span>
                                            </div>
                                        </div>
                                        <div className={style.commentRightName}>我是来找茬的</div>
                                        <div className={style.commentRightName}>3小时前</div>
                                        <div className={style.commentRightContent}>
                                            回复<span className={style.commentRightContentWho}>我是来找茬的</span>: 不行不行，他是我的～不行不行，他是我的～不行不行，他是我的～不行不行，他是我的～不行不行，他是我的～不行不行，他是我的～不行不行，他是我的～不行不行，他是我的～不行不行，他是我的～不行不行，他是我的～不行不行，他是我的～不行不行，他是我的～
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default connect(() => ({}))(Detail);
