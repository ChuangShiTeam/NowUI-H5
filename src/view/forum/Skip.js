import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import classNames from 'classnames';

import util from '../../common/util';
import http from '../../common/http';
import constant from '../../common/constant';

import style from './Skip.scss';
import baseStyle from '../../css/Base.scss';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            forumList: []
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        http.request({
            url: '/forum/mobile/v1/recommend/list',
            data: {
                pageSize: 3
            },
            success: function (data) {
                let forumList = data;
                if (forumList && forumList.length > 0) {
                    forumList = forumList.map(forum => {
                        forum.selected = false;
                        return forum;
                    });
                    this.setState({
                        forumList: forumList
                    })
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

    }

    handleSelect(index) {
        let forumList = this.state.forumList;
        let forum = forumList[index];
        forum.selected = !forum.selected;
        forumList[index] = forum;
        this.setState({
            forumList: forumList
        });
    }

    handleSubmit() {
        let forumList = this.state.forumList;
        if (forumList && forumList.length > 0) {
            let forumIdList = forumList.filter(forum => forum.selected).map(forum => forum.forumId);
            if (forumIdList && forumIdList.length > 0) {
                http.request({
                    url: '/forum/user/follow/mobile/v1/batch/save',
                    data: {
                        forumIdList: forumIdList
                    },
                    success: function (data) {
                        this.props.history.push({
                            pathname: '/forum/index',
                            query: {}
                        });
                    }.bind(this),
                    complete: function () {

                    }
                });
            } else {
                this.props.history.push({
                    pathname: '/forum/index',
                    query: {}
                });
            }
        } else {
            this.props.history.push({
                pathname: '/forum/index',
                query: {}
            });
        }
    }

    render() {
        return (
            <div className={style.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.skip}><Link to="/forum/index">跳过</Link></div>
                <div className={style.title}>选择加入你也许感兴趣的圈子</div>
                <div className={style.summary}>为你私人定制你的宠物部落</div>
                <div className={style.list}>
                    {
                        this.state.forumList.length > 0 ?
                        this.state.forumList.map((forum, index) =>
                            <div key={index} id={forum.id} className={classNames(style.listItem, baseStyle.bottomLine)}
                                 onClick={this.handleSelect.bind(this, index)}>
                                <div className={style.listItemLeft}>
                                    <img className={style.listItemLeftIcon} src={constant.image_host + forum.forumMedia.filePath } alt=''/>
                                </div>
                                <div className={style.listItemCenter}>
                                    <div className={style.listItemCenterName}>{forum.forumName}</div>
                                    <div className={style.listItemCenterSummary}>{forum.forumDescription}</div>
                                </div>
                                <div className={style.listItemRight}>
                                    <img className={style.listItemRightSelect}
                                         src={forum.selected ? require('../../image/skip-hook-icon.png') : require('../../image/skip-hook-false-icon.png')}
                                         alt=''/>
                                </div>
                            </div>
                        )
                        :
                        null
                    }
                </div>
                <div className={style.footer}>
                    <div className={style.submit} onClick={this.handleSubmit.bind(this)}>进入圈子</div>
                </div>
            </div>
        );
    }
}

Index.propTypes = {};

export default connect((store) => ({
    forumSkip: store.forumSkip
}))(Index);
