import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import Notification from 'rc-notification';
import classNames from 'classnames';

import Upload from '../../component/upload/Index';

import util from '../../common/util';
import http from '../../common/http';

import style from './Add.scss';
import baseStyle from '../../css/Base.scss';

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
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

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

            values.forumModeratorInfo = {
                userNickName: '谁用了我的头像(测试)',
                userAvatar: '/upload/df2078d6c9eb46babb0df957127273ab/3bdfcbb00f90415989fb53e6677c25df/ae74752bc95c4ed6a9ebbd020d3b4105.jpg',
                memberSignature: '喵咪太可爱了!(签名)'
            }

            values.forumMediaType = 'IMAGE';
            if (values.forumMedia.length > 0) {
                values.forumMedia = values.forumMedia[0].filePath
            }


            http.request({
                url: '/forum/mobile/v1/save',
                data: values,
                success: function (data) {
                    notification.notice({
                        content: '创建成功'
                    });
                    this.props.history.push({
                        pathname: '/forum/index',
                        query: {}
                    });
                }.bind(this),
                complete: function () {

                }
            });

        });
    }

    handClose() {
        this.props.history.push({
            pathname: '/forum/index',
            query: {}
        });
    }

    render() {
        const {getFieldProps} = this.props.form;

        return (
            <div className={style.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        创建圈子
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.upload}>
                        <div className={style.uploadLeft}>上传圈子照片</div>
                        <Upload {...getFieldProps('forumMedia', {
                            initialValue: []
                        })} name="forumMedia" ref="forumMedia" limit={1}/>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={style.content}>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={baseStyle.listLeft}>圈子名称</div>
                        <div className={style.listItemCenter}>
                            <input className={style.listItemCenterInput} {...getFieldProps('forumName', {
                                rules: [{
                                    required: true,
                                    message: '圈子名称不能为空'
                                }],
                                initialValue: ''
                            })} type="text" placeholder="输入不超过25个字符的圈子名称"/>
                        </div>
                    </div>
                    <div className={classNames(baseStyle.list)}>
                        <div className={baseStyle.listLeft}>圈子简介</div>
                    </div>
                    <div className={classNames(style.listItemCenterDescription, baseStyle.bottomLine)}>
                        <textarea className={style.listItemCenterTextarea} {...getFieldProps('forumDescription', {
                            rules: [{
                                required: true,
                                message: '圈子简介不能为空'
                            }],
                            initialValue: ''
                        })} rows="5" placeholder="请输入超过255个字符的圈子简介"/>
                    </div>
                </div>
                <div className={classNames(style.content, style.footer)}>
                    <div className={style.review} onClick={this.handleSubmit.bind(this)}>提交审核</div>
                    <div className={style.close} onClick={this.handClose.bind(this)}>关闭</div>
                </div>
            </div>
        );
    }
}

Add = createForm({})(Add);

export default connect(() => ({}))(Add);
