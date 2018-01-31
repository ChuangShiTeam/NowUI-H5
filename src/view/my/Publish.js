import React, {Component} from 'react';
import {connect} from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import {Link} from 'react-router';


import TopicIndex from '../../component/topic/Index';
import baseStyle from '../../css/Base.scss';


import util from '../../common/util';

import style from './Publish.scss';
import http from "../../common/http";
import constant from "../../common/constant";
import classNames from "classnames";


class Publish extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            topicPageIndex: 1,
            topicPageSize: 2,
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
                pageIndex: 1,
                pageSize: this.state.topicPageSize
            },
            success: function (data) {
                let topicList = this.state.topicList;
                this.setState({
                    topicTotal: data.total,
                    topicList: topicList.concat(data.list)
                });

                if (data && data.total > 0) {
                    this.props.dispatch({
                        type: 'topicIndex',
                        data: {
                            topicPageIndex: 1,
                            topicTotal: data.total,
                            topicList: data.list
                        }
                    });
                }

            }.bind(this),
            complete: function () {
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


    handleNextLoad() {
        let {topicPageIndex, topicPageSize} = this.state;
        http.request({
            url: '/topic/mobile/v1/self/home/topic',
            data: {
                pageIndex: topicPageIndex + 1,
                pageSize: topicPageSize
            },
            success: function (data) {
                if (data && data.total > 0) {
                    let topicList = this.state.topicList;
                    this.setState({
                        topicPageIndex: topicPageIndex + 1,
                        topicTotal: data.total,
                        topicList: topicList.concat(data.list)
                    });

                }
            }.bind(this),
            complete: function () {

            }.bind(this)
        });
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
                        (this.state.topicPageIndex * this.state.topicPageSize) < this.state.topicTotal
                    }
                    loader={
                        <p style={{textAlign: 'center'}}>
                            <b>Loading...</b>
                        </p>
                    }
                    endMessage={
                        <p style={{textAlign: 'center',position:"relative"}}>
                            <b>没有更多了</b>
                        </p>
                    }
                >
                    <div className={baseStyle.page} style={{minHeight: document.documentElement.clientHeight}}>
                        <div className={style.header}>
                            <img className={style.backgroundImg}  src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?listView/1/w/320/h/110" alt=""/>

                        </div>
                        <div className={style.photo}>
                            {
                                this.state.member && this.state.member.userAvatar ?
                                    <img src={constant.image_host + this.state.member.userAvatar.filePath} alt=''/>
                                    :
                                    <img  src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?listView/1/w/72/h/72" alt=""/>
                            }
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
                        <div className={style.contentsList}>
                        {
                            this.state.topicList.length > 0 ?
                                this.state.topicList.map((topic, index) => (
                                    <TopicIndex topic={topic} key={index}  isEdit={true} handelTopicDelete={this.handelTopicDelete.bind(this)}/>
                                ))
                                :
                                null
                        }

                        </div>
                    </div>

                </InfiniteScroll>


        );
    }
}
export default connect(() => ({}))(Publish);


