import React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';
import  {Link} from  'react-router';
import baseStyle from '../../css/Base.scss';
import classNames from "classnames";
// import  style from './Adorable.scss';
import  style from './Whole.scss';
class Shop extends Component {
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
                        <Link to="/my/whole" className={style.navigationItem}>全部</Link>
                        <Link to="/my/bookmark" className={style.navigationItem}>文章</Link>
                        <Link to="/my/dynamic" className={style.navigationItem}>动态</Link>
                        <Link to="/my/adorable"  className={style.navigationItem}>萌物</Link>
                        <div className={style.nowState}>商户</div>
                    </div>
                    <div className={style.search}>
                            <img src={require("../../image/search.png")} alt=""/>
                    </div>
                </div>
                <div className={style.list}>
                    <div className={style.listContent}>
                        <div className={style.listLeft}>
                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
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
                    <div className={style.listContent}>
                        <div className={style.listLeft}>
                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
                            <div className={style.listCenter}>
                                <div className={style.tittles}>MAS-COTI宠物寄养酒店</div>
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
export default connect(() => ({}))(Shop);
