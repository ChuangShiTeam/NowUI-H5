import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import InfiniteScroll from 'react-infinite-scroll-component';

import TopicIndex from '../../component/topic/Index';
import util from '../../common/util';

import style from './Homepage.scss';
import http from "../../common/http";
import constant from "../../common/constant";
import classNames from "classnames";
import baseStyle from '../../css/Base.scss';
import moment from "moment/moment";


class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            topicPageIndex: 1,
            topicPageSize: 5,
            topicTotal: 0,
            topicList: [],
            hasMore: false,
            member: {},
            commentPageIndex: 1,
            commentPageSize: 3
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
                    pageSize: this.state.topicPageSize,
                    systemCreateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
                    excludeTopicIdList: [],
                    commentPageIndex: this.state.commentPageIndex,
                    commentPageSize: this.state.commentPageSize
                },
                success: function (data) {
                    if (data && data.list && data.list.length > 0) {

                        let topicList = data.list;
                        let topicTotal = data.total;
                        this.setState({
                            topicTotal: topicTotal,
                            topicList: topicList,
                            hasMore: topicList.length < topicTotal
                        });
                    }
                }.bind(this),
                complete: function () {
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
                }.bind(this),
                complete: function () {
                }.bind(this)
            });
        }

    }


    handleFollow() {
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

    handleNextLoad() {
        if (this.state.hasMore) {
            let {topicPageIndex, topicPageSize, topicList} = this.state;
            let excludeTopicIdList = util.lastWithSame(topicList, 'topicId', 'systemCreateTime');
            let lastTopic = topicList[topicList.length - 1];
            let systemCreateTime = moment(lastTopic.systemCreateTime).format('YYYY-MM-DD HH:mm:ss');
            http.request({
                url: '/topic/mobile/v1/home/topic',
                data: {
                    pageIndex: topicPageIndex,
                    pageSize: topicPageSize,
                    userId: this.props.params.userId,
                    systemCreateTime: systemCreateTime,
                    excludeTopicIdList: excludeTopicIdList,
                    commentPageIndex: this.state.commentPageIndex,
                    commentPageSize: this.state.commentPageSize
                },
                success: function (data) {
                    if (data && data.list && data.list.length > 0) {
                        this.setState({
                            topicTotal: data.total,
                            topicList: topicList.concat(data.list)
                        });
                    }else {
                        this.setState({
                            hasMore: false
                        });
                    }
                }.bind(this),
                complete: function () {

                }.bind(this)
            });
        }
    }


    handelTopicDelete() {
        this.handleLoad();
    }



    render() {

        return (
            <div className={classNames(style.page, baseStyle.tabbarPage)}>
                <InfiniteScroll
                    next={this.handleNextLoad.bind(this)}
                    hasMore={
                        this.state.hasMore
                    }
                    loader={
                        <p style={{textAlign: 'center'}}>
                            <b>Loading...</b>
                        </p>
                    }
                    endMessage={
                        <p style={{textAlign: 'center'}}>
                            <b>没有更多了</b>
                        </p>
                    }
                >
                    <div className={style.page} style={{minHeight: document.documentElement.clientHeight}}>
                        <div className={style.header}>
                            {
                                this.state.member && this.state.member.userAvatar ?
                                    <img className={style.headerImg} src={constant.image_host + this.state.member.userAvatar} alt=""/>
                                    :
                                    null
                            }
                        </div>
                        <div className={style.headerContentTopBackground}>
                            <div className={style.headerContentMemberIcon}>
                                {
                                    this.state.member && this.state.member.userAvatar ?
                                        <img src={constant.image_host + this.state.member.userAvatar} alt=''/>
                                        :
                                        null
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
                                            null
                                    }
                                </span>
                                <span style={{fontsize:"9px",marginLeft:"16px"}}>来自</span>
                                <span style={{fontsize:"9px",marginLeft:"9px"}}>上海</span>
                                <span style={{fontsize:"9px",marginLeft:"9px"}}>徐汇区(假数据)</span>
                            </p>
                            <p style={{marginLeft:"19px",fontSize:"12px"}}>
                                {
                                    this.state.member && this.state.member.memberSignature ?
                                        this.state.member.memberSignature
                                        :
                                        null
                                }
                            </p>
                        <div className={style.headerContentMemberClear2}></div>
                        <div className={style.headerContentMemberVisit}>
                            <div style={{marginLeft:"5px"}}>
                                {/*<p>{this.state.member.memberSendTopicCount}</p>*/}
                                <p>动态</p>
                            </div>
                            <div>
                                <p>
                                    {/*<Link to={'/member/otherfollow/' +  this.state.member.userId} key={this.state.member.userId} >*/}
                                        {/*{this.state.member.memberFollowCount}*/}
                                    {/*</Link>*/}
                                </p>
                                <p>关注</p>
                            </div>
                            <div>
                                <p>
                                    {/*<Link to={'/member/otherfans/' +  this.state.member.userId} key={this.state.member.userId} >*/}
                                        {/*{this.state.member.memberBeFollowCount}*/}
                                    {/*</Link>*/}
                                </p>
                                <p>粉丝</p>
                            </div>
                            <div>
                                <input className={style.headerContentMemberPrivateMessage}  type="button" value="私信"/>
                            </div>
                            <div>
                                {
                                    this.state.member && this.state.member.memberIsFollow ?
                                        <input className={style.headerContentMemberVisitTa} onClick={this.handleFollow.bind(this)} type="button" value={this.state.member.memberIsFollow ? "已关注": "关注TA"}/>
                                        :
                                        null
                                }
                            </div>
                        </div>
                        <h3 className={style.headerContentMemberTitle}>
                            TA的宠物
                            <span style={{fontSize:"5px",marginLeft:"11px"}}>
                             牛头梗(假数据)
                            </span>
                        </h3>

                        {
                            this.state.topicList.length > 0 ?
                                this.state.topicList.map((topic, index) => (
                                    <TopicIndex topic={topic} key={index} isEdit={true} handelTopicDelete={this.handelTopicDelete.bind(this)}/>
                                ))
                                :
                                null
                        }
                    </div>
                </InfiniteScroll>
            </div>


        );
    }
}


export default connect(() => ({}))(Homepage);
