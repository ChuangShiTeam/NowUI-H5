import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import classNames from 'classnames';
import Infinite from 'react-infinite';

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
            isInfiniteLoading: false
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
                pageSize: this.props.topicIndex.topicPageSize
            },
            success: function (data) {
                if (data && data.total > 0) {
                    let topicList = [];
                    if (this.props.topicIndex.topicPageIndex > 1) {
                        topicList = this.props.topicIndex.topicList
                    }
                    this.props.dispatch({
                        type: 'topicIndex',
                        data: {
                            topicTotal: data.total,
                            topicList: topicList.concat(data.list)
                        }
                    });
                }
            }.bind(this),
            complete: function () {
                this.setState({
                    isInfiniteLoading: false
                })
            }.bind(this)
        });
    }

    handleInfiniteLoad() {
        let {topicPageIndex, topicPageSize, topicTotal} = this.props.topicIndex;
        if (topicPageIndex * topicPageSize < topicTotal) {
            new Promise(function (resolve) {
                this.setState({
                    isInfiniteLoading: true
                });
                this.props.dispatch({
                    type: 'topicIndex',
                    data: {
                        topicPageIndex: this.props.topicIndex.topicPageIndex + 1
                    }
                });
                resolve();
            }.bind(this)).then(function () {
                this.handleLoad();
            }.bind(this));
        }
    }


    handelTopicDelete() {
        new Promise(function (resolve) {
            this.props.dispatch({
                type: 'topicIndex',
                data: {
                    topicPageIndex: 1
                }
            });

            resolve();
        }.bind(this)).then(function () {
            this.handleLoad();
        }.bind(this));
    }

    render() {
        return (
            <div className={classNames(style.page, baseStyle.tabbarPage)} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        <div className={style.headerContentLeft}>
                            <Link to={'/member/homepage'} key={this.state.userId} className={style.headerContentLeft}>
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
                        <Infinite elementHeight={document.documentElement.clientHeight * 0.8}
                                  containerHeight={document.documentElement.clientHeight}
                                  infiniteLoadBeginEdgeOffset={300}
                                  onInfiniteLoad={this.handleInfiniteLoad.bind(this)}
                                  loadingSpinnerDelegate={
                                      this.state.isInfiniteLoading ?
                                          <div className={style.infiniteLoading}>Loading...</div>
                                          :
                                          this.props.topicIndex.topicPageIndex * this.props.topicIndex.topicPageSize >= this.props.topicIndex.topicTotal ?
                                              <div className={style.infiniteMore}>没有更多了</div>
                                              :
                                              null
                                  }
                                  isInfiniteLoading={this.state.isInfiniteLoading}
                        >
                            {
                                this.props.topicIndex.topicList.map((topic, index) => (
                                    <TopicIndex topic={topic} key={index} isEdit={true} handelTopicDelete={this.handelTopicDelete.bind(this)}/>
                                ))
                            }
                        </Infinite>
                        :
                        null
                }

            </div>
        )
    }
}

Index.propTypes = {}

export default connect((store) => ({
    topicIndex: store.topicIndex
}))(Index);
