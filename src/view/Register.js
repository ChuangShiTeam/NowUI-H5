import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            isSendCaptcha: false
        }
    }

    componentDidMount() {
        var slider = new window.SliderUnlock(".slideunlock-slider", {
            labelTip: '向右滑动获取验证码',
            successLabelTip: '已经成功发送'
        }, function () {
            this.setState({
                isSendCaptcha: true
            });
        }.bind(this), function () {

        });
        slider.init();
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="page-background text-align-center login">
                <div className="register-title">注册账号</div>
                <div className="login-form">
                    <div className="login-form-mobile">
                        <img className="login-form-mobile-icon" src={require('../image/mobile.png')} width="13"
                             height="20" alt=""/>
                        <input className="login-form-mobile-input" type="text" placeholder="请输入手机号码"/>
                        <div className="login-form-mobile-line"></div>
                    </div>
                    <div className="slideunlock-wrapper">
                        <input type="hidden" className="slideunlock-lockable"/>
                        <div className="slideunlock-slider">
                            <img className="slideunlock-label" src={require('../image/paw.png')} width="46" height="47"
                                 alt=""/>
                            <span className="slideunlock-lable-tip"></span>
                        </div>
                    </div>
                    <div className="login-form-captcha">
                        <img className="login-form-captcha-icon" src={require('../image/mobile.png')} width="13"
                             height="20" alt=""/>
                        <input className="login-form-captcha-input" type="text" placeholder="请输入验证码"/>
                        <div className="login-form-captcha-line"></div>
                    </div>
                    <div className="form-button"
                         style={this.state.isSendCaptcha ? {background: '#58BFCE'} : {background: '#9DD7E3'}}>登 录
                    </div>
                    <div className="login-form-text">
                        <Link to="/login/password" className="login-form-password">密码登录</Link>
                        <div className="login-form-register">注册账号</div>
                    </div>
                    <div className="login-text-line">或</div>
                    <img className="login-form-wechat" src={require('../image/wechat.png')} width="32"
                         height="26" alt=""/>
                </div>
            </div>
        );
    }
}

Register.propTypes = {};

export default connect(() => ({}))(Register);
