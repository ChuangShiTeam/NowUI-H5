import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Toast} from 'antd-mobile';

import util from "../../common/util";

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
        util.setTitle('手机密码登录');
    }

    componentWillUnmount() {

    }

    handleSubmit() {
        Toast.info('This is a toast tips !!!', 1);
    }

    render() {
        return (
            <div className="page-background text-align-center login">
                <img className="login-logo" src={require('../../image/logo.png')} width="150" height="37" alt=""/>
                <div className="login-password-form">
                    <div className="login-password-form-mobile">
                        <img className="login-password-form-mobile-icon" src={require('../../image/mobile.png')}
                             width="13"
                             height="20" alt=""/>
                        <input className="login-password-form-mobile-input" type="text" placeholder="请输入手机号码"/>
                        <div className="login-password-form-mobile-line"></div>
                    </div>
                    <div className="login-password-form-password">
                        <img className="login-password-form-password-icon" src={require('../../image/mobile.png')}
                             width="13"
                             height="20" alt=""/>
                        <input className="login-password-form-password-input" type="text" placeholder="请输入密码"/>
                        <div className="login-password-form-password-line"></div>
                    </div>
                    <div className="login-password-form-text">
                        <div className="login-password-form-forget">忘记密码</div>
                    </div>
                    <div className="form-button" style={{background: '#58BFCE'}}
                         onClick={this.handleSubmit.bind(this)}>登 录
                    </div>
                    <div className="login-password-form-text">
                        <Link to="/login/quick" className="login-password-form-quick">密码登录</Link>
                        <div className="login-password-form-register">注册账号</div>
                    </div>
                    <div className="login-text-line">或</div>
                    <img className="login-password-form-wechat" src={require('../../image/wechat.png')} width="32"
                         height="26" alt=""/>
                </div>
            </div>
        );
    }
}

Password.propTypes = {};

export default connect(() => ({}))(Password);
