import React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';
import  {Link} from  'react-router';

import baseStyle from '../../css/Base.scss';

import  style from './Whole.scss';
class Adorable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            myAdorableList:[1,2]
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
                        <Link to="/my/whole" className={style.navigationItem}>全部</Link>
                        <Link to="/my/bookmark" className={style.navigationItem}>文章</Link>
                        <Link to="/my/dynamic" className={style.navigationItem}>动态</Link>
                        <div className={style.nowState}>萌物</div>
                        <Link to="/my/shop" className={style.navigationItem}>商户</Link>
                    </div>
                    <Link  to='/my/search'  className={style.search}>
                        <img src={require("../../image/search.png")} alt=""/>
                    </Link>
                </div>
                <div className={style.list}>
                    {
                        this.state.myAdorableList.map(()=>  <div className={style.listContent}>
                            <div className={style.listLeft}>
                                <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
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
                        </div>)
                    }
                </div>
            </div>
        );
    }
}
export default connect(() => ({}))(Adorable);