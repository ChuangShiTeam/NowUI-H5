import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import classNames from 'classnames';
import {Link} from 'react-router';
import Notification from 'rc-notification';

import Upload from '../../component/upload/Index';
import constant from '../../common/constant';
import util from '../../common/util';
import http from '../../common/http';

import style from './Info.scss';
import baseStyle from '../../css/Base.scss';

let notification = null;
Notification.newInstance({}, (n) => notification = n);
class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            isEdit: false,
            member: {

            }
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
        this.props.form.resetFields();
    }

    handleHeaderContentRight(){
        this.setState({
            isEdit: !this.state.isEdit
        }, function () {
            this.props.form.setFieldsValue(this.state.member);
        }.bind(this));

    }

    handleLoad() {
        http.request({
            url: '/wawi/mobile/v1/my/info',
            data: {},
            success: function (data) {
                this.setState({member: data});
            }.bind(this),
            complete: function () {

            }
        });
    }

    handleSave(){
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

            if (values.userAvatar.length > 0) {
                values.userAvatar = values.userAvatar[0].fileId
            }
            http.request({
                url: '/wawi/mobile/v1/my/info/update',
                data: values,
                success: function (data) {
                    notification.notice({
                        content: '修改成功'
                    });
                }.bind(this),
                complete: function () {

                }
            });

        });
    }

    render() {
        const {getFieldProps} = this.props.form;

        return (
            <div className={style.page} style={{height: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        <div className={style.headerContentLeft}>
                        </div>
                        <div className={style.headerContentCenter}>
                            个人资料
                        </div>
                        <div className={style.headerContentRight} onClick={this.handleHeaderContentRight.bind(this)}>
                            <img className={style.headerContentRightEdit}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/18/h/18'
                                 alt=''/>
                        </div>
                    </div>
                </div>
                <div className={style.content}>
                    <div className={classNames(style.image, baseStyle.list)}>
                        <div className={baseStyle.listLeft}>头像</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            {
                                this.state.isEdit ?
                                    <Upload {...getFieldProps('userAvatar', {
                                        initialValue: []
                                    })} name="userAvatar" ref="userAvatar" limit={1}/>
                                    :
                                    <div>
                                        {
                                            this.state.member.userAvatar ?
                                                <img className={style.imageCenterImage}
                                                     src={constant.image_host + this.state.member.userAvatar.filePath}
                                                     alt=''/>
                                                :
                                                <img className={style.imageCenterImage}
                                                     src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/58/h/58'
                                                     alt=''/>
                                        }
                                    </div>
                            }
                        </div>
                        <div className={baseStyle.listRight}>
                        </div>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={style.content}>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={baseStyle.listLeft}>昵称</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            {
                                this.state.isEdit ?
                                    <input  className={style.listItemCenterInput} {...getFieldProps('userNickName', {
                                        rules: [{
                                            required: true,
                                            message: '昵称不能为空'
                                        }],
                                        initialValue: ''
                                    })} type="text" placeholder="请输入昵称"/>
                                    :
                                    this.state.member.userNickName
                            }
                        </div>
                        <div className={baseStyle.listRight}>
                        </div>
                    </div>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={baseStyle.listLeft}>个性签名</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            {
                                this.state.isEdit ?
                                    <input  className={style.listItemCenterInput} {...getFieldProps('memberSignature', {
                                        rules: [{
                                            required: true,
                                            message: '个人签名不能为空'
                                        }],
                                        initialValue: ''
                                    })} type="text" placeholder="请输入个性签名"/>
                                    :
                                    this.state.member.memberSignature
                            }
                        </div>
                        <div className={baseStyle.listRight}>
                        </div>
                    </div>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={baseStyle.listLeft}>性别</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                        </div>
                        <div className={style.listItemRightGenderContent}>
                            {
                                this.state.isEdit ?
                                    <div className={style.listItemRightContent}>
                                        <div className={style.listItemRightContentGender}>
                                            <input type="radio" name="userSex" {...getFieldProps('userSex', {
                                                rules: [{
                                                    required: true,
                                                    message: '性别不能为空'
                                                }],
                                                initialValue: ''
                                            })} value="1"/>
                                            <div className={style.listItemRightGenderText}>男</div>
                                        </div>
                                        <div className={style.listItemRightContent}>
                                            <input type="radio" name="userSex" {...getFieldProps('userSex', {
                                                rules: [{
                                                    required: true,
                                                    message: '性别不能为空'
                                                }],
                                                initialValue: ''
                                            })} value="2"/>
                                            <div className={style.listItemRightGenderText}>女</div>
                                        </div>
                                    </div>
                                    :
                                    this.state.member.userSex ?
                                        this.state.member.userSex === '1' ? '男' : '女'
                                        :
                                        ''
                            }
                        </div>
                    </div>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={baseStyle.listLeft}>城市</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            {
                                this.state.isEdit ?
                                    <div  className={style.listItemRightContent}>
                                        <input  className={style.listItemCenterInput} {...getFieldProps('memberAddressCity', {
                                            rules: [{
                                                required: true,
                                                message: '城市名称不能为空'
                                            }],
                                            initialValue: ''
                                        })} type="text" placeholder="请输入城市名称"/>
                                        <img className={style.listItemRightLocatinImage}
                                             src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/18/h/18'
                                             alt=''/>
                                    </div>
                                    :
                                    this.state.member.memberAddressCity
                            }
                        </div>
                        <div className={baseStyle.listRight}>
                        </div>
                    </div>
                    <div>
                        {
                            this.state.isEdit?
                                ''
                                :<div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                                    <Link to="/forget/password" className={style.listModule}>
                                        <div className={baseStyle.listLeft}>设置密码</div>
                                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                                        </div>
                                        <div className={baseStyle.listRight}>
                                            <div className={baseStyle.rightArrow}></div>
                                        </div>
                                    </Link>
                                </div>
                        }
                    </div>
                    <div>
                        {
                            this.state.isEdit?
                                ''
                                :<div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                                    <Link to="/my/language" className={style.listModule}>
                                        <div className={baseStyle.listLeft}>偏好语言</div>
                                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                                            {
                                                this.state.member.memberPreferenceLanguage ?
                                                    this.state.member.memberPreferenceLanguage
                                                    :
                                                    '简体中文'
                                            }
                                        </div>
                                        <div className={baseStyle.listRight}>
                                            <div className={baseStyle.rightArrow}></div>
                                        </div>
                                    </Link>
                                </div>
                        }

                    </div>

                </div>
                <div className={classNames(style.content, style.footer)}>
                    {
                        this.state.isEdit?<div className={style.review} onClick={this.handleSave.bind(this)}>保存修改</div>:''
                    }
                </div>
            </div>
        );
    }
}

Info = createForm({})(Info);

export default connect(() => ({}))(Info);
