import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {Link} from 'react-router';

import Notification from 'rc-notification';

import util from '../../common/util';
import http from '../../common/http';

import style from './Info.scss';
import baseStyle from '../../css/Base.scss';
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
            ModeratorId: '',
            forumUserIsModerator: false
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
        let forumId = this.props.params.forumId;
        http.request({
            url: '/forum/mobile/v1/find',
            data: {
                forumId: forumId,
                pageIndex: this.state.pageIndex,
                pageSize: this.state.pageSize
            },
            success: function (data) {
                this.setState({
                    forum: data,
                    forumId: forumId,
                    ModeratorId: data.forumModerator.userId,
                    forumUserIsModerator: data.forumUserIsModerator

                });
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


    handleJoin(forumId) {
        http.request({
            url: '/forum/user/follow/mobile/v1/save',
            data: {
                forumId: forumId
            },
            success: function (data) {
                if (data) {
                    notification.notice({
                        content: '加入成功'
                    });
                    this.handleLoad();
                } else {
                    notification.notice({
                        content: '加入失败'
                    });
                }

            }.bind(this),
            complete: function () {

            }
        });
    }


    render() {

        return (
            <div className={style.page} style={{minHeight: document.documentElement.clientHeight}}>
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
                                this.state.forum && this.state.forum.forumMedia ?
                                    <img className={style.imageCenterImage}
                                         src={constant.image_host + this.state.forum.forumMedia}
                                         alt=''/>
                                    :
                                    null
                            }

                        </div>
                        <div className={baseStyle.listRight}>
                            <div className={baseStyle.rightArrow}></div>
                        </div>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={style.content}>
                    {
                        this.state.forumUserIsModerator ?
                            <Link to={{ pathname: '/forum/rename', state: { forum: this.state.forum }}} >
                                <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                                    <div className={baseStyle.listLeft}>圈子名称</div>
                                    <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                                        {this.state.forum.forumName}
                                    </div>
                                    <div className={baseStyle.listRight}>
                                        <div className={baseStyle.rightArrow}></div>
                                    </div>
                                </div>
                            </Link>
                            :
                            <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                                <div className={baseStyle.listLeft}>圈子名称</div>
                                <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                                    {this.state.forum.forumName}
                                </div>
                            </div>
                    }

                    {
                        this.state.forumUserIsModerator ?
                            <Link to={{ pathname: '/forum/edit/introduce', state: { forum: this.state.forum }}} >
                                <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                                    <div className={baseStyle.listLeft}>圈子简介</div>
                                    <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                                        {this.state.forum.forumDescription}
                                    </div>
                                    <div className={baseStyle.listRight}>
                                        <div className={baseStyle.rightArrow}></div>
                                    </div>
                                </div>
                            </Link>
                            :
                            <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                                <div className={baseStyle.listLeft}>圈子简介</div>
                                <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                                    {this.state.forum.forumDescription}
                                </div>
                            </div>
                    }


                    <div className={style.infoTitle}>
                        圈主信息
                    </div>
                    <div className={classNames(style.info, baseStyle.bottomLine)}>
                        <Link to={this.state.forum.forumUserIsModerator ? '/my/publish' :'/member/homepage/' +  this.state.forumModerator} key={this.state.forumModerator} >
                        <div className={style.infoLeft}>
                            <img className={style.infoLeftCrown}
                                 src={require('../../image/crown.png')}
                                 alt=''/>
                            {
                                this.state.forum.forumModeratorInfo && this.state.forum.forumModeratorInfo.userAvatar ?
                                    <img className={style.infoLeftImage}
                                         src={constant.image_host + this.state.forum.forumModeratorInfo.userAvatar}
                                         alt=''/>
                                    :
                                    null
                            }
                        </div>
                        </Link>
                        <div className={style.infoRight}>
                            <div className={style.infoRightName}>
                                <Link to={this.state.forum.forumUserIsModerator ? '/my/publish' :'/member/homepage/' +  this.state.ModeratorId} key={this.state.ModeratorId} >
                                    {
                                        this.state.forum.forumModeratorInfo && this.state.forum.forumModeratorInfo.userNickName ?
                                            this.state.forum.forumModeratorInfo.userNickName
                                            :
                                            null
                                    }
                                </Link>
                            </div>
                            <div
                                className={style.infoRightDescription}>
                                {
                                    this.state.forum.forumModeratorInfo && this.state.forum.forumModeratorInfo.memberSignature ?
                                        this.state.forum.forumModeratorInfo.memberSignature
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
                                            <div >
                                                <Link className={style.memberAvatar} to={member.memberIsSelf ? '/my/publish' : ('/member/homepage/' +  member.userId)} key={member.userId} >
                                                    {
                                                        member.userAvatar && member.userAvatar.filePath?
                                                            <img className={style.memberAvatarImage}
                                                                 src={constant.host + member.userAvatar.filePath}
                                                                 alt=''/>
                                                            :
                                                            null
                                                    }
                                                </Link>
                                            </div>
                                            :
                                            null
                                    )
                                }.bind(this))
                                :
                                null
                        }
                        <div className={classNames(style.memberAvatarImage)} >
                            <img src={require('../../image/info-allfriend.png')} alt=''/>
                        </div>
                    </div>
                    {
                        this.state.forum.forumUserIsModerator ?
                            <div className={style.delete} onClick={this.handleDelete.bind(this)}>删除圈子</div>
                            :
                            this.state.forum.forumRequestUserIsFollow ?
                                <div className={style.delete} onClick={this.handleExit.bind(this)}>退出圈子</div>
                                :
                                <div className={style.delete} onClick={this.handleJoin.bind(this, this.state.forumId)}>加入圈子</div>
                    }
                </div>
            </div>
        );
    }
}

export default connect(() => ({}))(Info);
