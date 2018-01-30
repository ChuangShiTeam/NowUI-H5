import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import baseStyle from '../../css/Base.scss';
import {Link} from 'react-router';
import http from "../../common/http";
import constant from "../../common/constant";
import util from '../../common/util';

import style from './Follow.scss';


class Fans extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            followMeList: []
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
            url: '/member/follow/mobile/v1/follow/me/list',
            data: {
            },
            success: function (data) {
                this.setState({
                    followMeList: data
                });
            }.bind(this),
            complete: function () {

            }
        });
    }

    handleFollow(userId, index) {
        http.request({
            url: this.state.followMeList[index].memberIsFollow ? '/member/follow/mobile/v1/delete' : '/member/follow/mobile/v1/save',
            data: {
                followUserId: userId
            },
            success: function (data) {
                if (data){
                    let followMeList = this.state.followMeList;
                    let followMe = followMeList[index];
                    followMe.memberIsFollow = !followMe.memberIsFollow;
                    followMeList[index] = followMe;
                    this.setState({
                        userLikeList: followMeList
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
                    <div className={style.headerLeft}>粉丝</div>
                </div>
                {
                    this.state.followMeList.map(
                        (followMe,index) =>
                            <div className={classNames(style.list, baseStyle.bottomLine)} >
                                <Link to={'/member/homepage/' +  followMe.userId} key={followMe.memberId} >
                                    <div className={style.listLeft}>
                                        {
                                            followMe && followMe.filePath ?
                                                <img className={style.listLeftIcon} src={constant.image_host + followMe.filePath} alt='' key={index}/>
                                                :
                                                <img className={style.listLeftIcon} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=''/>
                                        }
                                    </div>
                                </Link>

                                <div className={style.listCenter}>
                                    {
                                        followMe && followMe.userNickName ?
                                            <span>
                                                <Link to={'/member/homepage/' +  followMe.userId} key={followMe.memberId} >
                                                    {followMe.userNickName}
                                                </Link>
                                            </span>
                                            :
                                            <span>
                                                <Link to={'/member/homepage/' +  followMe.userId} key={followMe.memberId} >
                                                 是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊
                                                </Link>
                                            </span>
                                    }

                                </div>

                                <div className={style.listRight}>
                                    {
                                            followMe && followMe.memberIsFollow ?
                                                <div className={style.listRightFollowActive}>
                                                    <span onClick={this.handleFollow.bind(this, followMe.userId, index)}>已关注</span>
                                                </div>
                                                :
                                                <div className={style.listRightFollow}>
                                                    <span onClick={this.handleFollow.bind(this, followMe.userId, index)}>+ 关注</span>
                                                </div >
                                    }
                                </div>
                            </div>
                    )
                }

            </div>
        );
    }
}
export default connect(() => ({}))(Fans);

