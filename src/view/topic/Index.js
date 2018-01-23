import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import classNames from 'classnames';

import TopicIndex from '../../component/topic/Index';

import util from '../../common/util';
import http from '../../common/http';
import constant from '../../common/constant';

import style from './Index.scss';
import baseStyle from '../../css/Base.scss';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            topicPageIndex: 1,
            topicPageSize: 10,
            topicTotal: 0,
            topicList: []
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
                pageIndex: this.state.topicPageIndex,
                pageSize: this.state.topicPageSize
            },
            success: function (data) {
                this.setState({
                    topicTotal: data.total,
                    topicList: data.list
                });
                console.log(data)
            }.bind(this),
            complete: function () {

            }
        });
    }

    render() {
        return (
            <div className={classNames(style.page, baseStyle.tabbarPage)} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        <div className={style.headerContentLeft}>
                            <Link to="/forum/add" className={style.headerContentLeft}>
                                <img className={style.headerContentLeftUser}
                                     src={require('../../image/topic-user.png')}
                                     alt=''/>
                            </Link>
                        </div>
                        <div className={style.headerContentCenter}>
                            <Link to="/forum/index" className={style.headerContentCenterForum}>圈子</Link><span className={style.headerContentCenterTopic}>动态</span>
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
                <Link to="/topic/add" className={style.add} style={{marginLeft: (document.documentElement.clientWidth > 600 ? 300 : document.documentElement.clientWidth / 2) - 60 + 'px'}}>
                    <img className={style.addImage}
                         src={require('../../image/forum-add.png')}
                         alt=''/>
                </Link>
                {
                    this.state.topicList.map((topic, index) => <TopicIndex topic={topic} key={index}/>)
                }
            </div>
        );
    }
}

Index.propTypes = {};

export default connect(() => ({}))(Index);
