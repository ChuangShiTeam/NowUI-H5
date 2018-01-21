import React, {Component} from 'react';
import {connect} from 'react-redux';

import util from '../../common/util';

import style from './Homepage.scss';
import http from "../../common/http";

class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false ,
            member: {}
        }
    }

    componentDidMount() {
        util.setTitle('个人主页');
        util.hancleComponentDidMount();

        this.handleLoad();
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

    }

    handleLoad() {
        let userId = this.props.params.userId;
        if (userId) {
            http.request({
                url: '/forum/mobile/v1/home',
                data: {
                    userId: userId
                },
                success: function (data) {
                    this.setState({
                        member: data
                    });
                }.bind(this),
                complete: function () {

                }
            });
        }

    }

    render() {
        return (
            <div className={style.page} style={{height: document.documentElement.clientHeight}}>
                <div className={style.headerContentTopBackground}>
                    <div className={style.headerContentMemberIcon}>
                        <img src={require('../../image/topicItem.png')} alt=''/>
                    </div>
                </div>
                <div className={style.headerContentMemberClear}></div>
                <p className={style.headerContentMemberMiddleMsg}>
                    <span style={{fontSize:"20px",marginLeft:"18px"}}>我是詹姆斯</span>
                    <span style={{fontsize:"9px",marginLeft:"16px"}}>来自</span>
                    <span style={{fontsize:"9px",marginLeft:"9px"}}>上海</span>
                    <span style={{fontsize:"9px",marginLeft:"9px"}}>徐汇区</span>
                </p>
                <p style={{marginLeft:"18px",fontSize:"12px"}}>
                    Capturing every moment of my life.
                </p>
                <div className={style.headerContentMemberClear2}></div>
                <div className={style.headerContentMemberVisit}>
                    <div style={{marginLeft:"5px"}}>
                        <p>20</p>
                        <p>动态</p>
                    </div>
                    <div>
                        <p>4</p>
                        <p>关注</p>
                    </div>
                    <div>
                        <p>28</p>
                        <p>粉丝</p>
                    </div>
                    <div>
                        <input className={style.headerContentMemberPrivateMessage}  type="button" value="私信"/>
                    </div>
                    <div>
                        <input className={style.headerContentMemberVisitTa} type="button" value="关注TA"/>
                    </div>
                </div>
                <h3 className={style.headerContentMemberTitle}>
                    TA的宠物
                    <span style={{fontSize:"5px",marginLeft:"11px"}}>
                        牛头梗
                    </span>
                </h3>
            </div>
        );
    }
}

export default connect(() => ({}))(Homepage);
