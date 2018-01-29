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
            fansList: [ 1,2],
            fansPageIndex: 1,
            fansPageSize: 10,
            fansTotal: 0
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
                url: '/member/fans/like/mobile/v1/list',
                data: {
                    topicId: topicId,
                    pageIndex: this.state.fansPageIndex,
                    pageSize: this.state.fansPageIndex

                },
                success: function (data) {
                    this.setState({
                        fansList: data.list,
                        fansTotal: data.total
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
                    <div className={style.headerLeft}>粉丝</div>
                </div>
                {
                    this.state.fansList.map(
                        (fans,index) =>
                            <div className={classNames(style.list, baseStyle.bottomLine)} key={fans.fansId}>
                                <Link to={'/member/homepage/' +  fans.fansId} key={fans.fansId} >
                                    <div className={style.listLeft}>
                                        {
                                            fans && fans.fansAvatar ?
                                                <img className={style.listLeftIcon} src={constant.image_host + fans.fansAvatar} alt='' key={index}/>
                                                :
                                                <img className={style.listLeftIcon} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=''/>
                                        }
                                    </div>
                                </Link>

                                <div className={style.listCenter}>
                                    {
                                        fans && fans.fansNickName ?
                                            <span>
                                                <Link to={'/member/homepage/' +  fans.fansId} key={fans.fansId} >
                                            fans.fansNickName
                                                </Link>
                                            </span>
                                            :
                                            <span>
                                                <Link to={'/member/homepage/' +  fans.fansId} key={fans.fansId} >
                                            是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊是大雄啊
                                                </Link>
                                            </span>
                                    }

                                </div>

                                <div className={style.listRight}>
                                    {
                                        fans.topicUserLikeIsSelf ?
                                            null
                                            :
                                            fans && fans.memberIsFollow ?
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
export default connect(() => ({}))(Fans);

