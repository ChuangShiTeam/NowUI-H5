import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";

import ForumIndex from '../../component/forum/Index';

import util from '../../common/util';

import style from './My.scss';
import http from "../../common/http";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            forumJoinList: [],
            forumJoinTotal: 0,
            forumJoinPageIndex: 1,
            forumJoinPageSize: 10
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        this.handleLoadJoinList();
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

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
                    forumJoinList: data.list,
                    forumJoinTotal: data.total
                });
            }.bind(this),
            complete: function () {

            }
        });
    }

    handleTop(forumId) {
        http.request({
            url: '/forum/user/follow/mobile/v1/top',
            data: {
                forumId: forumId
            },
            success: function (data) {
                if (data) {
                    this.handleLoadJoinList();
                }
            }.bind(this),
            complete: function () {

            }
        });
    }


    render() {
        return (
            <div className={style.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerLeft}>
                        <img className={style.headerLeftIcon}
                             src={require('../../image/forum-join.png')}
                             alt=''/>
                    </div>
                    <div className={style.headerCenter}>
                        我加入的圈子
                    </div>
                </div>
                <div className={style.content} style={{minHeight: document.documentElement.clientHeight - 46 - 12 - 8}}>
                    {
                        this.state.forumJoinList.map(function (forum, index) {
                            return (
                                <ForumIndex key={index} forum={forum} forumIsTop={index !== 0} handleTop={this.handleTop.bind(this)}/>
                            )
                        }.bind(this))
                    }
                </div>
            </div>
        );
    }
}

List = createForm({})(List);

export default connect((store) => ({
    forumMy: store.forumMy
}))(List);
