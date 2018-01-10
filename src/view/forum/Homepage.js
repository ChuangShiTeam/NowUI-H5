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
            <div>
                {/*<div className="forum-homepage-background" style={{backgroundImage: 'url(' + require('../../image/forum-homepage-background.png') + ')'}}></div>*/}
                <div className="forum-homepage-background">
                    <img src={require('../../image/forum-homepage-background.png')} alt=""/>
                    <div className="forum-homepage-avatar"><img src={require('../../image/forum-info-avatar.png')} alt=""/></div>
                </div>
                <div className="forum-homepage-name">
                    世界萌宠大搜罗
                </div>
                <div className="forum-homepage-summary">
                    本圈为你搜罗全世界的有趣动物资讯
                </div>
                <div className="forum-homepage-join">
                    加入圈子
                </div>
                <div className="forum-homepage-moderator">
                    <img className="forum-homepage-moderator-crown" src={require('../../image/forum-info-crown.png')} alt=""/>
                    <img className="forum-homepage-moderator-avatar" src={require('../../image/forum-info-owner.png')} alt=""/>
                    <div className="forum-homepage-moderator-name">
                        小野
                    </div>
                    <div className="forum-homepage-moderator-summary">
                        资深遛狗师一枚，对宠物行为有很深的造诣。
                    </div>
                </div>
                <div className="forum-homepage-moderator-space"></div>
                <Topic/>
            </div>
        );
    }
}

Homepage.propTypes = {};

export default connect(() => ({}))(Homepage);
