import React, {Component} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';

import style from './Index.scss';
import baseStyle from '../../css/Base.scss';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className={baseStyle.page}>
                <div className={style.header}>
                    <div className={style.headerLeft}>
                        <img className={style.headerLeftImage} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/28/h/28' alt=''/>
                    </div>
                    <div className={style.headerCenter}>
                        <p className={style.headerCenterName}>Nami</p>
                        <p className={style.headerCenterTime}>20分钟前</p>
                    </div>
                    <div className={style.headerRight}></div>
                </div>
                <Link to="/topic/detail" className={style.content}>
                    <img className={style.contentImage} src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/255' alt=''/>
                </Link>
                <div className={style.footer}>
                    <div className={classNames(style.footerText, baseStyle.bottomLine)}>
                        奶糖和福禄娃给你过圣诞啦～
                    </div>
                    <div className={style.footerInfo}>
                        <div className={style.footerInfoCount}>
                            <div className={style.footerInfoCountLike}>
                                <img className={style.footerInfoCountLikeIcon} src={true ? require('../../image/like.png') : require('../../image/like-active.png')} alt=""/>
                                <span className={style.footerInfoCountLikeNumber}>10</span>
                            </div>
                            <div className={style.footerInfoCountBookmark}>
                                <img className={style.footerInfoCountBookmarkIcon} src={true ? require('../../image/bookmark.png') : require('../../image/bookmark-acitve.png')} alt=""/>
                                <span className={style.footerInfoCountBookmarkNumber}>10</span>
                            </div>
                            <div className={style.footerInfoCountComment}>
                                <img className={style.footerInfoCountCommentIcon} src={require('../../image/comment.png')} alt=""/>
                                <span className={style.footerInfoCountCommentNumber}>10</span>
                            </div>
                        </div>
                        <span className={style.footerInfoFrom}>同步到</span>
                        <span className={style.footerInfoTag}>大爱猫咪控</span>
                        <span className={style.footerInfoTag}>大爱猫咪控</span>
                        <span className={style.footerInfoTag}>大爱猫咪控</span>
                        <span className={style.footerInfoTag}>大爱猫咪控</span>
                        <span className={style.footerInfoTag}>大爱猫咪控</span>
                        <span className={style.footerInfoTag}>大爱猫咪控</span>
                        <span className={style.footerInfoTag}>大爱猫咪控</span>
                        <span className={style.footerInfoTag}>大爱猫咪控</span>
                        <span className={style.footerInfoTag}>大爱猫咪控</span>
                        <span className={style.footerInfoTag}>大爱猫咪控</span>
                        <span className={style.footerInfoTag}>大爱猫咪控</span>
                        <span className={style.footerInfoTag}>大爱猫咪控</span>
                    </div>
                </div>
                <div className={style.line}></div>
            </div>
        );
    }
}

Index.propTypes = {};

export default Index;
