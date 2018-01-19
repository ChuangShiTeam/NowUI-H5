import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import classNames from 'classnames';

import util from '../../common/util';
import http from '../../common/http';
import storage from '../../common/storage';
import constant from '../../common/constant';

import style from './Index.scss';

let interestSwiper;

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            forumJoinPageIndex: 1,
            forumJoinPageSize: 3,
            forumJoinTotal: 0,
            forumJoinList: [],
            forumRecommendList: [],
            hotTopicList: []
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
        this.handleLoadJoinList();
        interestSwiper = new window.Swiper('.' + style.interestContent, {
            slidesPerView: 3,
            loop:true,
            tdFlow: {
                rotate : 0,
                stretch :-30,
                depth: 200,
                modifier : 1,
                shadows : false
            }
        });
    }

    handleLoadJoinList() {
        http.request({
            url: '/forum/user/follow/mobile/v1/list',
            data: {
                pageIndex: this.state.forumJoinPageIndex,
                pageSize: this.state.forumJoinPageSize
            },
            success: function (data) {
                this.setState({
                    forumJoinTotal: data.total,
                    forumJoinList: data.list
                });
            }.bind(this),
            complete: function () {

            }
        });

    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {
        if (interestSwiper) {
            interestSwiper.destroy();
        }
    }

    render() {
        return (
            <div className={style.page}>
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
                            this.state.forumJoinList.map(function (forum, index) {
                                return (
                                    <Link to={'/forum/info/' + forum.forumId} key={index} style={index == 0 ? {} : {marginTop: '12px'}}
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
                                                    <img className={style.joinContentListCenterFooterLeftAvatar}
                                                         src={constant.image_host + forum.forumModerator.userAvatar}
                                                         alt=''/>
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
                                 src={require('../../image/forum-join.png')}
                                 alt=''/>
                        </div>
                        <div className={style.interestHeaderCenter}>
                            你可能感兴趣的圈子
                        </div>
                    </div>
                    <div className={classNames(style.interestContent, 'swiper-container')}>
                        <div className={classNames(style.interestContentwrapper, 'swiper-wrapper')}>
                            <div className={classNames(style.interestContentwrapperList, 'swiper-slide')}>
s
                            </div>
                            <div className={classNames(style.interestContentwrapperList, 'swiper-slide')}>
s
                            </div>
                            <div className={classNames(style.interestContentwrapperList, 'swiper-slide')}>
s
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

Index.propTypes = {};

export default connect((store) => ({
    forumIndex: store.forumIndex
}))(Index);
