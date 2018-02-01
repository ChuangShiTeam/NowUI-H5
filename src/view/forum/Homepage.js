import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Notification from 'rc-notification';

import TopicIndex from '../../component/topic/Index';
import InfiniteScroll from 'react-infinite-scroll-component';


import util from '../../common/util';
import http from "../../common/http";
import style from './Homepage.scss';
import constant from "../../common/constant";
import baseStyle from "../../css/Base.scss";
import classNames from 'classnames';
import moment from "moment/moment";

let notification = null;
Notification.newInstance({}, (n) => notification = n);

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
            forum: {},
            forumId: '',
            topicPageIndex: 1,
            topicPageSize: 3,
            topicList: [],
            topicTotal: 0,
        }
    }

    componentDidMount(){
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        this.handleTopicList(this.props.params.forumId);
        this.handleLoad(this.props.params.forumId);

    }

    componentWillReceiveProps(nextProps) {
        if (this.props.route.path === nextProps.route.path) {
            if (this.props.params.forumId !== nextProps.params.forumId) {
                this.setState({
                    isLoad: false,
                    forum: {},
                    forumId: '',
                    topicPageIndex: 1,
                    topicPageSize: 2,
                    topicList: [],
                    topicTotal: 0,
                });
                this.handleLoad(nextProps.params.forumId);
                this.handleTopicList(nextProps.params.forumId);
            }
        }

    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount(){

    }


    handleLoad(forumId) {
        if (forumId) {
            http.request({
                url: '/forum/mobile/v1/home',
                data: {
                    forumId: forumId
                },
                success: function (data) {
                    this.setState({
                        forum: data,
                        forumId: forumId
                    });
                }.bind(this),
                complete: function (){

                }
            });
        }
    }


    handleNextLoad() {
        if (this.state.hasMore) {
            let {topicPageIndex, topicPageSize, topicList, forumId} = this.state;
            let excludeTopicIdList = util.lastWithSame(topicList, 'topicId', 'systemCreateTime');
            let lastTopic = topicList[topicList.length - 1];
            let systemCreateTime = moment(lastTopic.systemCreateTime).format('YYYY-MM-DD HH:mm:ss');
            http.request({
                url: '/forum/mobile/v1/home/topic/list',
                data: {
                    pageIndex: topicPageIndex,
                    pageSize: topicPageSize,
                    forumId: forumId,
                    systemCreateTime: systemCreateTime,
                    excludeTopicIdList: excludeTopicIdList
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




    handleTopicList(forumId) {
        if (forumId) {
            http.request({
                url: '/forum/mobile/v1/home/topic/list',
                data: {
                    forumId: forumId,
                    pageIndex: this.state.topicPageIndex,
                    pageSize: this.state.topicPageSize,
                    systemCreateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
                    excludeTopicIdList: []
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
                complete: function (){
                }.bind(this)
            });
        }
    }



    handleJoin(forumId) {
        http.request({
            url: '/forum/user/follow/mobile/v1/save',
            data: {
                forumId: forumId
            },
            success: function (data) {
                if (data) {
                    notification.notice({
                        content: '加入成功'
                    });
                    this.handleLoad();
                } else {
                    notification.notice({
                        content: '加入失败'
                    });
                }

            }.bind(this),
            complete: function () {

            }
        });
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
                        <div className={style.homePageHeaderTopBackground} >
                     <span>
                         已有{this.state.forum.forumUserFollowCount?this.state.forum.forumUserFollowCount:0}人加入圈子
                     </span>
                            <Link to={'/forum/info/' +  this.state.forum.forumId} key={this.state.forum.forumId} >
                                {
                                    this.state.forum.forumMedia && this.state.forum.forumMedia.filePath ?
                                        <img className={style.homePageHeaderTopBackgroundImg} src={constant.image_host + this.state.forum.forumMedia.filePath} alt=""/>
                                        :
                                        null
                                }
                            </Link>
                        </div>
                        <div className={classNames(style.homePageHeaderMiddleMessage,baseStyle.bottomLine)}>
                            <p style={{fontSize:"16px",textAlign:"center",marginTop:"33px",color:"#323232"}}>{this.state.forum.forumName}</p>
                            <p style={{fontSize:"12px",textAlign:"center",color:"#9d9d9d"}}>{this.state.forum.forumDescription}</p>
                            <p style={{textAlign:"center",marginTop:"10px"}}>
                                {
                                    this.state.forum.memberIsFollowForum ?
                                        '已加入圈子'
                                        :
                                        <input style={{borderRadius:"34px",backgroundColor:"#DEFAFD",width:"86px",height:"27px",boxShadow:" 0px 0px 6px #888888",color:"#c18108"}} onClick={this.handleJoin.bind(this, this.state.forumId)} type="button" value="加入圈子"/>
                                }
                            </p>
                        </div>
                        <div className={style.messages}>
                            <dl className={style.homePageHeaderMessages}>
                                <dt className={style.homePageHeaderMessageLeft}>
                                    {
                                        this.state.forum && this.state.forum.forumModerator && this.state.forum.forumModerator.userId ?
                                            <Link to={this.state.forum.memberIsFollowForum? '/my/publish' :'/member/homepage/' +  this.state.forum.forumModerator.userId} key={this.state.forum.forumModerator.userId} >
                                                {
                                                    this.state.forum.forumModerator.userAvatar && this.state.forum.forumModerator.userAvatar.filePath?
                                                        <img src={constant.image_host + this.state.forum.forumModerator.userAvatar.filePath} alt=''/>
                                                        :
                                                        null
                                                }
                                            </Link>
                                            :
                                            null
                                    }

                                </dt>
                                <dd className={style.homePageHeaderMessageRight}>
                                    <p className={style.homePageHeaderMessageRightTop}>
                                        {
                                            this.state.forum.forumModerator && this.state.forum.forumModerator.userNickName ?
                                                this.state.forum.forumModerator.userNickName
                                                :
                                                '默认用户昵称'
                                        }
                                    </p>
                                    <p className={style.homePageHeaderMessageRightBottom}>
                                        {
                                            this.state.forum.forumModerator && this.state.forum.forumModerator.memberSignature ?
                                                this.state.forum.forumModerator.memberSignature
                                                :
                                                '用户没有个性签名哦'
                                        }
                                    </p>
                                </dd>
                            </dl>
                        </div>
                        <div className={style.nullDiv}></div>


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
