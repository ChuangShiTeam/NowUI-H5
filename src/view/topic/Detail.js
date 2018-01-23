import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import {Link} from 'react-router';
import Notification from "rc-notification";
import moment from 'moment';

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
            isLike: false
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
        //假数据start
        // let topicId = '029b48ea1edc4138b9875c63606e24e7';
        //假数据end
        let topicId = this.props.params.topicId;
        console.log('详情页的id'+ topicId)
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
                    console.log(this.state.topic)
                }.bind(this),
                complete: function () {

                }
            });
        }
    }

    handleClickLikeTopic() {
        http.request({
            url: this.state.topic.topicUserIsLike? '/topic/user/unlike/mobile/v1/save' : '/topic/user/like/mobile/v1/save',
            data: {
                topicId: this.state.topic.topicId
            },
            success: function (data) {
                if (data) {
                    let topic = this.state.topic;
                    topic.topicUserIsLike = !topic.topicUserIsLike;
                    if (topic.topicUserIsLike) {
                        topic.topicCountLike = topic.topicCountLike + 1;
                    } else {
                        topic.topicCountLike = topic.topicCountLike - 1;
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

            console.log(values);
        });
    }

    render() {
        const {getFieldProps} = this.props.form;

        return (
            <div className={classNames(style.page, baseStyle.page)} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerLeft}>
                        {
                            this.state.topic.userId && this.state.topic.userId.userAvatar ?
                                <img src={constant.image_host + this.state.topic.userId.userAvatar} alt=''/>
                                :
                                <img className={style.headerLeftImage} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/28/h/28' alt=''/>
                        }

                    </div>
                    <div className={style.headerCenter}>
                        <p className={style.headerCenterName}>{this.state.topic.userId && this.state.topic.userId.userNickName ?this.state.topic.userId.userNickName : '用户昵称为null'}</p>
                        <p className={style.headerCenterTime}> {moment(this.state.topic.systemCreateTime).fromNow()}</p>
                    </div>
                    <div className={style.headerRight}></div>
                </div>
                <div className={style.line}></div>
                <div className={style.content}>
                    {
                        this.state.topic && this.state.topic.topicMediaList ?
                            this.state.topic.topicMediaList.map(function (mediaList,index){
                                return (
                                    <div key={mediaList.topicMedia.fileId}>
                                    <img src={constant.image_host + mediaList.topicMedia.filePath} alt=''/>
                                    </div>
                                )
                            })
                            :
                            null
                    }

                </div>
                <div className={style.footer}>
                    <div className={classNames(style.footerText, baseStyle.bottomLine)}>
                        {
                            this.state.topic.topicSummary
                        }
                    </div>
                    <div className={style.footerInfo}>
                        <div className={style.footerInfoLeft}>
                            <img className={style.footerInfoLeftLocationIcon} src={require('../../image/location.png')} alt=''/>
                            <span className={style.footerInfoLeftLocationText}>
                            {
                                this.state.topic.topicLocation
                            }
                            </span>
                        </div>
                        <div className={style.footerInfoRight}>
                            <span className={style.footerInfoRightFrom}>来自</span>
                            {
                                this.state.topic && this.state.topic.topicMediaList ?
                                    this.state.topic.topicForumList.map(function (forumList,index){
                                        return (
                                            <span key={forumList.forumId} className={style.footerInfoRightTag}>{forumList.forumName}</span>
                                        )
                                    })
                                    :
                                    null
                            }

                        </div>
                    </div>
                    <div className={style.footerCount}>
                        <div className={style.footerCountLeft}>
                            <img className={style.footerCountLeftLikeIcon} onClick={this.handleClickLikeTopic.bind(this)} src={this.state.topic.topicUserIsLike ? require('../../image/like-active.png') : require('../../image/like.png')} alt=''/>
                            <div className={style.footerCountLeftLikeIconNumber}>{this.state.topic.topicCountLike }</div>
                        </div>
                        <Link to={'/topic/like/' + this.state.topic.topicId }  className={style.footerCountCenter}>
                            {
                                this.state.topic && this.state.topic.topicUserLikeList ?
                                    this.state.topic.topicUserLikeList.map(function (userLikeList,index){
                                        return (
                                        <img className={style.footerCountLeftAvatarIcon} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/255' alt=''/>
                                        )
                                    })
                                    :
                                    <img className={style.footerCountLeftAvatarIcon} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/255' alt=''/>

                            }
                            <img className={style.footerCountLeftAvatarIcon} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/255' alt=''/>
                        </Link>
                        <div className={style.footerCountRight}>
                            <img className={style.footerCountRightBookmarkIcon} src={this.state.topic.topicUserIsBookmark ? require('../../image/bookmark.png') : require('../../image/bookmark-acitve.png')} alt=''/>
                            <span className={style.footerCountRightBookmarkNumber}>{this.state.topic.topicCountBookmark }</span>
                            <img className={style.footerCountRightCommentIcon} src={require('../../image/comment.png')} alt=''/>
                            <span className={style.footerCountRightCommentNumber}>{this.state.topic.topicCountComment } </span>
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
                <div className={classNames(style.feedback, baseStyle.topLine)}>
                    <div className={style.feedbackContent}>
                        <div className={style.feedbackContentLeft}>
                            <img className={style.feedbackContentLeftImage} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/28/h/28' alt=''/>
                        </div>
                        <div className={style.feedbackContentCenter}>
                            <input className={style.feedbackContentCenterInput} {...getFieldProps('message', {
                                rules: [{
                                    required: true,
                                    message: '您也要说点什么？'
                                }],
                                initialValue: ''
                            })} type="text" placeholder="我也要说点什么…"/>
                        </div>
                        <div className={style.feedbackContentRight}>
                            <div className={style.feedbackContentRightSend} onClick={this.handleSubmit.bind(this)}>提交</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Detail = createForm({})(Detail);

export default connect(() => ({}))(Detail);
