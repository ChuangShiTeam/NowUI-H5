import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import classNames from 'classnames';

import TopicIndex from '../../component/topic/Index';

import util from '../../common/util';

import style from './Index.scss';
import baseStyle from '../../css/Base.scss';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
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
                <Link to="/topic/add" className={style.add}>
                    <img className={style.addImage}
                         src={require('../../image/forum-add.png')}
                         alt=''/>
                </Link>
                <TopicIndex/>
                <TopicIndex/>
            </div>
        );
    }
}

Index.propTypes = {};

export default connect(() => ({}))(Index);
