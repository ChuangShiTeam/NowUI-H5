import React, {Component} from 'react';
import {connect} from 'react-redux';
import Infinite from 'react-infinite';
import {Link} from 'react-router';


import TopicIndex from '../../component/topic/Index';
import baseStyle from '../../css/Base.scss';


import util from '../../common/util';

import style from './Publish.scss';
import http from "../../common/http";
import constant from "../../common/constant";


class Publish extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            topicPageIndex: 1,
            topicPageSize: 3,
            topicTotal: 0,
            topicList: [],
            isInfiniteLoading: false,

            member: {}
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
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
        http.request({
            url: '/topic/mobile/v1/self/home/topic',
            data: {
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

    handleLoadMemberInfo() {
            http.request({
                url: '/topic/mobile/v1/home/self/info',
                data: {
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
            <div className={baseStyle.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <img className={style.backgroundImg}  src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?listView/1/w/320/h/110" alt=""/>
                    <div className={style.photo}>
                        {
                            this.state.member && this.state.member.userAvatar ?
                                <img src={constant.image_host + this.state.member.userAvatar.filePath} alt=''/>
                                :
                                <img  src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?listView/1/w/72/h/72" alt=""/>
                        }

                    </div>
                </div>
             <div className={style.center}>
                 <div className={style.messages}>
                     <span className={style.messageTop}>
                         {
                             this.state.member && this.state.member.userNickName ?
                                 this.state.member.userNickName
                                 :
                                 'NickName'
                         }
                     </span>
                     <span className={style.messagesCenter}>
                         {
                             this.state.member && this.state.member.memberSignature ?
                                 this.state.member.memberSignature
                                 :
                                 '天气不错呀'
                         }
                     </span>
                     <span className={style.messagesBottom}>来自 上海 徐汇区</span>
                     <div className={style.messagesNumber}>
                        <div>
                            <span className={style.messagesNumberTop}>{this.state.member.memberSendTopicCount}</span>
                            <span className={style.messagesNumberBottom}>动态</span>
                        </div>
                         <div>
                             <span className={style.messagesNumberTop} >
                                 <Link to={'/member/follow' } key={1} >
                                    {this.state.member.memberFollowCount}
                                 </Link>
                             </span>
                             <span className={style.messagesNumberBottom}> 关注</span>
                         </div>
                         <div>
                             <span className={style.messagesNumberTop}>
                                 <Link to={'/member/fans' } key={2} >
                                    {this.state.member.memberBeFollowCount}
                                 </Link>
                             </span>
                             <span className={style.messagesNumberBottom}>粉丝</span>
                         </div>
                     </div>
                 </div>
             </div>
             <div className={style.myPet}>
                 <span className={style.myPetLeft}>我的宠物</span>
                 <span className={style.myPetRight}>中华田园猫</span>
             </div>
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
        );
    }
}
export default connect(() => ({}))(Publish);


