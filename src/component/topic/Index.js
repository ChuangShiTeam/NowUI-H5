import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import classNames from 'classnames';
import moment from 'moment';
import Notification from 'rc-notification';
import Modal from 'antd-mobile/lib/modal';
import constant from '../../common/constant';
import style from './Index.scss';
import baseStyle from '../../css/Base.scss';
import http from "../../common/http";
import ActionSheet from 'antd-mobile/lib/action-sheet'
const alert = Modal.alert;
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

let notification = null;
Notification.newInstance({}, (n) => notification = n);
class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topic: {}
        }
    }
    handleClose(){
        const BUTTONS = ['我对这条不感兴趣', '举报这条动态', '举报该用户', '取消'];
        ActionSheet.showActionSheetWithOptions({
                options: BUTTONS,
                cancelButtonIndex: BUTTONS.length - 1,
                destructiveButtonIndex: BUTTONS.length - 2,
                // title: 'title',
                maskClosable: true,
                'data-seed': 'logId',
                wrapProps,
            },
            (buttonIndex) => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
            });

    }
    
    componentDidMount() {
        this.setState({
            topic: this.props.topic
        }, function () {

        });

        setTimeout(() => {
            let topicImage = document.querySelector('#image' + this.props.topic.topicId);

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

    componentWillUnmount() {

    }

    handleClickLikeTopic() {
        http.request({
            url: this.state.topic.topicUserIsLike ? '/topic/user/unlike/mobile/v1/save' : '/topic/user/like/mobile/v1/save',
            data: {
                topicId: this.state.topic.topicId
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

    handleFollow() {
        http.request({
            url: '/member/follow/mobile/v1/save',
            data: {
                followUserId: this.state.topic.userId
            },
            success: function (data) {
                notification.notice({
                    content: '关注成功'
                });
                let topic = this.state.topic;
                this.setState({
                    topic: topic
                })
            }.bind(this),
            complete: function () {

            }
        })
    }

    handleDelete() {
        alert(null, '确定删除么', [
            { text: '删除', onPress: () => console.log('cancel'), style: 'default' },
            { text: '取消', onPress: () => console.log('ok') },
        ]);
        http.request({
            url: '/topic/mobile/v1/delete',
            data: {
                topicId: this.state.topic.topicId
            },
            success: function (data) {
                notification.notice({
                    content: '删除成功'
                });
                this.props.handelTopicDelete();
            }.bind(this),
            complete: function () {

            }
        })

    }
    render() {
        let clientWidth = document.documentElement.clientWidth > 640 ? 640 : document.documentElement.clientWidth;
        let width;
        let height;
        let divHeight = 0;

        if (this.state.topic.topicMediaList) {
            switch (this.state.topic.topicMediaList.length) {
                case 1:
                    divHeight = clientWidth / 320 * 255;
                    break;
                case 2:
                    divHeight = (clientWidth - 2) / 2 / 158 * 175;
                    break;
                case 3:
                    divHeight = (clientWidth - 2) / 3 * 2;
                    break;
                case 4:
                    divHeight = clientWidth;
                    break;
                case 5:
                    divHeight = (clientWidth - 2) / 2 + (clientWidth - 4) / 3;
                    break;
                case 6:
                    divHeight = clientWidth;
                    break;
                case 7:
                    divHeight = clientWidth;
                    break;
                case 8:
                    divHeight = clientWidth;
                    break;
                case 9:
                    divHeight = clientWidth;
                    break;
                default:

            }
        }

        return (
            <div className={baseStyle.page}>
                {
                    this.state.topic && this.state.topic.topicId ?
                        <div>
                            <div className={style.header}>
                                <div className={style.headerLeft}>
                                    <Link className={style.headerLeftImage} to={this.state.topic.topicIsSelf ?'/my/publish'  : '/member/homepage/' +  this.state.topic.userId} key={this.state.topic.userId} >
                                    {
                                        this.state.topic.userAvatar && this.state.topic.userAvatar.filePath ?
                                            <img className={style.headerLeftImage} src={constant.image_host + this.state.topic.userAvatar.filePath} alt=''/>
                                            :
                                            <img className={style.headerLeftImage} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/28/h/28' alt=''/>

                                    }
                                    </Link>
                                </div>
                                <div className={style.headerCenter}>
                                    <Link className={style.headerLeftImage} to={this.state.topic.topicIsSelf ?'/my/publish'  : '/member/homepage/' +  this.state.topic.userId} key={this.state.topic.userId} >
                                    {
                                        this.state.topic.userNickName ?
                                            <p className={style.headerCenterName}>{this.state.topic.userNickName}</p>
                                            :
                                            <p className={style.headerCenterName}>null</p>
                                    }
                                    </Link>
                                    <p className={style.headerCenterTime}>{moment(this.state.topic.systemCreateTime).fromNow()}</p>
                                </div>
                                {
                                    this.props.isEdit ?
                                        <div className={style.headerRight}>
                                            {
                                                this.state.topic.topicIsSelf ?
                                                    <span className={style.headerRightDelete} onClick={this.handleDelete.bind(this)}>删除</span>
                                                    :
                                                    this.state.topic.memberIsFollow ?
                                                        <div className={style.headerRightFollow}>已关注</div>
                                                        :
                                                        <div className={style.headerRightNotFollow} onClick={this.handleFollow.bind(this)}><span className={style.headerRightFollowAdd}>+</span> 关注</div>
                                            }
                                        </div>
                                        :
                                        null
                                }
                                <div className={style.closes} onClick={this.handleClose.bind()}>
                                    <img className={style.closesImg} src={require("../../image/close.png")} alt=""/></div>
                            </div>
                            <div id={'image' + this.props.topic.topicId} className={classNames(style.image)} style={{height: divHeight}}>
                                {
                                    this.state.topic.topicMediaList ?
                                        this.state.topic.topicMediaList.map((image, index) => {
                                            switch (this.state.topic.topicMediaList.length) {
                                                case 1:
                                                    width = clientWidth;
                                                    height = width / 320 * 255;

                                                    return (
                                                        <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                            top: 0 + 'px',
                                                            left: 0 + 'px',
                                                            width: document.documentElement.clientWidth,
                                                            height: document.documentElement.clientWidth / 320 * 255,
                                                            backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                        }}>
                                                            <div className={style.footerInfoLeft}>
                                                                <img className={style.footerInfoLeftLocationIcon} src={require('../../image/location.png')}
                                                                     alt=''/>
                                                                <div>
                                                                    <div className={style.footerInfoLeftLocationTextLeft}></div>
                                                                    <span className={style.footerInfoLeftLocationText}>上海</span>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    );
                                                case 2:
                                                    width = (clientWidth - 2) / 2;
                                                    height = width / 158 * 175;

                                                    switch (index) {
                                                        case 0:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    left: 0 + 'px',
                                                                    width: width,
                                                                    height: height,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 1:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: width,
                                                                    height: height,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        default:
                                                            return '';
                                                    }
                                                case 3:
                                                    width = (clientWidth - 2) / 3;
                                                    height = width;

                                                    switch (index) {
                                                        case 0:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    left: 0 + 'px',
                                                                    width: width * 2,
                                                                    height: height * 2 + 2,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 1:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: width,
                                                                    height: height,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 2:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: height + 2 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: width,
                                                                    height: height,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        default:
                                                            return '';
                                                    }
                                                case 4:
                                                    width = (clientWidth - 2) / 2;
                                                    height = width;

                                                    switch (index) {
                                                        case 0:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    left: 0 + 'px',
                                                                    width: width,
                                                                    height: height,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 1:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: width,
                                                                    height: height,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 2:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: height + 2 + 'px',
                                                                    left: 0 + 'px',
                                                                    width: width,
                                                                    height: height,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 3:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: height + 2 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: width,
                                                                    height: height,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        default:
                                                            return '';
                                                    }
                                                case 5:
                                                    switch (index) {
                                                        case 0:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    left: 0 + 'px',
                                                                    width: (clientWidth - 2) / 2,
                                                                    height: (clientWidth - 2) / 2,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 1:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: (clientWidth - 2) / 2,
                                                                    height: (clientWidth - 2) / 2,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 2:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 2) / 2 + 2 + 'px',
                                                                    left: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 3:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 2) / 2 + 2 + 'px',
                                                                    left: (clientWidth - 4) / 3 + 2 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 4:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 2) / 2 + 2 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        default:
                                                            return '';
                                                    }
                                                case 6:
                                                    switch (index) {
                                                        case 0:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    left: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3 * 2 + 2,
                                                                    height: (clientWidth - 4) / 3 * 2 + 2,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 1:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: (clientWidth - 2) / 3,
                                                                    height: (clientWidth - 2) / 3 - 1,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 2:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 2) / 3 + 1 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: (clientWidth - 2) / 3,
                                                                    height: (clientWidth - 2) / 3 - 1,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 3:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 * 2 + 4 + 'px',
                                                                    left: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 4:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 * 2 + 4 + 'px',
                                                                    left: (clientWidth - 4) / 3 + 2 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 5:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 * 2 + 4 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        default:
                                                            return '';
                                                    }
                                                case 7:
                                                    switch (index) {
                                                        case 0:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    left: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3 * 2 + 2,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 1:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    left: (clientWidth - 4) / 3 + 2 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3 * 2 + 2,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 2:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 3:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 + 2 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 4:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 * 2 + 4 + 'px',
                                                                    left: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 5:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 * 2 + 4 + 'px',
                                                                    left: (clientWidth - 4) / 3 + 2 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 6:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 * 2 + 4 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        default:
                                                            return '';
                                                    }
                                                case 8:
                                                    switch (index) {
                                                        case 0:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    left: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3 * 2 + 2,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 1:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 2:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 + 2 + 'px',
                                                                    left: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 3:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 + 2 + 'px',
                                                                    left: (clientWidth - 4) / 3 + 2 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 4:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 + 2 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 5:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 * 2 + 4 + 'px',
                                                                    left: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 6:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 * 2 + 4 + 'px',
                                                                    left: (clientWidth - 4) / 3 + 2 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 7:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 * 2 + 4 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        default:
                                                            return '';
                                                    }
                                                case 9:
                                                    switch (index) {
                                                        case 0:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    left: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 1:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    left: (clientWidth - 4) / 3 + 2 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 2:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: 0 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 3:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 + 2 + 'px',
                                                                    left: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 4:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 + 2 + 'px',
                                                                    left: (clientWidth - 4) / 3 + 2 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 5:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 + 2 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 6:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 * 2 + 4 + 'px',
                                                                    left: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 7:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 * 2 + 4 + 'px',
                                                                    left: (clientWidth - 4) / 3 + 2 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        case 8:
                                                            return (
                                                                <div key={index} className={classNames(style.imageItem, 'imageItem')} style={{
                                                                    top: (clientWidth - 4) / 3 * 2 + 4 + 'px',
                                                                    right: 0 + 'px',
                                                                    width: (clientWidth - 4) / 3,
                                                                    height: (clientWidth - 4) / 3,
                                                                    backgroundImage: 'url(' + constant.image_host + image.topicMedia.filePath + ')'
                                                                }}></div>
                                                            );
                                                        default:
                                                            return '';
                                                    }
                                                default:
                                                    return '';
                                            }
                                        })
                                        :
                                        null
                                }
                            </div>
                            <div className={style.footer}>
                                <Link to={"/topic/detail/" + this.state.topic.topicId} className={style.content}>
                                <div className={classNames(style.footerText, baseStyle.bottomLine)}>
                                        <div className={style.footerTextLeft}>{this.state.topic.topicSummary}</div>
                                        <div className={style.footerTextRight}>
                                            <span className={style.footerTextRightText}>@Lin</span>
                                            <span className={style.footerTextRightText}>@Nami</span>
                                        </div>
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
                                            <Link to={"/topic/detail/" + this.state.topic.topicId} className={style.content}>
                                            <img className={style.footerInfoCountCommentIcon} src={require('../../image/comment.png')} alt=''/>
                                            <span className={style.footerInfoCountCommentNumber}>{this.state.topic.topicCountComment}</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <span className={style.footerInfoFrom}>同步到</span>
                                    {
                                        this.state.topic.topicForumList && this.state.topic.topicForumList.length > 0 ?
                                            this.state.topic.topicForumList.map(
                                                (forum, index) =>
                                                    <span className={style.footerInfoTag} key={index}>
                                                        <Link to={'/forum/homepage/' + forum.forumId} key={forum.forumId} >
                                                        {forum.forumName}
                                                        </Link>
                                                    </span>
                                            )
                                            :
                                            null
                                    }
                                </div>
                                {
                                    this.props.topic.topicCommentList && this.props.topic.topicCommentList.length > 0 ?
                                        <div className={style.footerInfoBottom}>
                                            {
                                                this.props.topic.topicCommentList.map((topicComment, index) => {
                                                    return (
                                                        <div className={(index === (this.props.topic.topicCommentList.length - 1)) ? classNames(style.footerInfoBottomList, style.footerInfoBottomListMargin) : style.footerInfoBottomList} key={index}>
                                                            <span className={style.footerInfoBottomName}>{topicComment.userNickName}</span>
                                                            {
                                                                topicComment.topicReplayUserId ?
                                                                    <span>
                                                                        <span className={classNames(style.footerInfoBottomContent,style.footerInfoBottomContentReply)}>  回复  </span>
                                                                        <span className={style.footerInfoBottomName}>{topicComment.topicReplayUserNickName}</span>
                                                                    </span>
                                                                    : null
                                                            }
                                                            <span className={style.footerInfoBottomContent}>：{topicComment.topicCommentContent}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        :
                                        null
                                }
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
    topic: PropTypes.object.isRequired,
    isEdit: PropTypes.bool,
    handelTopicDelete: PropTypes.func
};

Index.defaultProps = {
    isEdit: false
};
export default Index;
