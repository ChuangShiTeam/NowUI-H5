import React, {Component} from 'react';
import {connect} from 'react-redux';

import util from '../../common/util';

import './Info.css';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <div className="forum-info-header">
                    圈子信息
                </div>
                <div className="forum-info-avatar">
                    <div className="forum-info-title">
                        圈子头像
                    </div>
                    <div className="forum-info-upload">
                        <img src={require('../../image/avatar-demo.png')} alt=""/>
                    </div>
                    <div className="forum-info-right">
                        <div></div>
                    </div>
                </div>
                <div className="forum-info-box">
                    <div className="forum-info-item">
                        <div className="forum-info-title">
                            圈子名称
                        </div>
                        <div className="forum-info-text">
                            魔都喵星人
                        </div>
                        <div className="forum-info-right">
                            <div></div>
                        </div>
                    </div>
                    <div className="forum-info-item">
                        <div className="forum-info-title">
                            圈子简介
                        </div>
                        <div className="forum-info-text">
                            这里是魔都喵星人的聚集地
                        </div>
                        <div className="forum-info-right">
                            <div></div>
                        </div>
                    </div>
                    <div className="forum-info-panel">
                        <div className="forum-info-title">
                            圈子简介
                        </div>
                        <div className="forum-info-owner-box">
                            <div className="forum-info-owner-avatar">
                                <img src={require('../../image/header-demo.png')} alt=""/>
                                <div className="forum-info-owner-crown">
                                    <img src={require('../../image/icon-crown.png')} alt=""/>
                                </div>
                            </div>
                            <div className="forum-info-owner-info">
                                <div className="forum-info-owner-name">
                                    小野
                                </div>
                                <div className="forum-info-owner-des">
                                    资深遛狗师一枚，对宠物行为有很深的造诣。
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="forum-info-panel">
                        <div className="forum-info-title">
                            全部圈友
                        </div>
                        <div className="forum-info-list">
                            <ul>
                                <li>
                                    <img src={require('../../image/header-demo.png')} alt=""/>
                                </li>
                                <li>
                                    <img src={require('../../image/header-demo.png')} alt=""/>
                                </li>
                                <li>
                                    <img src={require('../../image/header-demo.png')} alt=""/>
                                </li>
                                <li>
                                    <img src={require('../../image/header-demo.png')} alt=""/>
                                </li>
                                <li>
                                    <img src={require('../../image/header-demo.png')} alt=""/>
                                </li>
                                <li>
                                    <img src={require('../../image/header-demo.png')} alt=""/>
                                </li>
                                <li>
                                    <img src={require('../../image/header-demo.png')} alt=""/>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <img src={require('../../image/header-demo.png')} alt=""/>
                                </li>
                                <li>
                                    <img src={require('../../image/header-demo.png')} alt=""/>
                                </li>
                                <li>
                                    <img src={require('../../image/header-demo.png')} alt=""/>
                                </li>
                                <li>
                                    <img src={require('../../image/header-demo.png')} alt=""/>
                                </li>
                                <li>
                                    <img src={require('../../image/header-demo.png')} alt=""/>
                                </li>
                                <li>
                                    <img src={require('../../image/header-demo.png')} alt=""/>
                                </li>
                                <li>
                                    <img src={require('../../image/header-demo.png')} alt=""/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="forum-info-delete-btn">
                        <button>
                            删除圈子
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Index.propTypes = {};

export default connect(() => ({}))(Index);
