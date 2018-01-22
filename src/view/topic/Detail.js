import React, {Component} from 'react';
import {connect} from 'react-redux';
import Notification from "rc-notification";

import util from '../../common/util';

import style from './Detail.scss';
import baseStyle from '../../css/Base.scss';
import classNames from "classnames";
import http from "../../common/http";
import constant from "../../common/constant";


let notification = null;
Notification.newInstance({}, (n) => notification = n);

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            topic: {}
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

    }

    handleLoad() {
        //假数据start
        let topicId = '029b48ea1edc4138b9875c63606e24e7';
        //假数据end
        // let topicId = this.props.params.topicId;

        if (topicId) {
            http.request({
                url: '/topic/mobile/v1/find',
                data: {
                    topicId: topicId
                },
                success: function (data) {
                    this.setState({
                        topic: data
                    });
                    console.log(this.state.topic)
                }.bind(this),
                complete: function () {

                }
            });
        }
    }

    render() {
        return (
            <div className={baseStyle.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerLeft}>
                        {
                            this.state.topic.userId && this.state.topic.userId.userAvatar ?
                                <img src={constant.image_host + this.state.topic.userId.userAvatar} alt=''/>
                                :
                                <img className={style.headerLeftImage} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/28/h/28' alt=''/>
                        }

                    </div>
                    <div className={style.headerCenter}>
                        <p className={style.headerCenterName}>{this.state.topic.userId && this.state.topic.userId.userNickName ?this.state.topic.userId.userNickName : '用户昵称为null'}</p>
                        <p className={style.headerCenterTime}>{this.state.topic ?this.state.topic.systemCreateTime : '未知发布时间'}</p>
                    </div>
                    <div className={style.headerRight}></div>
                </div>
                <div className={style.line}></div>
                <div className={style.content}>
                    {
                        this.state.topic && this.state.topic.topicMediaList ?
                            this.state.topic.topicMediaList.map(function (media,index){
                                return (
                                    <img src={constant.image_host + this.state.topic.userId.userAvatar} alt=''/>
                                )
                            })
                            :
                            <img className={style.contentImage} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/255' alt=''/>
                    }

                </div>
                <div className={style.footer}>
                    <div className={classNames(style.footerText, baseStyle.bottomLine)}>
                        奶糖和福禄娃给你过圣诞啦～
                    </div>
                    <div className={style.footerInfo}>
                        <div className={style.footerInfoLeft}>
                            <img className={style.footerInfoLeftLocationIcon} src={require('../../image/location.png')} alt=""/>
                            <span className={style.footerInfoLeftLocationText}>上海  松江区</span>
                        </div>
                        <div className={style.footerInfoRight}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(() => ({}))(Detail);
