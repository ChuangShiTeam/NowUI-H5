import React, {Component} from 'react';
import {connect} from 'react-redux';

import util from '../../common/util';

import style from './Bookmark.scss';
class Bookmark extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');

    }

    componentWillUnmount() {

    }
    render() {
        return (
            <div className={style.page}>
                    <div className={style.navList}>
                        <div className={style.navList1}>全部</div>
                        <div className={style.running}>文章</div>
                        <div className={style.navList2}>动态</div>
                        <div className={style.navList2}>萌物</div>
                        <div className={style.navList2}>商户</div>
                        <div className={style.search}>
                            <img src={require("../../image/search.png")} alt=""/>
                        </div>
                    </div>
                    <div className={style.content}>
                        <div>
                            <div className={style.contentList}>
                                <div className={style.contentLeft}>
                                    <div className={style.contentLeft1}>
                                        <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
                                        <div className={style.contentLeftFoot}>
                                            <div className={style.contentLeftFoot1}> 为工作而生的汪星人拉布...</div>
                                                <span className={style.contentLeftFoot2}>拉布拉多寻回猎犬并不像它的名字那样…</span>
                                            <div className={style.contentLeftFoot3}>
                                                <div>收藏于:2018-1-10 16.:44</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.contentRight}>
                                    <div>
                                        <img src={require("../../image/star.png")} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={style.contentList}>
                                <div className={style.contentLeft}>
                                    <div className={style.contentLeft1}>
                                        <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
                                        <div className={style.contentLeftFoot}>
                                            <div className={style.contentLeftFoot1}> 什么？现在宠物的专机如…</div>
                                            <span className={style.contentLeftFoot2}>贫穷限制了我的想象力系列之宠物豪华…</span>
                                            <div className={style.contentLeftFoot3}>
                                                <div>收藏于:2017-12-01 12:02</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.contentRight}>
                                    <div>
                                        <img src={require("../../image/star.png")} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
        );
    }
}

export default connect(() => ({}))(Bookmark);
