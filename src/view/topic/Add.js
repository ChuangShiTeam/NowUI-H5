import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {createForm} from "rc-form";
import Notification from "rc-notification";
import classNames from "classnames";

import ImageUpload from '../../component/upload/ImageUpload';

import notificationEvent from '../../common/notification';
import http from "../../common/http";
import util from '../../common/util';

import style from './Add.scss';
import baseStyle from '../../css/Base.scss';


let notification = null;
Notification.newInstance({}, (n) => notification = n);

class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            forumList: []
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        this.hanldeLoadForum();

        notificationEvent.on('notification_location_submit', this, function (data) {
            this.props.dispatch({
                type: 'topicAdd',
                data: {
                    location: data
                }
            });
        });
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {
        notificationEvent.remove('nnotification_location_submit', this);
    }

    hanldeLoadForum() {
        http.request({
            url: '/forum/user/follow/mobile/v1/name/list',
            data: {},
            success: function (data) {
                let forumList = data;
                if (forumList && forumList.length > 0) {
                    forumList = forumList.map(forum => {
                        forum.selected = false;
                        return forum;
                    });
                    this.setState({
                        forumList: forumList
                    })
                }
            }.bind(this),
            complete: function () {
            }
        });
    }

    handleAddTopic() {
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

            values.longtitude = '';
            values.latitude = '';
            values.topicLocation = '';
            values.topicIsLocation = false;
            let location = this.props.topicAdd.location;
            if (location && location.module === 'locationPicker') {
                values.longtitude = location.latlng.lng + "";
                values.latitude = location.latlng.lat + "";
                values.topicLocation = location.poiaddress;
                values.topicIsLocation = true;
            }

            values.topicForumList = this.state.forumList.filter(forum => forum.selected).map(forum => forum.forumId);
            values.topicTipUserList = this.props.topicAdd.topicTipUserList;

            values.topicMediaList = values.topicMedia.map((topicMedia, index) => {
                return {
                    topicMedia: topicMedia.fileId,
                    topicMediaType: 'IMAGE',
                    topicMediaSort: index + 1
                }
            });

            delete values.topicMedia;
            http.request({
                url: '/topic/mobile/v1/save',
                data: values,
                success: function (data) {
                    notification.notice({
                        content: '发布成功'
                    });
                    this.props.history.push({
                        pathname: '/topic/index',
                        query: {}
                    });
                }.bind(this),
                complete: function () {

                }
            });
        });
    }

    handleSelectForum(index) {
        let forumList = this.state.forumList;
        let forum = forumList[index];
        forum.selected = !forum.selected;
        forumList[index] = forum;

        this.setState({
            forumList: forumList
        });
    }

    handleSelectAllForum(result) {
        let forumList = this.state.forumList;
        for (let i = 0; i < forumList.length; i++) {
            forumList[i].selected = result;
        }

        this.setState({
            forumList: forumList
        });
    }


    render() {
        const {getFieldProps} = this.props.form;

        return (
            <div className={style.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.content}>
                    <div className={style.upload}>
                        <ImageUpload {...getFieldProps('topicMedia', {
                            initialValue: []
                        })} name="topicMedia" ref="topicMedia" limit={9}/>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={style.content}>
                    <div className={style.summary}>
                        <textarea {...getFieldProps('topicSummary', {
                            rules: [{
                                required: true,
                                message: '内容不能为空'
                            }],
                            initialValue: ''
                        })} className={style.summaryTextarea} rows="8" placeholder="说点什么…"/>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={style.content}>
                    <Link to='/topic/location'>
                        <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                            <div className={style.listLeft}>
                                <img className={style.listLeftLocation} src={require('../../image/topic-location.png')}
                                     alt=''/>
                            </div>
                            <div className={style.listName}>
                                所在位置
                            </div>
                            <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                                {
                                    this.props.topicAdd.location.poiaddress
                                }
                            </div>
                            <div className={style.listRight}>
                                <div className={baseStyle.rightArrow}></div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/topic/remind'>
                        <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                            <div className={style.listLeft}>
                                <img className={style.listLeftRemind} src={require('../../image/remind.png')} alt=''/>
                            </div>
                            <div className={style.listName}>
                                提醒谁看
                            </div>
                            <div className={classNames(style.listCenter, baseStyle.listCenter)}>

                            </div>
                            <div className={style.listRight}>
                                <div className={baseStyle.rightArrow}></div>
                            </div>
                        </div>
                    </Link>
                    <div className={classNames(baseStyle.list)}>
                        <div className={style.listLeft}>
                            <img className={style.listLeftTag} src={require('../../image/tag.png')} alt=''/>
                        </div>
                        <div className={style.listName}>
                            添加标签
                        </div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>

                        </div>
                        <div className={style.listRight}>
                            <div className={baseStyle.rightArrow}></div>
                        </div>
                    </div>
                </div>

                <div className={style.forumHeader}>
                    同步到我的圈子
                </div>
                <div className={style.forumContent}>
                    {
                        this.state.forumList.map(function (forum, index) {
                            return (
                                <span key={index} className={forum.selected ? style.forumContentItemActive : style.forumContentItem} onClick={this.handleSelectForum.bind(this, index)}>{forum.forumName}</span>
                            )
                        }.bind(this))
                    }
                </div>
                <div className={style.forumSubmit}>
                    <div className={style.forumSubmitButton} onClick={this.handleAddTopic.bind(this)}>发送</div>
                </div>
                <div className={style.forumSelect}>
                    <div className={style.forumSelectAll} onClick={this.handleSelectAllForum.bind(this, true)}>全选</div>
                    <div className={style.forumUnSelectAll} onClick={this.handleSelectAllForum.bind(this, false)}>全不选</div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

Add = createForm({})(Add);

export default connect((store) => ({
    topicAdd: store.topicAdd
}))(Add);
