import React, {Component} from 'react';
import {connect} from 'react-redux';

import util from "../../common/util";

import './ForgetPassword.css';

let interval;

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
        util.setTitle('忘记密码');

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

    handleNext() {
        this.setState({
            step: 1
        });
    }

    handleSubmit() {
        this.props.history.push({
            pathname: '/index',
            query: {}
        });
    }

    render() {
        return (
            this.state.step === 0 ?
                <div className="page-background text-align-center page">
                    <div className="forget-password-title">忘记密码？</div>
                    <div className="forget-password-form">
                        <div className="forget-password-form-mobile">
                            <img className="forget-password-form-mobile-icon" src={require('../../image/mobile.png')}
                                 width="13"
                                 height="20" alt=""/>
                            <input className="forget-password-form-mobile-input" type="text" placeholder="请输入手机号码"/>
                            <div className="forget-password-form-mobile-line"></div>
                        </div>
                        <div className="slideunlock-wrapper">
                            <input type="hidden" className="slideunlock-lockable"/>
                            <div className="slideunlock-slider">
                                <img className="slideunlock-label" src={require('../../image/paw.png')} width="46"
                                     height="47"
                                     alt=""/>
                                <span className="slideunlock-lable-tip"></span>
                            </div>
                        </div>
                        {
                            this.state.isSendCaptcha ?
                                <div className="forget-password-form-captcha">
                                    <img className="forget-password-form-captcha-icon"
                                         src={require('../../image/mobile.png')} width="13"
                                         height="20" alt=""/>
                                    <input className="forget-password-form-captcha-input" type="text"
                                           placeholder="请输入验证码"/>
                                    <div className="forget-password-form-captcha-line"></div>
                                    <span className="forget-password-form-captcha-time">剩余{this.state.countdown}s</span>
                                </div>
                                :
                                ''
                        }
                        <div className="form-button"
                             style={this.state.isSendCaptcha ? {background: '#58BFCE'} : {background: '#9DD7E3'}}
                             onClick={this.handleNext.bind(this)}>下一步
                        </div>
                    </div>
                </div>
                :
                <div className="page-background text-align-center page">
                    <div className="forget-password-title">忘记密码？</div>
                    <div className="forget-password-form">
                        <div className="forget-password-form-password">
                            <img className="forget-password-form-password-icon" src={require('../../image/mobile.png')}
                                 width="13"
                                 height="20" alt=""/>
                            <input className="forget-password-form-password-input" type="text" placeholder="请输入新密码"/>
                            <div className="forget-password-form-password-line"></div>
                        </div>
                        <div className="forget-password-form-confirm-password">
                            <img className="forget-password-form-confirm-password-icon"
                                 src={require('../../image/mobile.png')} width="13"
                                 height="20" alt=""/>
                            <input className="forget-password-form-confirm-password-input" type="text"
                                   placeholder="再次确认密码"/>
                            <div className="forget-password-form-confirm-password-line"></div>
                        </div>
                        <div className="form-button"
                             style={this.state.isSendCaptcha ? {background: '#58BFCE'} : {background: '#9DD7E3'}}
                             onClick={this.handleSubmit.bind(this)}>完成修改
                        </div>
                    </div>
                </div>
        );
    }
}

ForgetPassword.propTypes = {};

export default connect(() => ({}))(ForgetPassword);
