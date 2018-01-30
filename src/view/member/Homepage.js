import React, {Component} from 'react';
import {connect} from 'react-redux';

import Infinite from 'react-infinite';

import TopicIndex from '../../component/topic/Index';
import util from '../../common/util';

import style from './Homepage.scss';
import http from "../../common/http";
import constant from "../../common/constant";


class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            topicPageIndex: 1,
            topicPageSize: 2,
            topicTotal: 0,
            topicList: [],
            isInfiniteLoading: false,
            elementHeights: [],

            member: {},
        }
    }

    componentDidMount() {
        util.setTitle('个人主页');
        util.hancleComponentDidMount();

        this.handleLoad();
        this.handleLoadMemberInfo();
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
                url: '/topic/mobile/v1/home/topic',
                data: {
                    userId: userId,
                    pageIndex: this.state.topicPageIndex,
                    pageSize: this.state.topicPageSize
                },
                success: function (data) {
                    let topicList = this.state.topicList;
                    this.setState({
                        topicTotal: data.total,
                        topicList: topicList.concat(data.list)
                    });

                }.bind(this),
                complete: function () {
                    this.setState({
                        isInfiniteLoading: false
                    })
                }.bind(this)
            });
        }

    }

    handleLoadMemberInfo() {
        let userId = this.props.params.userId;
        if (userId) {
            http.request({
                url: '/topic/mobile/v1/home/user/info',
                data: {
                    userId: userId,
                },
                success: function (data) {
                    this.setState({
                        member:data
                    });

                    console.log(this.state.member.userAvatar.filePath)
                }.bind(this),
                complete: function () {
                }.bind(this)
            });
        }

    }

    handleInfiniteLoad() {
        let {topicPageIndex, topicPageSize, topicTotal} = this.state;
        if (topicPageIndex * topicPageSize < topicTotal) {
            this.setState({
                isInfiniteLoading: true,
                topicPageIndex: topicPageIndex + 1
            }, function () {
                setTimeout(function() {
                    this.handleLoad();
                }.bind(this), 800)
            }.bind(this))
        }
    }

    handleFollow() {
        console.log('关注',this.state.member.memberIsFollow )
        let followUserId = this.props.params.userId;
        http.request({
            url: this.state.member.memberIsFollow ? '/member/follow/mobile/v1/delete' : '/member/follow/mobile/v1/save',
            data: {
                followUserId: followUserId,
            },
            success: function (data) {
                if (data){
                    this.state.member.memberIsFollow != this.state.member.memberIsFollow;
                    this.setState({
                        member:data
                    });
                }

                this.handleLoadMemberInfo();

            }.bind(this),
            complete: function () {
            }.bind(this)
        });
    }

    render() {
        return (

            <div className={style.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.headerContentTopBackground}>
                    <div className={style.headerContentMemberIcon}>
                        {
                            this.state.member.userAvatar && this.state.member.userAvatar.filePath ?
                                <img src={constant.image_host + this.state.member.userAvatar.filePath} alt=''/>
                                :
                                <img src={require('../../image/topicItem.png')} alt=''/>
                        }

                    </div>
                </div>
                <div className={style.headerContentMemberClear}></div>
                <p className={style.headerContentMemberMiddleMsg}>
                    <span style={{fontSize:"20px",marginLeft:"18px"}}>
                        {
                            this.state.member && this.state.member.userNickName ?
                                this.state.member.userNickName
                                :
                                '没有昵称'
                        }
                    </span>
                    <span style={{fontsize:"9px",marginLeft:"16px"}}>来自</span>
                    <span style={{fontsize:"9px",marginLeft:"9px"}}>上海</span>
                    <span style={{fontsize:"9px",marginLeft:"9px"}}>徐汇区</span>
                </p>
                <p style={{marginLeft:"19px",fontSize:"12px"}}>
                    {
                        this.state.member && this.state.member.memberSignature ?
                            this.state.member.memberSignature
                            :
                            '天气不错呀'
                    }
                </p>
                <div className={style.headerContentMemberClear2}></div>
                <div className={style.headerContentMemberVisit}>
                    <div style={{marginLeft:"5px"}}>
                        <p>{this.state.member.memberSendTopicCount}</p>
                        <p>动态</p>
                    </div>
                    <div>
                        <p>{this.state.member.memberFollowCount}</p>
                        <p>关注</p>
                    </div>
                    <div>
                        <p>{this.state.member.memberBeFollowCount}</p>
                        <p>粉丝</p>
                    </div>
                    <div>
                        <input className={style.headerContentMemberPrivateMessage}  type="button" value="私信"/>
                    </div>
                    <div>
                        {
                            this.state.member.memberIsFollow ?
                                <input className={style.headerContentMemberVisitTa} onClick={this.handleFollow.bind(this)} type="button" value="已关注"/>
                                :
                                <input className={style.headerContentMemberVisitTa} onClick={this.handleFollow.bind(this)} type="button" value="关注TA"/>
                        }
                    </div>
                </div>
                <h3 className={style.headerContentMemberTitle}>
                    TA的宠物
                    <span style={{fontSize:"5px",marginLeft:"11px"}}>
                        牛头梗
                    </span>
                </h3>

                {
                    this.state.topicList.length > 0 ?
                        <Infinite elementHeight={document.documentElement.clientHeight * 0.5}
                                  containerHeight={document.documentElement.clientHeight}
                                  infiniteLoadBeginEdgeOffset={200}
                                  onInfiniteLoad={this.handleInfiniteLoad.bind(this)}
                                  loadingSpinnerDelegate={
                                      this.state.isInfiniteLoading ?
                                          <div className="infinite-list-item">Loading...</div>
                                          :
                                          this.state.topicPageIndex * this.state.topicPageSize >= this.state.topicTotal  ?
                                              <div className="infinite-list-item">没有更多了</div>
                                              :
                                              null
                                  }
                                  isInfiniteLoading={this.state.isInfiniteLoading}
                        >
                            {
                                this.state.topicList.map((topic, index) => <TopicIndex topic={topic} key={index}/>)
                            }
                        </Infinite>
                        :
                        null
                }
            </div>


        );
    }
}


export default connect(() => ({}))(Homepage);
