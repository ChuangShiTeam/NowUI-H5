import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import classNames from 'classnames';
import moment from 'moment';

import constant from '../../common/constant';
import style from './Index.scss';
import baseStyle from '../../css/Base.scss';
import http from "../../common/http";
import topic from "../../router/topic";

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topic: {}
        }
    }

    componentDidMount() {
        this.setState({
            topic: this.props.topic
        });
    }

    componentWillUnmount() {

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

    handleClickBookmarkTopic() {
        http.request({
            url: this.state.topic.topicUserIsBookmark? '/topic/user/unbookmark/mobile/v1/save' : '/topic/user/bookmark/mobile/v1/save',
            data: {
                topicId: this.state.topic.topicId
            },
            success: function (data) {
                if (data) {
                    let topic = this.state.topic;
                    topic.topicUserIsBookmark = !topic.topicUserIsBookmark;
                    if (topic.topicUserIsBookmark) {
                        topic.topicCountBookmark = topic.topicCountBookmark + 1;
                    } else {
                        topic.topicCountBookmark = topic.topicCountBookmark - 1;
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

    render() {
        return (
            <div className={baseStyle.page}>
                {
                    this.state.topic && this.state.topic.topicId ?
                        <div>
                            <div className={style.header}>
                                <div className={style.headerLeft}>
                                    <Link to={'/member/homepage/' +  this.state.topic.userId} key={this.state.topic.userId} >
                                    {
                                        this.state.topic.userAvatar ?
                                            <img className={style.headerLeftImage} src={constant.image_host + this.state.topic.userAvatar} alt=''/>
                                            :
                                            <img className={style.headerLeftImage} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/28/h/28' alt=''/>

                                    }
                                    </Link>
                                </div>
                                <div className={style.headerCenter}>
                                    <Link to={'/member/homepage/' +  this.state.topic.userId} key={this.state.topic.userId} >
                                    {
                                        this.state.topic.userNickName ?
                                            <p className={style.headerCenterName}>{this.state.topic.userNickName}</p>
                                            :
                                            <p className={style.headerCenterName}>null</p>
                                    }
                                    </Link>
                                    <p className={style.headerCenterTime}>{moment(this.state.topic.systemCreateTime).fromNow()}</p>
                                </div>
                                <div className={style.headerRight}></div>
                            </div>
                            <Link to={"/topic/detail/" + this.state.topic.topicId } className={style.content}>
                            {
                                    this.state.topic.topicMediaList && this.state.topic.topicMediaList.length > 0 ?
                                        this.state.topic.topicMediaList.map(
                                            (mediaList, index) => <img className={style.contentImage} src={constant.image_host + mediaList.topicMedia.filePath} alt='' key={index}/>
                                        )
                                        :
                                        null
                                }
                            </Link>
                            <div className={style.footer}>
                                <Link to={"/topic/detail/" + this.state.topic.topicId } className={style.content}>
                                <div className={classNames(style.footerText, baseStyle.bottomLine)}>
                                    {this.state.topic.topicSummary}
                                </div>
                                </Link>
                                <div className={style.footerInfo}>
                                    <div className={style.footerInfoCount}>
                                        <div className={style.footerInfoCountLike}>
                                            <img className={style.footerInfoCountLikeIcon} src={this.state.topic.topicUserIsLike ? require('../../image/like-active.png') : require('../../image/like.png') } alt='' onClick={this.handleClickLikeTopic.bind(this)}/>
                                            <span className={style.footerInfoCountLikeNumber}>{this.state.topic.topicCountLike}</span>
                                        </div>
                                        <div className={style.footerInfoCountBookmark}>
                                            <img className={style.footerInfoCountBookmarkIcon} src={this.state.topic.topicUserIsBookmark ? require('../../image/bookmark-acitve.png') : require('../../image/bookmark.png') } alt='' onClick={this.handleClickBookmarkTopic.bind(this)}/>
                                            <span className={style.footerInfoCountBookmarkNumber}>{this.state.topic.topicCountBookmark}</span>
                                        </div>
                                        <div className={style.footerInfoCountComment}>
                                            <img className={style.footerInfoCountCommentIcon} src={require('../../image/comment.png')} alt=''/>
                                            <span className={style.footerInfoCountCommentNumber}>{this.state.topic.topicCountComment}</span>
                                        </div>
                                    </div>
                                    <span className={style.footerInfoFrom}>同步到</span>
                                    {
                                        this.state.topic.topicForumList && this.state.topic.topicForumList.length > 0 ?
                                            this.state.topic.topicForumList.map(
                                                (forum, index) =>
                                                    <span className={style.footerInfoTag} key={index}>
                                                        <Link to={'/forum/homepage/' +  forum.forumId} key={forum.forumId} >
                                                        {forum.forumName}
                                                        </Link>
                                                    </span>
                                            )
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            <div className={style.line}></div>
                        </div>
                        :
                        null
                }

            </div>
        );
    }
}

Index.propTypes = {
    topic: PropTypes.object.isRequired
};

export default Index;
