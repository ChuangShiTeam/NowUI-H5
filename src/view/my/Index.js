import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import util from '../../common/util';
import http from '../../common/http';
import constant from '../../common/constant';
import storage from '../../common/storage';

import style from './Index.scss';
import baseStyle from '../../css/Base.scss';
import classNames from "classnames";

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        if (!this.props.myIndex.userNickName || !this.props.myIndex.userAvatar) {
            http.request({
                url: '/wawi/mobile/v1/my/index',
                data: {},
                success: function (data) {
                    this.props.dispatch({
                        type: 'myIndex',
                        data: {
                            userAvatar: data.userAvatar,
                            userNickName: data.userNickName,
                            memberBackground: data.memberBackground
                        }
                    });
                }.bind(this),
                complete: function () {

                }
            });
        }
    }

    componentWillUnmount() {

    }

    handleLogout() {
        storage.setToken();
        this.props.history.push({
            pathname: '/login/index',
            query: {}
        });
    }

    render() {
        return (
            <div className={baseStyle.page} style={{minHeight: document.documentElement.clientHeight}}>
                    <div className={style.header}>
                        <div className={style.headerLeft}>
                            <div className={style.headerImg}>
                                {
                                    this.props.myIndex.userAvatar ?
                                        <img src={constant.image_host + this.props.myIndex.userAvatar} alt=""/>
                                        :
                                        <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/56/h/56" alt=""/>
                                }
                                <div>{this.props.myIndex.userNickName}</div>
                            </div>
                            <div className={style.headerRight}>
                                <div className={style.rightLeft}>个人主页</div>
                                <div className={style.rightRight}></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.middle}>
                        <div className={style.middleLeft}>
                            <div className={style.redSpot}></div>
                            <div>
                               <div className={style.leftIcon}>
                                   <img src={require('../../image/my-news.png')} alt=""/>
                               </div>
                                <div className={style.news}>消息</div>
                            </div>
                        </div>
                            <div className={style.middleRight}>
                                <div className={style.rightIcon}>
                                    <img src={require('../../image/my-collect.png')} alt=""/>

                                </div>
                                <Link to={'/my/bookmark'}>
                                    <div className={style.news}>收藏</div>
                                </Link>
                            </div>
                    </div>
                    <div className={style.middleBottom}></div>
                    <div className={style.newsList}>
                        <Link to="/my/info" className={classNames(style.listModule, baseStyle.bottomLine)}>
                            <div  className={style.listLeft}>
                                <div  className={style.listLeftIcon}>
                                    <img src={require('../../image/my-user.png')}  alt=""/>
                                </div>
                                <div className={style.listCenter}>个人资料</div>
                            </div>
                            <div className={style.listRight}>
                                <div className={style.listRightIcon}></div>
                            </div>
                        </Link>
                        <div  className={classNames(style.listModule, baseStyle.bottomLine)}>
                            <div className={style.listLeft}>
                                <div  className={style.listLeftIcon}>
                                    <img src={require('../../image/my-pet.png')}  alt=""/>
                                </div>
                                <div className={style.listCenter}>我的爱宠</div>
                            </div>
                            <div className={style.listRight}>
                                <div className={style.listRightIcon}></div>
                            </div>
                        </div>
                        <div  className={classNames(style.listModule, baseStyle.bottomLine)}>
                            <div className={style.listLeft}>
                                <div  className={style.listLeftIcon}>
                                    <img  src={require('../../image/my-follow.png')}  alt=""/>
                                </div>
                                <div className={style.listCenter}>我的关注</div>
                            </div>
                            <div className={style.listRight}>
                                <div className={style.listRightIcon}></div>
                            </div>
                        </div>
                        <div className={classNames(style.listModule, baseStyle.bottomLine)}>
                            <div className={style.listLeft}>
                                <div  className={style.listLeftIcon}>
                                    <img src={require('../../image/my-qrcode.png')}  alt=""/>
                                </div>
                                <div className={style.listCenter}>我的二维码</div>
                            </div>
                            <div className={style.listRight}>
                                <div className={style.listRightIcon}></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.getOut}>
                        <div onClick={this.handleLogout.bind(this)}>退出登录</div>
                    </div>
            </div>
        );
    }
}

Index.propTypes = {};

export default connect((state) => ({
    myIndex: state.myIndex
}))(Index);
