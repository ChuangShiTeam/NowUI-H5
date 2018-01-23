import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {createForm} from "rc-form";
import Notification from "rc-notification";
import classNames from "classnames";

import ImageUpload from '../../component/upload/ImageUpload';

import http from "../../common/http";
import util from '../../common/util';

import style from './Add.scss';
import baseStyle from '../../css/Base.scss';
import constant from "../../common/constant";


let notification = null;
Notification.newInstance({}, (n) => notification = n);

class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        this.props.dispatch({
            type: 'topicAdd',
            data: {
                forumList: [{
                    id: 1,
                    selected: false
                }, {
                    id: 2,
                    selected: false
                }, {
                    id: 3,
                    selected: false
                }, {
                    id: 4,
                    selected: false
                }]
            }
        });
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

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

            console.log(values);
            return;

            values.topicMediaList = '';
            values.topicMediaType = 'IMAGE';

            //假数据start
            values.longtitude = '121.42818';
            values.latitude = '31.202601';
            values.topicLocation = '上海市徐汇区慧谷创业园';
            values.topicIsLocation = true;
            values.topicForumList = ["6a5b2b71b3cf47b0b9b363ccdfa0e20b", "403d31aef86c4599b1a6c7646ae2842a"];
            values.topicTipUserList = ["3bdfcbb00f90415989fb53e6677c25df"];

            //假数据end

            let topicMedia = this.refs.topicMedia.handleGetValue();
            console.log(topicMedia)
            if (topicMedia.length > 0) {
                values.topicMediaList = topicMedia.map((topicMedia, index) => {
                    return {
                        topicMedia: topicMedia.fileId,
                        topicMediaType: 'IMAGE',
                        topicMediaSort: index + 1
                    }
                });


                console.log("values.topicMediaList=" + values.topicMediaList)
            }
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
                    console.log('..')
                }
            });

        });
    }

    handleSelectForum(index) {
        let forumList = this.props.topicAdd.forumList;
        let forum = forumList[index];
        forum.selected = !forum.selected;
        forumList[index] = forum;

        this.props.dispatch({
            type: 'topicAdd',
            data: {
                forumList: forumList
            }
        });
    }

    handleSelectAllForum(result) {
        let forumList = this.props.topicAdd.forumList;
        for (let i = 0; i < forumList.length; i++) {
            forumList[i].selected = result;
        }

        this.props.dispatch({
            type: 'topicAdd',
            data: {
                forumList: forumList
            }
        });
    }

    render() {
        const {getFieldProps} = this.props.form;

        return (
            <div className={style.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.content}>
                    <div className={style.upload}>
                        <ImageUpload {...getFieldProps('forumMedia', {
                            initialValue: []
                        })} name="forumMedia" ref="forumMedia" limit={9}/>
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
                            <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                                所在位置
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
                            <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                                提醒谁看
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
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            添加标签
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
                        this.props.topicAdd.forumList.map(function (forum, index) {
                            return (
                                <span key={index} className={forum.selected ? style.forumContentItemActive : style.forumContentItem} onClick={this.handleSelectForum.bind(this, index)}>加菲猫</span>
                            )
                        }.bind(this))
                    }
                </div>
                <div className={style.forumSubmit} onClick={this.handleAddTopic.bind(this)}>
                    <div className={style.forumSubmitButton}>发送</div>
                </div>
                <div className={style.forumSelect}>
                    <div className={style.forumSelectAll} onClick={this.handleSelectAllForum.bind(this, true)}>全选</div>
                    <div className={style.forumUnSelectAll} onClick={this.handleSelectAllForum.bind(this, false)}>全不选</div>
                </div>
            </div>
        );
    }
}

Add = createForm({})(Add);

export default connect((store) => ({
    topicAdd: store.topicAdd
}))(Add);
