import React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';
import {Link} from 'react-router';
import baseStyle from '../../css/Base.scss';
import classNames from "classnames";
// import style from './Dynamic.scss';
import  style from './Whole.scss';
class Dynamic extends Component {
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
                        <Link to="/my/bookmark" className={style.navigationItem}>文章</Link>
                        <div className={style.nowState}>动态</div>
                        <Link to="/my/adorable" className={style.navigationItem}>萌物</Link>
                        <Link to="/my/shop" className={style.navigationItem}>商户</Link>
                    </div>
                    <div className={style.search}>
                        <img src={require("../../image/search.png")} alt=""/>
                    </div>
                </div>
                <div className={style.list}>
                        <div className={style.listContentDynamic}>
                            <div className={style.listLeftDynamic}>
                                    <div className={style.listLeftHeader}>
                                        <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
                                        <div className={style.contentDynamic}>
                                            <div className={style.tittlesDynamic}> 这只柴柴和加菲也太可爱了吧~</div>
                                            <div className={style.times}>
                                                <div>收藏于:2018-1-10 16.:44</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className={style.listLeftBottom}>
                                        <div  className={style.names}>
                                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/20/h/20" alt=""/>
                                            <div>Nami</div>
                                        </div>
                                        <div  className={style.namesRight}>
                                            <div className={style.fromFont}>来自</div>
                                            <div className={style.fromWhere}>
                                                <div>柴犬窝</div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className={classNames(style.listRight,style.listRightDynamic)}>
                                <div>
                                    <img src={require("../../image/star.png")} alt=""/>
                                </div>
                            </div>
                        </div>
                    <div className={style.listContentDynamic}>
                        <div className={style.listLeftDynamic}>
                            <div className={style.listLeftHeader}>
                                <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
                                <div className={style.contentDynamic}>
                                    <div className={style.tittleDynamic}> 热烈庆祝我家的小胖子两周岁生日快乐感谢一直…</div>
                                    <div className={style.times}>
                                        <div>收藏于:2017-11-10 09:20</div>
                                    </div>
                                </div>
                            </div>
                            <div  className={style.listLeftBottom}>
                                <div  className={style.names}>
                                    <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/20/h/20" alt=""/>
                                    <div>Nami</div>
                                </div>
                                <div  className={style.namesRight}>
                                    <div className={style.fromFont}>来自</div>
                                    <div className={style.fromWhere}>
                                        <div>蓝猫圈</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classNames(style.listRight,style.listRightDynamic)}>
                            <div>
                                <img src={require("../../image/star.png")} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
            ;
    }
}
export default connect(() => ({}))(Dynamic);
