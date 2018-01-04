import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Toast} from 'antd-mobile';

import util from "../../common/util";

import './Register.css';

let interval;

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            isSendCaptcha: false,
            isAgreement: true,
            countdown: 0,
            step: 0
        }
    }

    componentDidMount() {
        util.setTitle('注册账号');

        var slider = new window.SliderUnlock(".slideunlock-slider", {
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
        slider.init();
    }

    componentWillUnmount() {
        clearInterval(interval);
    }

    handleAgreement() {
        this.setState({
            isAgreement: !this.state.isAgreement
        });
    }

    handleNext() {
        if (this.state.isAgreement) {
            this.setState({
                step: 1
            });
        } else {
            Toast.info('请先接受注册协议和隐私条款', 1);
        }
    }

    handleSubmit() {
        this.props.history.push({
            pathname: '/index',
            query: {}
        });
    }

    render() {
        return (
            <div className="page-background text-align-center page">
                <div className="register-title">注册账号</div>
                {
                    this.state.step === 0 ?
                        <div className="register-form">
                            <div className="register-form-mobile">
                                <img className="register-form-mobile-icon" src={require('../../image/mobile.png')} width="13"
                                     height="20" alt=""/>
                                <input className="register-form-mobile-input" type="text" placeholder="请输入手机号码"/>
                                <div className="register-form-mobile-line"></div>
                            </div>
                            <div className="slideunlock-wrapper">
                                <input type="hidden" className="slideunlock-lockable"/>
                                <div className="slideunlock-slider">
                                    <img className="slideunlock-label" src={require('../../image/paw.png')} width="46" height="47"
                                         alt=""/>
                                    <span className="slideunlock-lable-tip"></span>
                                </div>
                            </div>
                            {
                                this.state.isSendCaptcha ?
                                    <div className="register-form-captcha">
                                        <img className="register-form-captcha-icon" src={require('../../image/mobile.png')} width="13"
                                             height="20" alt=""/>
                                        <input className="register-form-captcha-input" type="text" placeholder="请输入验证码"/>
                                        <div className="register-form-captcha-line"></div>
                                        <span className="register-form-captcha-time">剩余{this.state.countdown}s</span>
                                    </div>
                                    :
                                    ''
                            }
                            <div className="form-button" style={this.state.isSendCaptcha ? {background: '#58BFCE'} : {background: '#9DD7E3'}} onClick={this.handleNext.bind(this)}>下一步</div>
                            <div className="form-agreement">
                                <img className="form-agreement-icon" src={this.state.isAgreement ? require('../../image/agreement-active.png') : require('../../image/agreement.png')} width="10" height="10" alt="" onClick={this.handleAgreement.bind(this)}/>
                                <span>我已阅读并接受<a>注册协议</a>和<a>隐私条款</a></span>
                            </div>
                        </div>
                        :
                        <div className="register-form">
                            <div className="register-form-password">
                                <img className="register-form-password-icon" src={require('../../image/mobile.png')} width="13"
                                     height="20" alt=""/>
                                <input className="register-form-password-input" type="text" placeholder="请输入密码"/>
                                <div className="register-form-password-line"></div>
                            </div>
                            <div className="register-form-confirm-password">
                                <img className="register-form-confirm-password-icon" src={require('../../image/mobile.png')} width="13"
                                     height="20" alt=""/>
                                <input className="register-form-confirm-password-input" type="text" placeholder="再次确认密码"/>
                                <div className="register-form-confirm-password-line"></div>
                            </div>
                            <div className="form-button" style={this.state.isSendCaptcha ? {background: '#58BFCE'} : {background: '#9DD7E3'}} onClick={this.handleSubmit.bind(this)}>完成修改</div>
                        </div>
                }
            </div>
        );
    }
}

Register.propTypes = {};

export default connect(() => ({}))(Register);