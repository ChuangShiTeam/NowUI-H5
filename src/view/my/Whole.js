
import React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';
import  {Link} from  'react-router';
import baseStyle from '../../css/Base.scss';
import classNames from "classnames";
import  style from './Whole.scss';
class Whole extends Component {
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
        return(
            <div className={baseStyle.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.navigation}>
                    <div  className={style.navigationList}>
                        <div className={style.nowState}>全部</div>
                        <Link to="/my/bookmark" className={style.navigationItem}>文章</Link>
                        <Link to="/my/dynamic" className={style.navigationItem}>动态</Link>
                        <Link to="/my/adorable"  className={style.navigationItem}>萌物</Link>
                        <Link to="/my/shop" className={style.navigationItem}>商户</Link>
                    </div>
                    <Link  to='/my/search'  className={style.search}>
                        <img src={require("../../image/search.png")} alt=""/>
                    </Link>
                </div>
                <div className={style.list}>
                    <div className={style.listContent}>
                        <div className={style.listLeft}>
                            <div className={style.mengBan}>
                                <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
                                {
                                    true?
                                        <div className={style.mask}>
                                            <div>文章</div>
                                        </div>
                                        :""
                                }

                            </div>
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
                    <div className={style.listContentDynamic}>
                        <div className={style.listLeftDynamic}>
                            <div className={style.listLeftHeader}>
                                <div className={style.mengBan}>
                                    <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
                                    {
                                        true?
                                            <div className={style.mask}>
                                                <div>文章</div>
                                            </div>
                                            :""
                                    }
                                </div>
                                <div className={style.contentDynamic}>
                                    <div className={style.tittlesDynamic}>这只柴柴和加菲也太可爱了吧~</div>
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
                    <div className={style.listContent}>
                        <div className={style.listLeft}>
                            <div className={style.mengBan}>
                                <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
                                {
                                    true?
                                        <div className={style.mask}>
                                            <div>萌物</div>
                                        </div>
                                        :""
                                }
                            </div>
                            <div className={style.listCenter}>
                                <div className={style.tittles}>SANY日式口款精品项圈 </div>
                                <div className={style.contentAdorable}>
                                    <div className={style.price}>￥299</div>
                                    <div className={style.seller}>京东</div>
                                </div>
                                <div className={style.times}>
                                    <div>收藏于:2018-1-09 12:10</div>
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
                            <div className={style.mengBan}>
                                <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
                                {
                                    true?
                                        <div className={style.mask}>
                                            <div>商户</div>
                                        </div>
                                        :""
                                }
                            </div>
                            <div className={style.listCenter}>
                                <div className={style.tittles}>小佩的宠物店 </div>
                                <div className={style.times}>
                                    <div>收藏于:2018-1-09 12:10</div>
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
export default connect(() => ({}))(Whole);
