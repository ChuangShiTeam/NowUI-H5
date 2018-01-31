import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import classNames from 'classnames';
import InfiniteScroll from 'react-infinite-scroll-component';
import moment from 'moment';

import TopicIndex from '../../component/topic/Index';

import util from '../../common/util';
import http from '../../common/http';

import style from './Index.scss';
import baseStyle from '../../css/Base.scss';


class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            hasMore: false
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();
        this.handleLoad();
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

    }

    handleLoad() {
        http.request({
            url: '/topic/mobile/v1/home/list',
            data: {
                pageIndex: this.props.topicIndex.topicPageIndex,
                pageSize: this.props.topicIndex.topicPageSize,
                systemCreateTime: moment().format('YYYY-MM-DD HH:mm:ss'),
                excludeTopicIdList: []
            },
            success: function (data) {
                if (data && data.list && data.list.length > 0) {
                    let topicList = data.list;
                    let topicTotal = data.total;
                    this.setState({
                        hasMore: topicList.length < topicTotal
                    });
                    this.props.dispatch({
                        type: 'topicIndex',
                        data: {
                            topicTotal: topicTotal,
                            topicList: topicList
                        }
                    });
                }
            }.bind(this),
            complete: function () {

            }
        });
    }

    handleNextLoad() {
        if (this.state.hasMore) {
            let {topicPageIndex, topicPageSize, topicList} = this.props.topicIndex;
            let excludeTopicIdList = util.lastWithSame(topicList, 'topicId', 'systemCreateTime');
            let lastTopic = topicList[topicList.length - 1];
            let systemCreateTime = moment(lastTopic.systemCreateTime).format('YYYY-MM-DD HH:mm:ss');
            http.request({
                url: '/topic/mobile/v1/home/list',
                data: {
                    pageIndex: topicPageIndex,
                    pageSize: topicPageSize,
                    systemCreateTime: systemCreateTime,
                    excludeTopicIdList: excludeTopicIdList
                },
                success: function (data) {
                    if (data && data.list && data.list.length > 0) {
                        this.props.dispatch({
                            type: 'topicIndex',
                            data: {
                                topicTotal: data.total,
                                topicList: topicList.concat(data.list)
                            }
                        });
                    } else {
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
                    hasMore={this.state.hasMore}
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
                    <div style={{minHeight: document.documentElement.clientHeight}}>
                        <div className={style.header}>
                            <div className={style.headerContent}>
                                <div className={style.headerContentLeft}>
                                    <Link to={'/my/publish'} key={this.state.userId} className={style.headerContentLeft}>
                                        <img className={style.headerContentLeftUser}
                                             src={require('../../image/topic-user.png')}
                                             alt=''/>
                                    </Link>
                                </div>
                                <div className={style.headerContentCenter}>
                                    <Link to="/forum/index" className={style.headerContentCenterForum}>圈子</Link><span
                                    className={style.headerContentCenterTopic}>动态</span>
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
                        <Link to="/topic/add" className={style.add}
                              style={{marginLeft: (document.documentElement.clientWidth > 600 ? 300 : document.documentElement.clientWidth / 2) - 60 + 'px'}}>
                            <img className={style.addImage}
                                 src={require('../../image/forum-add.png')}
                                 alt=''/>
                        </Link>
                        {
                            this.props.topicIndex.topicList.length > 0 ?
                                this.props.topicIndex.topicList.map((topic, index) => (
                                    <TopicIndex topic={topic} key={index} isEdit={true} handelTopicDelete={this.handelTopicDelete.bind(this)}/>
                                ))
                                :
                                null
                        }
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

Index.propTypes = {}

export default connect((store) => ({
    topicIndex: store.topicIndex
}))(Index);
