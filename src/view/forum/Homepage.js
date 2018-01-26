import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Infinite from 'react-infinite';
import Notification from 'rc-notification';

import TopicIndex from '../../component/topic/Index';

import util from '../../common/util';
import http from "../../common/http";
import style from './Homepage.scss';
import constant from "../../common/constant";

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
            isInfiniteLoading: false
        }
    }

    componentDidMount(){
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        this.handleLoad(this.props.params.forumId);
        this.handleTopicList(this.props.params.forumId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.route.path === nextProps.route.path) {
            if (this.props.params.forumId !== nextProps.params.forumId) {
                this.setState({
                    isLoad: false,
                    forum: {},
                    forumId: '',
                    topicPageIndex: 1,
                    topicPageSize: 3,
                    topicList: [],
                    topicTotal: 0,
                    isInfiniteLoading: false
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


    handleTopicList(forumId) {
        if (forumId) {
            http.request({
                url: '/forum/mobile/v1/home/topic/list',
                data: {
                    forumId: forumId,
                    pageIndex: this.state.topicPageIndex,
                    pageSize: this.state.topicPageSize
                },
                success: function (data) {
                    let topicList = this.state.topicList;
                    this.setState({
                        topicList: topicList.concat(data.list),
                        topicTotal: data.total
                    });
                }.bind(this),
                complete: function (){
                    this.setState({
                        isInfiniteLoading: false
                    })
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
    };

    render() {
        return (
            <div className={style.page} style={{minHeight: document.documentElement.clientHeight}}>
                 <div className={style.homePageHeaderTopBackground}>
                     <span>
                         已有{this.state.forum.forumUserFollowCount?this.state.forum.forumUserFollowCount:0}人加入圈子
                     </span>
                 </div>




                
                 <div className={style.homePageHeaderMiddleMessage}>
                     <p style={{fontSize:"20px",textAlign:"center",paddingTop:"33px"}}>{this.state.forum.forumName}</p>
                     <p style={{fontSize:"10px",textAlign:"center"}}>{this.state.forum.forumDescription}</p>
                     <p style={{textAlign:"center",marginTop:"10px"}}>
                         {
                             this.state.forum.memberIsFollowForum ?
                                 '已加入圈子'
                                 :
                                 <input style={{borderRadius:"34px",backgroundColor:"#DEFAFD",width:"86px",height:"27px",boxShadow:" 0px 0px 6px #888888"}} onClick={this.handleJoin.bind(this, this.state.forumId)} type="button" value="加入圈子"/>
                         }

                     </p>
                     <p style={{borderBottom:"1px solid #DDDDDD ",margin:"14px"}}></p>
                 </div>
                 <div>
                     <dl className={style.homePageHeaderMessages}>
                         <dt className={style.homePageHeaderMessageLeft}>
                             {
                                 this.state.forum && this.state.forum.forumModerator && this.state.forum.forumModerator.userId ?
                                     <Link to={'/member/homepage/' +  this.state.forum.forumModerator.userId} key={this.state.forum.forumModerator.userId} >
                                         {
                                             this.state.forum.forumModerator.userAvatar ?
                                                 <img src={constant.image_host + this.state.forum.forumModerator.userAvatar} alt=''/>
                                                 :
                                                 <img src={require('../../image/topicItem.png')} alt='' />
                                         }
                                     </Link>
                                     :
                                     null
                             }

                         </dt>
                         <dd className={style.homePageHeaderMessageRight}>
                             <p style={{color:"#000000",fontSize:"12px"}}>
                                 {
                                     this.state.forum.forumModerator && this.state.forum.forumModerator.userNickName ?
                                         this.state.forum.forumModerator.userNickName
                                         :
                                         '默认用户昵称'
                                 }
                             </p>
                             <p style={{color:"#000000",fontSize:"9px",marginTop:"2px"}}>
                                 {
                                     this.state.forum && this.state.forum.forumDescription ?
                                         this.state.forum.forumDescription
                                         :
                                         '用户没有个性签名哦'
                                 }
                             </p>
                         </dd>
                     </dl>
                 </div>
                <div className={style.nullDiv}></div>
                <div>
                    {
                        this.state.topicList.length > 0 ?
                            <Infinite elementHeight={document.documentElement.clientHeight * 0.8}
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

            </div>


        );
    }
}

export default connect(() => ({}))(Homepage);
