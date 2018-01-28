import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import baseStyle from '../../css/Base.scss';
import {Link} from 'react-router';

import util from '../../common/util';

import style from './Follow.scss';


class Follow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            myFollowList:[1,2]
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

    render() {
        return (
            <div className={baseStyle.page} style={{minHeight: document.documentElement.clientHeight}}>

                <div className={classNames(style.header,baseStyle.bottomLine)}>
                    <div  className={classNames(style.headerHalfBottomLine,style.navigation)}>我关注的</div>
                    <Link to={"/my/followme"} className={classNames(style.headerOther,style.navigation)}>谁关注我</Link>
                </div>
                <div className={style.contentMargin}>
                    {
                        this.state.myFollowList.map(()=>
                            <div className={classNames(style.list,baseStyle.bottomLine)}>
                                <div className={style.listLeft}>
                                    <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?listView/1/w/30/h/30" alt=""/>
                                    <div className={style.listCenter}>是大熊啊</div>
                                </div>
                                <div className={style.listRights}>
                                    <span className={style.listRightFollowActive}>已关注</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}
export default connect(() => ({}))(Follow);

