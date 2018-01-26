import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import Notification from 'rc-notification';
import classNames from 'classnames';

import util from '../../common/util';
import http from '../../common/http';
import ImageUpload from '../../component/upload/ImageUpload';

import style from './Hot.scss';
import baseStyle from '../../css/Base.scss';

let notification = null;
Notification.newInstance({}, (n) => notification = n);
class Add extends Component {
    constructor(props){
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

            values.forumMedia = '';
            values.forumMediaType = 'IMAGE';
            let forumMedia = this.refs.forumMedia.handleGetValue();
            if (forumMedia.length > 0) {
                values.forumMedia = forumMedia[0].fileId
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
            <div className={style.page} style={{height: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        创建圈子
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.upload}>
                        <div className={style.uploadLeft}>上传圈子照片</div>
                        <ImageUpload name="forumMedia" ref="forumMedia" limit={1}/>
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
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={baseStyle.listLeft}>圈子简介</div>
                        <div className={style.listItemCenter}>
                            <input className={style.listItemCenterInput} {...getFieldProps('forumDescription', {
                                rules: [{
                                    required: true,
                                    message: '圈子简介不能为空'
                                }],
                                initialValue: ''
                            })} type="text" placeholder="请输入超过255个字符的圈子简介"/>
                        </div>
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
