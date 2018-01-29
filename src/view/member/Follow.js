import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import baseStyle from '../../css/Base.scss';
import {Link} from 'react-router';
import http from "../../common/http";
import constant from "../../common/constant";
import util from '../../common/util';

import style from './Follow.scss';


class Follow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            followUserList: [ 1,2],
            followUserPageIndex: 1,
            followUserPageSize: 10,
            followUserTotal: 0
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

    }
    handleLoad() {

        let topicId = this.props.params.topicId;
        console.log('topic =')
        console.log(topicId)
        if (topicId) {
            http.request({
                url: '/member/follow/like/mobile/v1/list',
                data: {
                    topicId: topicId,
                    pageIndex: this.state.followUserPageIndex,
                    pageSize: this.state.followUserPageIndex

                },
                success: function (data) {
                    this.setState({
                        followUserList: data.list,
                        followUserTotal: data.total
                    });
                    console.log('data=')
                    console.log(data)

                }.bind(this),
                complete: function () {

                }
            });
        }
    }

    render() {
        return (
            <div className={baseStyle.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerLeft}>关注的人</div>
                </div>
                {
                    this.state.followUserList.map(
                        (followUser,index) =>
                            <div className={classNames(style.list, baseStyle.bottomLine)} key={followUser.followerId}>
                                <Link to={'/member/homepage/' +  followUser.followerId} key={followUser.followerId} >
                                    <div className={style.listLeft}>
                                        {
                                            followUser && followUser.followerAvatar ?
                                                <img className={style.listLeftIcon} src={constant.image_host + followUser.followerAvatar} alt='' key={index}/>
                                                :
                                                <img className={style.listLeftIcon} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=''/>
                                        }
                                    </div>
                                </Link>

                                <div className={style.listCenter}>
                                    {
                                        followUser && followUser.followerNickName ?
                                            <span>
                                                <Link to={'/member/homepage/' +  followUser.followerId} key={followUser.followerId} >
                                            followUser.followerNickName
                                                </Link>
                                            </span>
                                            :
                                            <span>
                                                <Link to={'/member/homepage/' +  followUser.followerId} key={followUser.followerId} >
                                            是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊
                                                </Link>
                                            </span>
                                    }

                                </div>

                                <div className={style.listRight}>
                                    {
                                        followUser.topicUserLikeIsSelf ?
                                            null
                                            :
                                            followUser && followUser.memberIsFollow ?
                                                <div className={style.listRightFollow}>
                                                    <span>+ 关注</span>
                                                </div>
                                                :
                                                <div className={style.listRightFollowActive}>
                                                    <span>已关注</span>
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
export default connect(() => ({}))(Follow);

