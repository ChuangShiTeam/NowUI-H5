import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import {Link} from 'react-router';
import Notification from "rc-notification";
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroll-component';



import util from '../../common/util';

import style from './Detail.scss';
import baseStyle from '../../css/Base.scss';
import classNames from "classnames";
import http from "../../common/http";
import constant from "../../common/constant";


let notification = null;
Notification.newInstance({}, (n) => notification = n);

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            topic: {},
            pageIndex: 1,
            pageSize: 8,
            topicCommentTotal: 0,
            topicCommentList: [],
            topicReplayUserId: '',
            placeholder: '我也要说点什么…',
            topicReplyCommentId: '',
            userLikeList: [],
            hasMore: false
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        this.handleLoad();
        this.handleLoadComment();
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

    }


    handleFollow(userId) {
        http.request({
            url: this.state.topic.topicUser.memberIsFollow ? '/member/follow/mobile/v1/delete' : '/member/follow/mobile/v1/save',
            data: {
                followUserId: userId,
            },
            success: function (data) {
                if (data){
                    this.state.topic.topicUser.memberIsFollow != this.state.topic.topicUser.memberIsFollow;
                    this.setState({
                        topic:this.state.topic
                    });
                }
                this.handleLoad()
            }.bind(this),
            complete: function () {
            }.bind(this)
        });
    }


    handleLoad() {
        let topicId = this.props.params.topicId;
        if (topicId) {
            http.request({
                url: '/topic/mobile/v1/find',
                data: {
                    topicId: topicId
                },
                success: function (data) {
                    this.setState({
                        topic: data
                    });
                }.bind(this),
                complete: function () {
                    setTimeout(() => {
                        let topicImage = document.querySelector('#topicImage');

                        topicImage.addEventListener('click', function () {
                            window.ImageView.show({
                                pattern: 'default',
                                selector: '.imageItem',
                                initDisplaySize: 'cover',
                                initDisplayPositionX: 'center',
                                initDisplayPositionY: 'center'
                            });
                        });
                    }, 0);
                }
            });
        }
    }

    handleLoadComment() {
        let topicId = this.props.params.topicId;
        if (topicId) {
            http.request({
                url: '/topic/comment/mobile/v1/list',
                data: {
                    topicId: topicId,
                    pageIndex: this.state.pageIndex,
                    pageSize: this.state.pageSize,
                    systemCreateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
                    excludeCommentIdList: []
                },
                success: function (data) {
                    if (data && data.list && data.list.length > 0) {
                        let commentList = data.list;
                        let commentTotal = data.total;
                        this.setState({
                            topicCommentTotal: commentTotal,
                            topicCommentList: commentList,
                            hasMore: commentList.length < commentTotal
                        });
                    }
                }.bind(this),
                complete: function () {

                }
            });
        }
    }


    handleNextLoad() {
        if (this.state.hasMore) {
            let {pageIndex, pageSize, topicCommentList} = this.state;
            let excludeCommentIdList = util.lastWithSame(topicCommentList, 'topicCommentId', 'systemCreateTime');
            let lastComment = topicCommentList[topicCommentList.length - 1];
            let systemCreateTime = moment(lastComment.systemCreateTime).format('YYYY-MM-DD HH:mm:ss');
            http.request({
                url: '/topic/comment/mobile/v1/list',
                data: {
                    pageIndex: pageIndex,
                    pageSize: pageSize,
                    topicId: this.props.params.topicId,
                    systemCreateTime: systemCreateTime,
                    excludeCommentIdList: excludeCommentIdList
                },
                success: function (data) {
                    if (data && data.list && data.list.length > 0) {
                        this.setState({
                            topicCommentTotal: data.total,
                            topicCommentList: topicCommentList.concat(data.list)
                        });
                    }else {
                        this.setState({
                            hasMore: false
                        });
                    }

                    console.log('bug',data)
                }.bind(this),
                complete: function () {

                }.bind(this)
            });
        }
    }


    handleClickLikeTopic() {
        http.request({
            url: this.state.topic.topicUserIsLike ? '/topic/user/unlike/mobile/v1/save' : '/topic/user/like/mobile/v1/save',
            data: {
                topicId: this.state.topic.topicId,
                userNickName: '谁用了我的头像(测试)',
                userAvatar: '/upload/df2078d6c9eb46babb0df957127273ab/3bdfcbb00f90415989fb53e6677c25df/ae74752bc95c4ed6a9ebbd020d3b4105.jpg'
            },
            success: function (data) {

                if (data) {
                    let topic = this.state.topic;
                    topic.topicUserIsLike = !topic.topicUserIsLike;
                    if (topic.topicUserIsLike) {
                        topic.topicCountLike += 1;
                    } else {
                        topic.topicCountLike -= 1;
                    }

                    this.setState({
                        topic: topic
                    })
                }

            }.bind(this),
            complete: function () {

            }
        });
    }

    handleBookmarkTopic() {
        http.request({
            url: this.state.topic.topicUserIsBookmark ? '/topic/user/unbookmark/mobile/v1/save' : '/topic/user/bookmark/mobile/v1/save',
            data: {
                topicId: this.state.topic.topicId
            },
            success: function (data) {
                if (data) {
                    let topic = this.state.topic;
                    topic.topicUserIsBookmark = !topic.topicUserIsBookmark;
                    if (topic.topicUserIsBookmark) {
                        topic.topicCountBookmark += 1;
                    } else {
                        topic.topicCountBookmark -= 1;
                    }
                    this.setState({
                        topic: topic
                    })
                }
            }.bind(this),
            complete: function () {

            }
        })
    }

    handleCommentTopic() {
        this.customFocusInst.focus();
    }

    handleClickLikeComment(index) {
        http.request({
            url: this.state.topicCommentList[index].topicCommentIsLike ? '/topic/comment/user/unlike/mobile/v1/save' : '/topic/comment/user/like/mubile/v1/save',
            data: {
                commentId: this.state.topicCommentList[index].topicCommentId
            },
            success: function (data) {
                if (data) {
                    let topicCommentList = this.state.topicCommentList;
                    let comment = topicCommentList[index];
                    comment.topicCommentIsLike = !comment.topicCommentIsLike;
                    if (comment.topicCommentIsLike) {
                        comment.topicCommentLikeCount += 1;
                    } else {
                        comment.topicCommentLikeCount -= 1;
                    }
                    topicCommentList[index] = comment;
                    this.setState({
                        topicCommentList: topicCommentList
                    });
                }
            }.bind(this),
            complete: function () {

            }
        });
    }

    handleSubmit() {
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                var message = '';
                for (var error in errors) {
                    message += '<p>';
                    message += errors[error].errors[0].message;
                    message += '</p>';
                }

                notification.notice({
                    content: <div dangerouslySetInnerHTML={{__html: message}}></div>
                });

                return;
            }

            let topicId = this.state.topic.topicId;
            if (!topicId) {
                return;
            }
            values.topicId = topicId;
            values.topicReplayUserId = this.state.topicReplayUserId;
            values.topicReplyCommentId = this.state.topicReplyCommentId;
            values.userNickName = '谁用了我的头像(测试)';
            values.userAvatar = '/upload/df2078d6c9eb46babb0df957127273ab/3bdfcbb00f90415989fb53e6677c25df/ae74752bc95c4ed6a9ebbd020d3b4105.jpg'
            http.request({
                url: '/topic/comment/mobile/v1/save',
                data: values,
                success: function (data) {
                    if (data) {
                        this.handleLoadComment();
                        this.setState({
                            topicReplayUserId: '',
                            placeholder: '我也要说点什么…',
                            topicReplyCommentId: ''
                        });
                        this.props.form.resetFields();
                    }
                }.bind(this),
                complete: function () {

                }
            });

        });
    }

    handleChooseReply(topicReplayUserId, topicReplayUserNickName, topicReplyCommentId) {
        if (topicReplayUserId === this.state.topic.requestUser.userId) {
            this.setState({
                topicReplayUserId: '',
                placeholder: '我也要说点什么…',
                topicReplyCommentId: ''
            })
        } else {
            this.setState({
                topicReplayUserId: topicReplayUserId,
                placeholder: '回复' + topicReplayUserNickName + '：',
                topicReplyCommentId: topicReplyCommentId
            })
        }

    }

    handleCancelReply() {
        this.setState({
            topicReplayUserId: '',
            placeholder: '我也要说点什么…',
            topicReplyCommentId: ''
        })
    }


    render() {
        const {getFieldProps} = this.props.form;
        return (
            <div className={classNames(style.page, baseStyle.tabbarPage)}>
                <InfiniteScroll
                    next={this.handleNextLoad.bind(this)}
                    hasMore={this.state.hasMore}
                    loader={
                        <p style={{textAlign: 'center'}}>
                            <b>Loading...</b>
                        </p>
                    }
                    endMessage={
                        <p style={{textAlign: 'center'}}>
                            <b>底线</b>
                        </p>
                    }
                >




                    <div className={classNames(style.page, baseStyle.page)}
                         style={{minHeight: document.documentElement.clientHeight, paddingBottom: 0}} >
                        <div className={style.header}>
                            <div className={style.headerLeft}>
                                {
                                    this.state.topic  ?
                                        <Link to={this.state.topic.topicIsSelf ? '/my/publish' : '/member/homepage/' +  this.state.topic.userId}>
                                            {
                                                this.state.topic.theSendInfo && this.state.topic.theSendInfo.userAvatar ?
                                                    <img className={style.headerLeftImage} src={constant.image_host + this.state.topic.theSendInfo.userAvatar} alt=''/>
                                                    :
                                                    <img className={style.headerLeftImage} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/28/h/28' alt=''/>
                                            }
                                        </Link>
                                        :
                                        null
                                }
                            </div>
                            <div className={style.headerCenter}>

                                <p className={style.headerCenterName}>
                                    {
                                        this.state.topic  ?
                                            <Link to={this.state.topic.topicIsSelf ? '/my/publish' : '/member/homepage/' +  this.state.topic.userId}>
                                                {this.state.topic.theSendInfo && this.state.topic.theSendInfo.userNickName ? this.state.topic.theSendInfo.userNickName : '用户昵称为null'}
                                            </Link>
                                            :
                                            null
                                    }
                                </p>
                                <p className={style.headerCenterTime}> {moment(this.state.topic.systemCreateTime).fromNow()}</p>
                            </div>
                            <div className={style.headerRight}>
                                <div className={style.listRight}>

                                    {
                                        this.state.topic.topicIsSelf ?
                                            null
                                        :
                                            this.state.topic.topicUser ?
                                                this.state.topic.topicUser.memberIsFollow ?
                                                    <div  className={style.listRightFollowActive} onClick={this.handleFollow.bind(this, this.state.topic.topicUser.userId)}>
                                                        <span >已关注</span>
                                                    </div>
                                                    :
                                                    <div   className={style.listRightFollow} onClick={this.handleFollow.bind(this, this.state.topic.topicUser.userId)}>
                                                        <span >+ 关注</span>
                                                    </div>
                                                :
                                                null

                                    }
                                </div>
                            </div>
                        </div>
                        <div className={style.line}></div>
                        <div id="topicImage" className={style.content}>
                            {
                                this.state.topic && this.state.topic.topicMediaList ?
                                    this.state.topic.topicMediaList.map(function (mediaList, index) {
                                        return (
                                            <img key={index} className='imageItem' src={constant.image_host + mediaList.topicMedia} alt=''/>
                                        )
                                    })
                                    :
                                    null
                            }
                        </div>
                        <div className={style.footer} onClick={this.handleCancelReply.bind(this)}>
                            <div className={classNames(style.footerText, baseStyle.bottomLine)}>
                                {this.state.topic.topicSummary}
                            </div>
                            <div className={style.footerInfo}>
                                <div className={style.footerInfoLeft}>
                                    <img className={style.footerInfoLeftLocationIcon} src={require('../../image/location.png')}
                                         alt=''/>
                                    <div>
                                            <div className={style.footerInfoLeftLocationTextLeft}></div>
                                            <span className={style.footerInfoLeftLocationText}>
                                                {this.state.topic.topicLocation}
                                             </span>
                                    </div>

                                </div>
                                <div className={style.footerInfoRight}>
                                    <span className={style.footerInfoRightFrom}>来自</span>
                                    {
                                        this.state.topic && this.state.topic.topicMediaList ?
                                            this.state.topic.topicForumList.map(function (forumList, index) {
                                                return (
                                                    <span key={index} className={style.footerInfoRightTag}>
                                                        <Link to={'/forum/homepage/' +  forumList.forumId} key={forumList.forumId} >
                                                        {forumList.forumName}
                                                        </Link>
                                                    </span>
                                                )
                                            })
                                            :
                                            null
                                    }

                                </div>
                            </div>
                            <div className={style.footerCount}>
                                <div className={style.footerCountLeft}>
                                    <img className={style.footerCountLeftLikeIcon}
                                         onClick={this.handleClickLikeTopic.bind(this)}
                                         src={this.state.topic.topicUserIsLike ? require('../../image/like-active.png') : require('../../image/like.png')}
                                         alt=''/>
                                    <div className={style.footerCountLeftLikeIconNumber}>{this.state.topic.topicCountLike}</div>
                                </div>
                                <Link to={'/topic/like/' + this.state.topic.topicId} className={style.footerCountCenter}>
                                    {
                                        this.state.topic && this.state.topic.topicUserLikeList &&  this.state.topic.topicUserLikeList.length > 0?
                                            this.state.topic.topicUserLikeList.map(function (userLike, index) {
                                                return (
                                                    <img key={index} className={style.footerCountLeftAvatarIcon} src={constant.image_host + userLike.userAvatar} alt=''/>
                                                )
                                            })
                                            :
                                            null
                                    }
                                </Link>
                                <div className={style.footerCountRight}>
                                    <img className={style.footerCountRightBookmarkIcon}
                                         onClick={this.handleBookmarkTopic.bind(this)}
                                         src={this.state.topic.topicUserIsBookmark ? require('../../image/bookmark-acitve.png') : require('../../image/bookmark.png')}
                                         alt=''/>
                                    <span className={style.footerCountRightBookmarkNumber}>{this.state.topic.topicCountBookmark}</span>
                                    <img className={style.footerCountRightCommentIcon}
                                         src={require('../../image/comment.png')}
                                         onClick={this.handleCommentTopic.bind(this)}
                                         alt=''/>
                                    <span className={style.footerCountRightCommentNumber}>{this.state.topic.topicCountComment} </span>
                                </div>
                            </div>
                        </div>
                        <div className={style.line2} onClick={this.handleCancelReply.bind(this)}></div>
                        <div className={style.content}>
                            {
                                this.state.topicCommentList.map(function (comment, index) {
                                    return (
                                        <div key={index}
                                             onClick={this.handleChooseReply.bind(this, comment.userId, comment.userNickName, comment.topicCommentId)}
                                             className={classNames(style.comment, baseStyle.maxWidthWithPadding, index > 0 ? baseStyle.marginTop : '')}>
                                            <div className={style.commentLeft}>
                                                <Link to={comment.topicCommentIsSelf? '/my/publish'  : '/member/homepage/' + comment.userId}>
                                                {
                                                    comment.userAvatar && comment.userAvatar?
                                                            <img className={style.commentLeftImage}
                                                                 src={constant.image_host + comment.userAvatar} alt=''/>
                                                        :
                                                            <img className={style.commentLeftImage}
                                                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/38/h/38'
                                                                 alt=''/>
                                                }
                                                </Link>
                                            </div>
                                            <div className={classNames(style.commentRight, baseStyle.bottomLine)}>
                                                <div className={style.commentRightLike}>
                                                    <div className={style.commentRightLikeContent}>
                                                        <img className={style.commentRightLikeIcon}
                                                             onClick={this.handleClickLikeComment.bind(this, index)}
                                                             src={comment.topicCommentIsLike ? require('../../image/like-active.png') : require('../../image/like.png') }
                                                             alt=''/>
                                                        <span className={style.commentRightLikeText}>{comment.topicCommentLikeCount}</span>
                                                    </div>
                                                </div>
                                                <Link to={comment.topicCommentIsSelf? '/my/publish'  : '/member/homepage/' + comment.userId} key={comment.userId}>
                                                    <div className={style.commentRightName}>{comment.userNickName}</div>
                                                </Link>
                                                <div
                                                    className={style.commentRightName}>{moment(comment.systemCreateTime).fromNow()}</div>
                                                {
                                                    comment.topicReplayUserId ?
                                                        <div className={style.commentRightContent}>
                                                            回复
                                                            <span className={style.commentRightContentWho}>{" " + comment.topicReplayUserNickName}</span>: {comment.topicCommentContent}
                                                        </div>
                                                        :
                                                        <div className={style.commentRightContent}>
                                                            {comment.topicCommentContent}
                                                        </div>
                                                }
                                            </div>
                                        </div>
                                    )
                                }.bind(this))
                            }
                        </div>
                        <div className={classNames(style.feedback, baseStyle.topLine)}>
                            <div className={style.feedbackContent}>
                                <div className={style.feedbackContentLeft}>
                                    {
                                        this.state.topic.requestUser && this.state.topic.requestUser.userAvatar && this.state.topic.requestUser.userAvatar.filePath ?
                                            <img className={style.feedbackContentLeftImage} src={constant.image_host + this.state.topic.requestUser.userAvatar.filePath} alt=''/>
                                            :
                                            <img className={style.feedbackContentLeftImage} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/28/h/28' alt=''/>
                                    }
                                </div>
                                <div className={style.feedbackContentCenter}>
                                    <input
                                        className={style.feedbackContentCenterInput} {...getFieldProps('topicCommentContent', {
                                            rules: [{
                                                required: true,
                                                message: '评论内容不能为空'
                                            }],
                                            initialValue: ''
                                        })} type="text"
                                            ref={el => this.customFocusInst = el}
                                            placeholder={this.state.placeholder}
                                    >

                                    </input>
                                </div>
                                <div className={style.feedbackContentRight}>
                                    <div className={style.feedbackContentRightSend} onClick={this.handleSubmit.bind(this)}>提交
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        );
    }
}

Detail = createForm({})(Detail);

export default connect(() => ({}))(Detail);
