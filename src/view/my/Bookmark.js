import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import util from '../../common/util';
import baseStyle from '../../css/Base.scss';

import  style from './Whole.scss';
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
            <div className={baseStyle.page} style={{minHeight: document.documentElement.clientHeight}}>
                    <div className={style.navigation}>
                        <div  className={style.navigationList}>
                            <Link to="/my/whole" className={style.navigationItem}>全部</Link>
                            <div className={style.nowState}>文章</div>
                            <Link to="/my/dynamic" className={style.navigationItem}>动态</Link>
                            <Link to="/my/adorable" className={style.navigationItem}>萌物</Link>
                            <Link to="/my/shop" className={style.navigationItem}>商户</Link>
                        </div>
                        <Link  to='/my/search'  className={style.search}>
                            <img src={require("../../image/search.png")} alt=""/>
                        </Link>
                    </div>
                    <div className={style.list}>
                            <div className={style.listContent}>
                                <div className={style.listLeft}>
                                        <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
                                        <div className={style.listCenter}>
                                            <div className={style.tittles}> 为工作而生的汪星人拉布...</div>
                                                <span className={style.content}>拉布拉多寻回猎犬并不像它的名字那样…</span>
                                            <div className={style.times}>
                                                <div>收藏于:2018-1-10 16.:44</div>
                                            </div>
                                        </div>
                                </div>
                                <div className={style.listRight}>
                                    <div>
                                        <img src={require("../../image/star.png")} alt=""/>
                                    </div>
                                </div>
                            </div>
                        <div className={style.listContent}>
                            <div className={style.listLeft}>
                                <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
                                <div className={style.listCenter}>
                                    <div className={style.tittles}>什么？现在宠物的专机如...</div>
                                    <span className={style.content}>贫穷限制了我的想象力系列之宠物豪华…</span>
                                    <div className={style.times}>
                                        <div>收藏于:2017-12-01 12:02</div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.listRight}>
                                <div>
                                    <img src={require("../../image/star.png")} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default connect(() => ({}))(Bookmark);
