import React, {Component} from 'react';
import {connect} from 'react-redux';

import util from "../../common/util";

import Topic from "../../component/topic/Index";

import './Homepage.css';

class Homepage extends Component {
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
            <div className="forum-homepage-wrapper">
                <div className="forum-homepage-wrapper-background">
                    <img src={require('../../image/2.png')} alt=""/>
                    <img className="forum-homepage-wrapper-avatar" src={require('../../image/3.png')}
                         alt=""/>
                </div>
                <div className="forum-homepage-wrapper-name">
                    世界萌宠大搜罗
                </div>
                <div className="forum-homepage-wrapper-summary">
                    本圈为你搜罗全世界的有趣动物资讯
                </div>
                <div className="forum-homepage-wrapper-join">
                    加入圈子
                </div>
                <div className="forum-homepage-wrapper-moderator">
                    <div className="forum-homepage-wrapper-moderator-left">
                        <img className="forum-homepage-wrapper-moderator-left-crown"
                             src={require('../../image/crown.png')} alt=""/>
                        <img className="forum-homepage-wrapper-moderator-left-avatar"
                             src={require('../../image/forum-info-owner.png')} alt=""/>
                    </div>
                    <div className="forum-homepage-wrapper-moderator-right">
                        <p className="forum-homepage-wrapper-moderator-right-name">小野</p>
                        <p className="forum-homepage-wrapper-moderator-right-summary">资深遛狗师一枚，对宠物行为有很深的造诣。</p>
                    </div>
                </div>
                <div className="forum-homepage-wrapper-space"></div>
                <Topic/>
                <Topic/>
                <Topic/>
            </div>
        );
    }
}

Homepage.propTypes = {};

export default connect(() => ({}))(Homepage);
