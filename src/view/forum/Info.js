import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import Notification from 'rc-notification';

import util from '../../common/util';
import http from '../../common/http';

import style from './Info.scss';
import baseStyle from '../../css/Base.scss';
import storage from "../../common/storage";
import style2 from './Index.scss';
import constant from "../../common/constant";


let notification = null;
Notification.newInstance({}, (n) => notification = n);

class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            pageIndex: 1,
            pageSize: 5,
            forumId: '',
            forum: {},
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
        this.state.forumId = this.props.params.forumId;
        let forumId = this.props.params.forumId;
        console.log('开始加载数据... ');
    //  开始查询后台数据
        http.request({
            url: '/forum/mobile/v1/find',
            data: {
                forumId: forumId,
                pageIndex: this.state.pageIndex,
                pageSize: this.state.pageSize
            },
            success: function (data) {
                console.log('加载数据完成 ');
                this.setState({
                    forum: data
                });
                console.log(this.state.forum.forumUserIsModerator)
            }.bind(this),
            complete: function () {

            }
        });
    }

    handleDelete() {
        http.request({
            url: '/forum/mobile/v1/delete',
            data: {
                forumId: this.state.forumId,
            },
            success: function (data) {
                notification.notice({
                    content: '删除成功'
                });
                this.props.history.push({
                    pathname: '/forum/index',
                    query: {}
                });
            }.bind(this),
            complete: function () {

            }
        });
    }

    handleExit() {
        http.request({
            url: '/forum/user/unfollow/mobile/v1/save',
            data: {
                forumId: this.state.forumId
            },
            success: function (data) {
                notification.notice({
                    content: '成功退出'
                });
                this.props.history.push({
                    pathname: '/forum/index',
                    query: {}
                });
            }.bind(this),
            complete: function () {

            }
        });
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
                            {
                                this.state.forum.forumModerator && this.state.forum.forumModerator.userAvatar ?
                                    <img className={style2.joinContentListLeftIcon}
                                         src={constant.image_host + this.state.forum.forumModerator.userAvatar}
                                         alt=''/>
                                    :
                                    <img className={style.imageCenterImage}
                                         src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/58/h/58'
                                         alt=''/>
                            }

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
                            {this.state.forum.forumName}
                        </div>
                        <div className={baseStyle.listRight}>
                            <div className={baseStyle.rightArrow}></div>
                        </div>
                    </div>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={baseStyle.listLeft}>圈子简介</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            {this.state.forum.forumDescription}
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
                            <div className={style.infoRightName}>
                                {
                                    this.state.forum.forumModerator && this.state.forum.forumModerator.userNickName ?
                                        this.state.forum.forumModerator.userNickName
                                        :
                                        null
                                }
                            </div>
                            <div
                                className={style.infoRightDescription}>
                                {
                                    this.state.forum.forumModerator && this.state.forum.forumModerator.memberSignature ?
                                        this.state.forum.forumModerator.memberSignature
                                        :
                                        null
                                }
                            </div>
                        </div>
                    </div>
                    <div className={style.memberTitle}>
                        全部圈友
                    </div>
                    <div className={style.member}>
                        {
                            this.state.forum.forumUserFollowList &&  this.state.forum.forumUserFollowList.length > 0?
                                this.state.forum.forumUserFollowList.map(function (member, index) {
                                    return (
                                        member.userId ?
                                            <div className={style.memberAvatar}>
                                            {
                                                member.userAvatar ?
                                                    <img className={style.memberAvatarImage}
                                                         src={constant.host + member.userAvatar}
                                                         alt=''/>
                                                    :
                                                    <img className={style.memberAvatarImage}
                                                         src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/35/h/35'
                                                         alt=''/>
                                            }
                                            </div>
                                        :
                                        null
                                    )
                                })
                                :
                                null
                        }
                    </div>

                    {
                        this.state.forum.forumUserIsModerator ?
                            <div className={style.delete} onClick={this.handleDelete.bind(this)}>删除圈子</div>
                            :
                            <div className={style.delete} onClick={this.handleExit.bind(this)}>退出圈子</div>
                    }

                </div>
            </div>
        );
    }
}

export default connect(() => ({}))(Info);
