import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List} from 'antd-mobile';

import util from "../../common/util";

import './Info.css';

class Info extends Component {
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

    handleSubmit() {
        this.props.history.push({
            pathname: '/forum/index',
            query: {}
        });
    }

    render() {
        return (
            <div>
                <div className="forum-info-header">圈子信息</div>
                <List className="forum-info-avatar">
                    <List.Item arrow="horizontal" multipleLine extra={<img className="forum-info-avatar-icon" src={require('../../image/forum-info-avatar.png')} alt=""/>}>
                        <span className="forum-info-avatar-title">圈子头像</span>
                    </List.Item>
                </List>
                <div className="forum-info-space"></div>
                <List>
                    <List.Item arrow="horizontal" multipleLine extra={<span className="forum-info-content-extra">魔都喵星人</span>}>
                        <span className="forum-info-content-title">圈子名称</span>
                    </List.Item>
                    <List.Item arrow="horizontal" multipleLine extra={<span className="forum-info-content-extra">这里是魔都喵星人的聚集地，喜欢</span>}>
                        <span className="forum-info-content-title">圈子简介</span>
                    </List.Item>
                    <List.Item multipleLine>
                        <div className="forum-info-content-title">圈主信息</div>
                        <div className="forum-info-content-info"></div>
                        <img className="forum-info-crown" src={require('../../image/forum-info-crown.png')} alt=""/>
                        <img className="forum-info-owner" src={require('../../image/forum-info-owner.png')} alt=""/>
                        <div className="forum-info-name">小野</div>
                        <div className="forum-info-introduce">资深遛狗师一枚，对宠物行为有很深的造诣。</div>
                        <div className="forum-info-message">私信</div>
                    </List.Item>
                    <List.Item multipleLine>
                        <div className="forum-info-content-title">全部圈友</div>
                        <div className="forum-info-content-info">
                            <img className="forum-info-user" src={require('../../image/Group 5.png')} alt=""/>
                            <img className="forum-info-user" src={require('../../image/Group 5.png')} alt=""/>
                            <img className="forum-info-user" src={require('../../image/Group 5.png')} alt=""/>
                            <img className="forum-info-user" src={require('../../image/Group 5.png')} alt=""/>
                            <img className="forum-info-user" src={require('../../image/Group 5.png')} alt=""/>
                        </div>
                        <div className="forum-info-delete" onClick={this.handleSubmit.bind(this)}>删除圈子</div>
                    </List.Item>
                </List>
            </div>
        );
    }
}

Info.propTypes = {};

export default connect(() => ({}))(Info);
