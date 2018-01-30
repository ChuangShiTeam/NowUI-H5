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
            followHimList: [],
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
        let userId = this.props.params.userId;

        http.request({
            url: '/member/follow/mobile/v1/him/follow/list',
            data: {
                userId: userId
            },
            success: function (data) {
                this.setState({
                    followHimList: data
                });

            }.bind(this),
            complete: function () {

            }
        });
    }

    handleFollow(userId, index) {
        http.request({
            url: this.state.followHimList[index].memberIsFollow ? '/member/follow/mobile/v1/delete' : '/member/follow/mobile/v1/save',
            data: {
                followUserId: userId
            },
            success: function (data) {
                if (data){
                    let followHimList = this.state.followHimList;
                    let followHim = followHimList[index];
                    followHim.memberIsFollow = !followHim.memberIsFollow;
                    followHimList[index] = followHim;
                    this.setState({
                        followHimList: followHimList
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
                    this.state.followHimList.map(
                        (followHim,index) =>
                            <div className={classNames(style.list, baseStyle.bottomLine)} key={followHim.memberId}>
                                <Link to={ followHim.memberIsSelf ? '/my/publish' :'/member/homepage/' +  followHim.userId} key={followHim.memberId} >
                                    <div className={style.listLeft}>
                                        {
                                            followHim && followHim.filePath ?
                                                <img className={style.listLeftIcon} src={constant.image_host + followHim.filePath} alt='' key={index}/>
                                                :
                                                <img className={style.listLeftIcon} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=''/>
                                        }
                                    </div>
                                </Link>

                                <div className={style.listCenter}>
                                    {
                                        followHim && followHim.userNickName ?
                                            <span>
                                                <Link to={followHim.memberIsSelf ? '/my/publish' : '/member/homepage/' +  followHim.userId} key={followHim.memberId} >
                                                    {followHim.userNickName}
                                                </Link>
                                            </span>
                                            :
                                            <span>
                                                <Link to={'/member/homepage/' +  followHim.userId} key={followHim.memberId} >
                                                     是大雄啊是大雄啊是大雄啊是大雄啊
                                                </Link>
                                            </span>
                                    }
                                </div>

                                <div className={style.listRight}>
                                    {
                                        followHim.memberIsSelf ?
                                            null
                                            :
                                            followHim && followHim.memberIsFollow ?
                                                <div className={style.listRightFollowActive}>
                                                    <span onClick={this.handleFollow.bind(this, followHim.userId, index)}>已关注</span>
                                                </div>
                                                :
                                                <div className={style.listRightFollow}>
                                                    <span onClick={this.handleFollow.bind(this, followHim.userId, index)}>+ 关注</span>
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
export default connect(() => ({}))(Fans);

