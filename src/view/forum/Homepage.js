import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List} from 'antd-mobile';

import util from "../../common/util";

import './Homepage.css';

class HomepageMy extends Component {
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
                <div className="forum-homepage-header">圈子信息</div>
                <List className="forum-homepage-avatar">
                    <List.Item arrow="horizontal" multipleLine extra={<img className="forum-homepage-avatar-icon" src={require('../../image/forum-homepage-avatar.png')} alt=""/>}>
                        <span className="forum-homepage-avatar-title">圈子头像</span>
                    </List.Item>
                </List>
                <div className="forum-homepage-space"></div>
                <List>
                    <List.Item arrow="horizontal" multipleLine extra={<span className="forum-homepage-content-extra">魔都喵星人</span>}>
                        <span className="forum-homepage-content-title">圈子名称</span>
                    </List.Item>
                    <List.Item arrow="horizontal" multipleLine extra={<span className="forum-homepage-content-extra">这里是魔都喵星人的聚集地，喜欢</span>}>
                        <span className="forum-homepage-content-title">圈子简介</span>
                    </List.Item>
                    <List.Item multipleLine>
                        <div className="forum-homepage-content-title">圈主信息</div>
                        <div className="forum-homepage-content-info"></div>
                        <img className="forum-homepage-crown" src={require('../../image/forum-homepage-crown.png')} alt=""/>
                        <img className="forum-homepage-owner" src={require('../../image/forum-homepage-owner.png')} alt=""/>
                        <div className="forum-homepage-name">小野</div>
                        <div className="forum-homepage-introduce">资深遛狗师一枚，对宠物行为有很深的造诣。</div>
                    </List.Item>
                    <List.Item multipleLine>
                        <div className="forum-homepage-content-title">全部圈友</div>
                        <div className="forum-homepage-content-info">
                            <img className="forum-homepage-user" src={require('../../image/Group 5.png')} alt=""/>
                            <img className="forum-homepage-user" src={require('../../image/Group 5.png')} alt=""/>
                            <img className="forum-homepage-user" src={require('../../image/Group 5.png')} alt=""/>
                            <img className="forum-homepage-user" src={require('../../image/Group 5.png')} alt=""/>
                            <img className="forum-homepage-user" src={require('../../image/Group 5.png')} alt=""/>
                        </div>
                        <div className="forum-homepage-delete" onClick={this.handleSubmit.bind(this)}>删除圈子</div>
                    </List.Item>
                </List>
            </div>
        );
    }
}

HomepageMy.propTypes = {};

export default connect(() => ({}))(HomepageMy);
