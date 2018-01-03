import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Toast} from 'antd-mobile';

import util from "../../common/util";

class Skip extends Component {
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

    handleSkip() {
        this.props.history.push({
            pathname: '/forum/index',
            query: {}
        });
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
                <div className="forum-skip-skip" onClick={this.handleSkip.bind(this)}>跳过</div>
                <div className="forum-skip-title">选择加入你也许感兴趣的圈子</div>
                <div className="forum-skip-summary">为你私人定制你的宠物部落</div>
                <div className="forum-skip-list">
                    <div className="forum-skip-list-item">
                        <img className="forum-skip-list-item-image" src={require('../../image/235570 copy.png')}
                             alt=""/>
                        <div className="forum-skip-list-item-title">大爱金毛圈</div>
                        <div className="forum-skip-list-item-summary">金毛最可爱了，大暖汪星人的代表</div>
                        <img className="forum-skip-list-item-check"
                             src={require('../../image/forum-skip-list-item-check-active.png')} alt=""/>
                    </div>
                    <div className="forum-skip-list-item">
                        <img className="forum-skip-list-item-image" src={require('../../image/235570 copy.png')}
                             alt=""/>
                        <div className="forum-skip-list-item-title">大爱金毛圈</div>
                        <div className="forum-skip-list-item-summary">金毛最可爱了，大暖汪星人的代表</div>
                        <img className="forum-skip-list-item-check"
                             src={require('../../image/forum-skip-list-item-check-active.png')} alt=""/>
                    </div>
                    <div className="forum-skip-list-item">
                        <img className="forum-skip-list-item-image" src={require('../../image/235570 copy.png')}
                             alt=""/>
                        <div className="forum-skip-list-item-title">大爱金毛圈</div>
                        <div className="forum-skip-list-item-summary">金毛最可爱了，大暖汪星人的代表</div>
                        <img className="forum-skip-list-item-check"
                             src={require('../../image/forum-skip-list-item-check-active.png')} alt=""/>
                    </div>
                </div>
                <div className="forum-skip-submit" onClick={this.handleSubmit.bind(this)}>进入圈子</div>
            </div>
        );
    }
}

Skip.propTypes = {};

export default connect(() => ({}))(Skip);
