import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from 'rc-form';
import Notification from 'rc-notification';
import classNames from 'classnames';

import util from '../../common/util';

import style from './Index.scss';
import baseStyle from '../../css/Base.scss';

let interval;
let notification = null;
Notification.newInstance({}, (n) => notification = n);

class Index extends Component {
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

        let slider = new window.SliderUnlock(".slideunlock-slider", {
            labelTip: '向右滑动获取验证码',
            successLabelTip: '已经成功发送'
        }, function () {
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
        }.bind(this), function () {

        });

        try {
            slider.init();
        } catch(error) {

        } finally {

        }
    }

    componentWillUnmount() {
        clearInterval(interval);
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
        const {getFieldProps, getFieldError, getFieldValue} = this.props.form;

        return (
            <div className={style.page} style={{height: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <img className={style.logo} src={require('../../image/login-logo.png')} alt=""/>
                </div>
                <div className={style.content}>
                    <div className={style.mobile}>
                        <div className={style.mobileLeft}>
                            <img className={style.mobileLeftIcon}
                                 src={require('../../image/mobile.png')} alt=""/>
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
                            <div className="slideunlock-label"  alt=""/>
                            <span className="slideunlock-lable-tip"></span>
                        </div>
                    </div>
                    <div className={style.captcha} style={{display: this.state.isSendCaptcha ? '' : 'none'}}>
                        <div className={style.captchaLeft}>
                            <img className={style.captchaLeftIcon} style={{display: this.state.isSendCaptcha ? '' : 'none'}}
                                 src={require('../../image/captcha.png')} alt=""/>
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
                            <span style={{display: this.state.isSendCaptcha ? '' : 'none'}}>剩余{this.state.countdown}s</span>
                        </div>
                    </div>
                    <div className={style.submit} style={this.state.isSendCaptcha ? {background: '#58BFCE'} : {background: '#9DD7E3'}} onClick={this.handleSubmit.bind(this)}>登 录</div>
                </div>
            </div>
        );
    }
}

Index = createForm({})(Index);

export default connect(() => ({}))(Index);
