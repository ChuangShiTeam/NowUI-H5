import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import classNames from 'classnames';
import Notification from 'rc-notification';

import util from '../../common/util';
import http from '../../common/http';
import storage from '../../common/storage';
import constant from '../../common/constant';
import TopicIndex from '../../component/topic/Index';

import style from './Index.scss';

let interestSwiper;
let notification = null;
Notification.newInstance({}, (n) => notification = n);

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        let memberVisitForum = storage.getMemberVisitForum();

        if (memberVisitForum === null || memberVisitForum === 'undefined') {
            http.request({
                url: '/wawi/member/visit/forum/mobile/v1/find',
                data: {},
                success: function (data) {
                    if (data.isVisit) {
                        storage.setMemberVisitForum(data.isVisit);
                        if (data.isVisit === 'false') {
                            this.props.history.push({
                                pathname: '/forum/skip',
                                query: {}
                            });
                        } else {
                            this.handleLoad();
                        }
                    } else {
                        this.handleLoad();
                    }
                }.bind(this),
                complete: function () {

                }
            });
        } else {
            this.handleLoad();
        }
    }

    handleLoad() {
        this.handleLoadJoinList(this.props.forumIndex.forumJoinPageIndex);
        this.handleLoadRecommendList();
        this.handleLoadHotTopic(this.props.forumIndex.hotTopicPageIndex);
    }

    handleLoadHotTopic(hotTopicPageIndex) {
        http.request({
            url: '/topic/mobile/v1/home/list',
            data: {
                pageIndex: this.porps.forumIndex.hotTopicPageIndex,
                pageSize: this.porps.forumIndex.hotTopicPageSize
            },
            success: function (data) {
                if (data.total > 0) {
                    let hotTopicList = this.props.forumIndex.hotTopicList;
                    this.props.dispatch({
                        type: 'forumIndex',
                        data: {
                            hotTopicPageIndex: hotTopicPageIndex,
                            hotTopicTotal: data.total,
                            hotTopicList: hotTopicList.concat(data.list)
                        }
                    });
                }
            }.bind(this),
            complete: function () {

            }
        });
    }

    handleLoadRecommendList() {
        http.request({
            url: '/forum/mobile/v1/recommend/list',
            data: {
                pageSize: 8
            },
            success: function (data) {
                if (data && data.length > 0) {
                    new Promise(function (resolve) {
                        this.props.dispatch({
                            type: 'forumIndex',
                            data: {
                                forumRecommendList: data
                            }
                        });

                        resolve();
                    }.bind(this)).then(function () {
                        interestSwiper = new window.Swiper('.' + style.interestContent, {
                            slidesPerView: 'auto',
                            freeMode: true,
                            freeModeFluid: true,
                            spaceBetween: 0
                        });
                    });
                }
            }.bind(this),
            complete: function () {

            }
        });
    }
    handleLoadJoinList(forumJoinPageIndex) {
        http.request({
            url: '/forum/user/follow/mobile/v1/list',
            data: {
                pageIndex: forumJoinPageIndex,
                pageSize: this.props.forumIndex.forumJoinPageSize
            },
            success: function (data) {
                if (data.total > 0) {
                    this.props.dispatch({
                        type: 'forumIndex',
                        data: {
                            forumJoinPageIndex: forumJoinPageIndex,
                            forumJoinTotal: data.total,
                            forumJoinList: data.list
                        }
                    });
                }
            }.bind(this),
            complete: function () {

            }
        });
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {
        this.handleDestroySwiper();
    }

    handleDestroySwiper() {
        if (interestSwiper) {
            interestSwiper.destroy();
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

    handleTopicDelete() {
        this.handleLoadHotTopic(1);
    }

    render() {
        return (
            <div className={style.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        <div className={style.headerContentLeft}>
                            <Link to="/forum/add" className={style.headerContentLeft}>
                                <img className={style.headerContentLeftAdd}
                                     src={require('../../image/forum-add.png')}
                                     alt=''/>
                            </Link>
                        </div>
                        <div className={style.headerContentCenter}>
                            <span className={style.headerContentCenterForum}>圈子</span><Link to="/topic/index" className={style.headerContentCenterTopic}>动态</Link>
                        </div>
                        <div className={style.headerContentRight}>
                            <Link to="/forum/search" className={style.headerContentRight}>
                                <img className={style.headerContentLeftSearch}
                                     src={require('../../image/forum-search.png')}
                                     alt=''/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={style.join}>
                    <div className={style.joinHeader}>
                        <div className={style.joinHeaderLeft}>
                            <img className={style.joinHeaderLeftIcon}
                                 src={require('../../image/forum-join.png')}
                                 alt=''/>
                        </div>
                        <div className={style.joinHeaderCenter}>
                            我加入的圈子
                        </div>
                    </div>
                    <div className={style.joinContent}>
                        {
                            this.props.forumIndex.forumJoinList.map(function (forum, index) {
                                return (
                                    <Link to={'/forum/homepage/' + forum.forumId} key={forum.forumId} style={index === 0 ? {} : {marginTop: '12px'}}
                                         className={style.joinContentList}>
                                        <div className={style.joinContentListLeft}>
                                            <img className={style.joinContentListLeftIcon}
                                                 src={constant.image_host + forum.forumMedia.filePath}
                                                 alt=''/>
                                        </div>
                                        <div className={style.joinContentListCenter}>
                                            <div className={style.joinContentListCenterHeader}>
                                                <div className={style.joinContentListCenterHeaderName}>
                                                    {forum.forumName}
                                                </div>
                                                <div className={style.joinContentListCenterHeaderTop}>
                                                    {forum.forumIsTop ? '置顶': ''}
                                                </div>
                                            </div>
                                            <div className={style.joinContentListCenterSummary}>
                                                {forum.forumDescription}
                                            </div>
                                            <div className={style.joinContentListCenterFooter}>
                                                <div className={style.joinContentListCenterFooterLeft}>
                                                    <img className={style.joinContentListCenterFooterLeftCrown}
                                                         src={require('../../image/crown.png')}
                                                         alt=''/>
                                                    {
                                                        forum.forumModerator.userAvatar ?
                                                            <img className={style.joinContentListCenterFooterLeftAvatar}
                                                                 src={constant.image_host + forum.forumModerator.userAvatar}
                                                                 alt=''/>
                                                            :
                                                            <img className={style.joinContentListCenterFooterLeftAvatar}
                                                                 src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/15/h/15"
                                                                 alt=''/>

                                                    }
                                                </div>
                                                <div className={style.joinContentListCenterFooterCenter}>
                                                    {forum.forumModerator.userNickName}
                                                </div>
                                                <div className={style.joinContentListCenterFooterRight}>
                                                    今日最新话题数
                                                    <span className={style.joinContentListCenterFooterRightNumber}>{forum.forumTodayTopicCount}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                        <div className={style.joinContentMore}>
                            查看更多
                            <img className={style.joinContentMoreIcon}
                                 src={require('../../image/forum-more.png')}
                                 alt=''/>
                        </div>
                    </div>
                </div>
                <div className={style.interest}>
                    <div className={style.interestHeader}>
                        <div className={style.interestHeaderLeft}>
                            <img className={style.interestHeaderLeftIcon}
                                 src={require('../../image/interest.png')}
                                 alt=''/>
                        </div>
                        <div className={style.interestHeaderCenter}>
                            你可能感兴趣的圈子
                        </div>
                    </div>
                    {
                        this.props.forumIndex.forumRecommendList.length > 0 ?
                            <div className={classNames(style.interestContent, 'swiper-container')}>
                                <div className={classNames(style.interestContentwrapper, 'swiper-wrapper')}>
                                    {
                                        this.props.forumIndex.forumRecommendList.map((forum, index) => {
                                            return (
                                                <div className={classNames(style.interestContentwrapperCard, 'swiper-slide')} key={forum.forumId}>
                                                    <Link to={'/forum/homepage/' + forum.forumId} key={forum.forumId} >
                                                        <div className={style.interestContentwrapperCardAvatar}>
                                                        <img className={style.interestContentwrapperCardAvatar}
                                                             src={constant.image_host + forum.forumMedia.filePath}
                                                             alt=''/>
                                                        </div>
                                                        <div className={style.interestContentwrapperCardName}>{forum.forumName}</div>
                                                        <div className={style.interestContentwrapperCardSummary}>{forum.forumDescription}</div>
                                                    </Link>
                                                    <div className={style.interestContentwrapperCardImage}>
                                                        <img className={style.interestContentwrapperCardImageItem}
                                                             src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/44/h/44'
                                                             alt=''/>
                                                        <img className={style.interestContentwrapperCardImageItem}
                                                             src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/44/h/44'
                                                             alt=''/>
                                                        <img className={style.interestContentwrapperCardImageItem}
                                                             src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/44/h/44'
                                                             alt=''/>
                                                    </div>
                                                    <div className={style.interestContentwrapperCardButton}>
                                                        <div className={style.interestContentwrapperCardButtonJoin} onClick={this.handleJoin.bind(this, forum.forumId)}>加入</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
                <div className={style.interest}>
                    <div className={style.interestHeader}>
                        <div className={style.interestHeaderLeft}>

                        </div>
                        <div className={style.interestHeaderCenter}>
                            热门动态
                        </div>
                    </div>
                    {
                        this.props.forumIndex.hotTopicList.map((topic, index) => <TopicIndex topic={topic} key={index} handleDelete={this.handleTopicDelete.bind(this)}/>)
                    }
                </div>
            </div>
        );
    }
}

Index.propTypes = {};

export default connect((store) => ({
    forumIndex: store.forumIndex
}))(Index);
