import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Toast} from 'antd-mobile';

import util from "../../common/util";

let interval;

class Quick extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            isSendCaptcha: false,
            countdown: 0
        }
    }

    componentDidMount() {
        util.setTitle('手机快捷登录');

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

    handleSubmit() {
        Toast.info('This is a toast tips !!!', 1);
        // this.props.history.push({
        //     pathname: '/index',
        //     query: {}
        // });
    }

    render() {
        return (
            <div className="page-background text-align-center page">
                <img className="login-logo" src={require('../../image/logo.png')} width="150" height="37" alt=""/>
                <div className="login-form">
                    <div className="login-quick-form-mobile">
                        <img className="login-quick-form-mobile-icon" src={require('../../image/mobile.png')} width="13"
                             height="20" alt=""/>
                        <input className="login-quick-form-mobile-input" type="text" placeholder="请输入手机号码"/>
                        <div className="login-quick-form-mobile-line"></div>
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
                            <div className="login-quick-form-captcha">
                                <img className="login-quick-form-captcha-icon" src={require('../../image/mobile.png')} width="13"
                                     height="20" alt=""/>
                                <input className="login-quick-form-captcha-input" type="text" placeholder="请输入验证码"/>
                                <div className="login-quick-form-captcha-line"></div>
                                <span className="login-quick-form-captcha-time">剩余{this.state.countdown}s</span>
                            </div>
                            :
                            ''
                    }
                    <div className="form-button" style={this.state.isSendCaptcha ? {background: '#58BFCE'} : {background: '#9DD7E3'}} onClick={this.handleSubmit.bind(this)}>登 录</div>
                    <div className="login-quick-form-text">
                        <Link to="/login/password" className="login-quick-form-password">密码登录</Link>
                        <Link to="/register" className="login-quick-form-register">注册账号</Link>
                    </div>
                    <div className="login-text-line">或</div>
                    <img className="login-quick-form-wechat" src={require('../../image/wechat.png')} width="32"
                         height="26" alt=""/>
                </div>
            </div>
        );
    }
}

Quick.propTypes = {};

export default connect(() => ({}))(Quick);
