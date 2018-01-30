import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import util from '../../common/util';

import style from './Like.scss';
import baseStyle from '../../css/Base.scss';
import classNames from "classnames";
import http from "../../common/http";
import constant from "../../common/constant";

class Like extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            userLikeList: [],
            userLikePageIndex: 1,
            userLikePageSize: 10,
            userLikeTotal: 0
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

        let topicId = this.props.params.topicId;
        if (topicId) {
            http.request({
                url: '/topic/user/like/mobile/v1/list',
                data: {
                    topicId: topicId,
                    pageIndex: this.state.userLikePageIndex,
                    pageSize: this.state.userLikePageSize
                },
                success: function (data) {
                    this.setState({
                        userLikeList: data.list,
                        userLikeTotal: data.total
                    });
                    console.log(data)

                }.bind(this),
                complete: function () {

                }
            });
        }
    }


    handleFollow(userId, index) {
        http.request({
            url: this.state.userLikeList[index].memberIsFollow ? '/member/follow/mobile/v1/delete' : '/member/follow/mobile/v1/save',
            data: {
                followUserId: userId
            },
            success: function (data) {
                if (data){
                    let userLikeList = this.state.userLikeList;
                    let userLike = userLikeList[index];
                    userLike.memberIsFollow = !userLike.memberIsFollow;
                    userLikeList[index] = userLike;
                    this.setState({
                        userLikeList: userLikeList
                    });
                }
            }.bind(this),
            complete: function () {
            }.bind(this)
        });
    }

    render() {
        return (
            <div className={baseStyle.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerLeft}>赞过的人</div>
                </div>
                {
                    this.state.userLikeList.map(
                        (userLike,index) =>
                            <div className={classNames(style.list, baseStyle.bottomLine)} key={userLike.userId}>
                                <Link to={userLike.topicUserLikeIsSelf ? '/my/publish' : '/member/homepage/' +  userLike.userId} key={userLike.userId} >
                                    <div className={style.listLeft}>
                                        {
                                            userLike && userLike.userAvatar ?
                                                <img className={style.listLeftIcon} src={constant.image_host + userLike.userAvatar.filePath} alt='' key={index}/>
                                                :
                                                <img className={style.listLeftIcon} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=''/>
                                        }
                                    </div>
                                </Link>

                                <div className={style.listCenter}>
                                    {
                                        userLike && userLike.userNickName ?
                                            <span>
                                                <Link to={userLike.topicUserLikeIsSelf ? '/my/publish' : '/member/homepage/' +  userLike.userId}  key={userLike.userId} >
                                                    {userLike.userNickName}
                                                </Link>
                                            </span>
                                            :
                                            <span>
                                                <Link to={userLike.topicUserLikeIsSelf ? '/my/publish' : '/member/homepage/' +  userLike.userId}  key={userLike.userId} >
                                                    '默认昵称'
                                                </Link>
                                            </span>
                                    }

                                </div>

                                <div className={style.listRight}>
                                    {
                                        userLike.topicUserLikeIsSelf ?
                                            null
                                            :
                                            userLike.memberIsFollow ?
                                                <div className={style.listRightFollowActive}>
                                                    <span onClick={this.handleFollow.bind(this, userLike.userId, index)}>已关注</span>
                                                </div>
                                                :
                                                <div className={style.listRightFollow}>
                                                    <span onClick={this.handleFollow.bind(this, userLike.userId, index)}>+ 关注</span>
                                                </div>

                                    }
                                </div>
                            </div>
                    )
                }

            </div>
        );
    }
}

export default connect(() => ({}))(Like);
