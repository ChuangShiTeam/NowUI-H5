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
            himFollowList: []
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
            url: '/member/follow/mobile/v1/follow/him/list',
            data: {
                userId: userId
            },
            success: function (data) {
                this.setState({
                    himFollowList: data
                });
            }.bind(this),
            complete: function () {

            }
        });
    }

    handleFollow(userId, index) {
        http.request({
            url: this.state.himFollowList[index].memberIsFollow ? '/member/follow/mobile/v1/delete' : '/member/follow/mobile/v1/save',
            data: {
                followUserId: userId
            },
            success: function (data) {
                if (data){
                    let himFollowList = this.state.himFollowList;
                    let himFollow = himFollowList[index];
                    himFollow.memberIsFollow = !himFollow.memberIsFollow;
                    himFollowList[index] = himFollow;
                    this.setState({
                        himFollowList: himFollowList
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
                    <div className={style.headerLeft}>关注的人</div>
                </div>
                {
                    this.state.himFollowList.map(
                        (himFollow,index) =>
                            <div className={classNames(style.list, baseStyle.bottomLine)} key={index}>
                                <Link to={ himFollow.memberIsSelf ? '/my/publish': '/member/homepage/' +  himFollow.followUserId} key={index} >
                                    <div className={style.listLeft}>
                                        {
                                            himFollow && himFollow.filePath ?
                                                <img className={style.listLeftIcon} src={constant.image_host + himFollow.filePath} alt='' key={index}/>
                                                :
                                                <img className={style.listLeftIcon} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=''/>
                                        }
                                    </div>
                                </Link>

                                <div className={style.listCenter}>
                                    {
                                        himFollow && himFollow.userNickName ?
                                            <span>
                                                <Link to={himFollow.memberIsSelf ? '/my/publish': '/member/homepage/' +  himFollow.followUserId} key={index} >
                                                    {himFollow.userNickName}
                                                </Link>
                                            </span>
                                            :
                                            <span>
                                                <Link to={himFollow.memberIsSelf ? '/my/publish': '/member/homepage/' +  himFollow.followUserId} key={index} >
                                            是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊
                                                </Link>
                                            </span>
                                    }

                                </div>

                                <div className={style.listRight}>
                                    {
                                        himFollow.memberIsSelf ?
                                            null
                                            :
                                            himFollow && himFollow.memberIsFollow ?
                                                <div className={style.listRightFollowActive}>
                                                    <span onClick={this.handleFollow.bind(this, himFollow.followUserId, index)}>已关注</span>
                                                </div>
                                                :
                                                <div className={style.listRightFollow}>
                                                    <span onClick={this.handleFollow.bind(this, himFollow.followUserId, index)}>+ 关注</span>
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

