import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import classNames from 'classnames';
import moment from 'moment';

import constant from '../../common/constant';
import style from './Index.scss';
import baseStyle from '../../css/Base.scss';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.props.topic)
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className={baseStyle.page}>
                {
                    this.props.topic && this.props.topic.topicId ?
                        <div>
                            <div className={style.header}>
                                <div className={style.headerLeft}>
                                    {
                                        this.props.topic.userAvatar ?
                                            <img className={style.headerLeftImage} src={constant.image_host + this.props.topic.userAvatar} alt=''/>
                                            :
                                            <img className={style.headerLeftImage} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/28/h/28' alt=''/>

                                    }
                                </div>
                                <div className={style.headerCenter}>
                                    <p className={style.headerCenterName}>{this.props.topic.userNickName}</p>
                                    <p className={style.headerCenterTime}>{moment(this.props.topic.systemCreateTime).fromNow()}</p>
                                </div>
                                <div className={style.headerRight}></div>
                            </div>
                                {
                                    this.props.topic.topicMediaList && this.props.topic.topicMediaList.length > 0 ?
                                        this.props.topic.topicMediaList.map(
                                            (mediaList, index) => <img className={style.contentImage} src={constant.image_host + mediaList.topicMedia.filePath} alt='' key={index}/>
                                        )
                                        :
                                        null
                                }
                            <div className={style.footer}>
                                <Link to={"/topic/detail/" + this.props.topic.topicId } className={style.content}>
                                <div className={classNames(style.footerText, baseStyle.bottomLine)}>
                                    {this.props.topic.topicSummary}
                                </div>
                                </Link>
                                <div className={style.footerInfo}>
                                    <div className={style.footerInfoCount}>
                                        <div className={style.footerInfoCountLike}>
                                            <img className={style.footerInfoCountLikeIcon} src={this.props.topic.topicUserIsLike ? require('../../image/like-active.png'): require('../../image/like.png') } alt=''/>
                                            <span className={style.footerInfoCountLikeNumber}>{this.props.topic.topicCountLike}</span>
                                        </div>
                                        <div className={style.footerInfoCountBookmark}>
                                            <img className={style.footerInfoCountBookmarkIcon} src={this.props.topic.topicUserIsBookmark ? require('../../image/bookmark-acitve.png'):require('../../image/bookmark.png')  } alt=''/>
                                            <span className={style.footerInfoCountBookmarkNumber}>{this.props.topic.topicCountBookmark}</span>
                                        </div>
                                        <div className={style.footerInfoCountComment}>
                                            <img className={style.footerInfoCountCommentIcon} src={require('../../image/comment.png')} alt=''/>
                                            <span className={style.footerInfoCountCommentNumber}>{this.props.topic.topicCountComment}</span>
                                        </div>
                                    </div>
                                    <span className={style.footerInfoFrom}>同步到</span>
                                    {
                                        this.props.topic.topicForumList && this.props.topic.topicForumList.length > 0 ?
                                            this.props.topic.topicForumList.map(
                                                (forum, index) => <span className={style.footerInfoTag} key={index}>{forum.forumName}</span>
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
