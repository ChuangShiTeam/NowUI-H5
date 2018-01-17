import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from 'rc-form';
import Notification from 'rc-notification';
import classNames from 'classnames';

import util from '../../common/util';

import style from './Register.scss';
import baseStyle from '../../css/Base.scss';

let interval;
let notification = null;
Notification.newInstance({}, (n) => notification = n);

class ForgetPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            isSendCaptcha: false,
            countdown: 0,
            step: 0
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');

        let slider = new window.SliderUnlock(".slideunlock-slider", {
            labelTip: '向右滑动获取验证码',
            successLabelTip: '已经成功发送'
        }, function () {
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

                    slider.reset();

                    return;
                } else {
                    if (!util.isMobile(value.memberMobile)) {
                        notification.notice({
                            content: '手机号码格式不正确'
                        });

                        slider.reset();

                        return;
                    }

                    this.setState({
                        isSendCaptcha: true,
                        countdown: 60
                    });

                    interval = setInterval(function () {
                        if (this.state.countdown === 1) {
                            this.setState({
                                isSendCaptcha: false
                            });

                            slider.reset();

                            clearInterval(interval);
                        } else {
                            this.setState({
                                countdown: this.state.countdown - 1
                            });
                        }
                    }.bind(this), 1000);
                }
            });
        }.bind(this), function () {

        });

        try {
            slider.init();
        } catch (error) {

        } finally {

        }
    }

    componentWillUnmount() {
        clearInterval(interval);
    }

    handleNext() {
        if (this.state.isSendCaptcha) {
            this.setState({
                step: 1
            });
        } else {
            notification.notice({
                content: '请先获取验证码'
            });
        }
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
        });
    }

    render() {
        const {getFieldProps} = this.props.form;

        return (
            this.state.step == 0 ?
                <div className={style.page} style={{height: document.documentElement.clientHeight}}>
                    <div className={style.header}>
                        忘记密码？
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
                        <div className="slideunlock-wrapper">
                            <input type="hidden" className="slideunlock-lockable"/>
                            <div className="slideunlock-slider">
                                <img className="slideunlock-label" src={require('../../image/paw.png')} alt=''/>
                                <span className="slideunlock-lable-tip"></span>
                            </div>
                        </div>
                        {
                            this.state.isSendCaptcha ?
                                <div className={style.captcha}>
                                    <div className={style.captchaLeft}>
                                        <img className={style.captchaLeftIcon} src={require('../../image/captcha.png')}
                                             alt=''/>
                                    </div>
                                    <div className={classNames(style.captchaCenter, baseStyle.bottomLine)}>
                                        <input {...getFieldProps('memberCaptcha', {
                                            rules: [{
                                                required: true,
                                                message: '验证码不能为空'
                                            }],
                                            initialValue: ''
                                        })} className={style.captchaCenterInput} type="text" placeholder="请输入验证码"/>
                                    </div>
                                    <div className={style.captchaRight}>
                                        <span>剩余{this.state.countdown}s</span>
                                    </div>
                                </div>
                                :
                                ''

                        }
                        <div className={style.submit}
                             style={this.state.isSendCaptcha ? {background: '#58BFCE'} : {background: '#9DD7E3'}}
                             onClick={this.handleNext.bind(this)}>下一步
                        </div>
                    </div>
                </div>
                :
                <div className={style.page} style={{height: document.documentElement.clientHeight}}>
                    <div className={style.header}>
                        下一步
                    </div>
                    <div className={style.content}>
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
                        <div className={style.confirmPassword}>
                            <div className={style.confirmPasswordLeft}>
                                <img className={style.confirmPasswordLeftIcon}
                                     src={require('../../image/confirmPassword.png')} alt=''/>
                            </div>
                            <div className={classNames(style.confirmPasswordRight, baseStyle.bottomLine)}>
                                <input {...getFieldProps('memberConfirmPassword', {
                                    rules: [{
                                        required: true,
                                        message: '确认密码不能为空'
                                    }],
                                    initialValue: ''
                                })} className={style.confirmPasswordRightInput} type="text" placeholder="再次确认密码"/>
                            </div>
                        </div>
                        <div className={style.submit}
                             style={this.state.isSendCaptcha ? {background: '#58BFCE'} : {background: '#9DD7E3'}}
                             onClick={this.handleSubmit.bind(this)}>完成注册
                        </div>
                    </div>
                </div>
        );
    }
}

ForgetPassword = createForm({})(ForgetPassword);

export default connect(() => ({}))(ForgetPassword);
