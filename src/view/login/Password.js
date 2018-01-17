import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {createForm} from 'rc-form';
import Notification from 'rc-notification';
import classNames from 'classnames';

import util from '../../common/util';

import style from './Password.scss';
import baseStyle from '../../css/Base.scss';

let notification = null;
Notification.newInstance({}, (n) => notification = n);

class Password extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            isSendCaptcha: false,
            countdown: 0
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');


    }

    componentWillUnmount() {

    }

    handleSubmit() {

        this.props.form.validateFields((errors, value) => {
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

            console.log(value)
        });
    }

    render() {
        const {getFieldProps} = this.props.form;

        return (
            <div className={style.page} style={{height: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <img className={style.logo} src={require('../../image/login-logo.png')} alt=''/>
                </div>
                <div className={style.content}>
                    <div className={style.mobile}>
                        <div className={style.mobileLeft}>
                            <img className={style.mobileLeftIcon}
                                 src={require('../../image/mobile.png')} alt=''/>
                        </div>
                        <div className={classNames(style.mobileRight, baseStyle.bottomLine)}>
                            <input {...getFieldProps('memberMobile', {
                                rules: [{
                                    required: true,
                                    message: '手机号码不能为空'
                                }],
                                initialValue: ''
                            })} className={style.mobileRightInput} type="text" placeholder="请输入手机号码"/>
                        </div>
                    </div>
                    <div className={style.password}>
                        <div className={style.passwordLeft}>
                            <img className={style.passwordLeftIcon}
                                 src={require('../../image/password.png')} alt=''/>
                        </div>
                        <div className={classNames(style.passwordRight, baseStyle.bottomLine)}>
                            <input {...getFieldProps('memberPassword', {
                                rules: [{
                                    required: true,
                                    message: '密码不能为空'
                                }],
                                initialValue: ''
                            })} className={style.passwordRightInput} type="text" placeholder="请输入密码"/>
                        </div>
                    </div>
                    <div className={style.forget}><Link to="/forget/password">忘记密码</Link></div>
                    <div className={style.submit}
                         style={this.state.isSendCaptcha ? {background: '#58BFCE'} : {background: '#9DD7E3'}}
                         onClick={this.handleSubmit.bind(this)}>登 录
                    </div>
                    <div className={style.link}>
                        <Link to="/login/index" className={style.linkLeft}>
                            快捷登录
                        </Link>
                        <Link to="/register" className={style.linkRight}>
                            注册账号
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

Password = createForm({})(Password);

export default connect(() => ({}))(Password);
