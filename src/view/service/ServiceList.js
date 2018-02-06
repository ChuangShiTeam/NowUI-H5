import React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';
import baseStyle from '../../css/Base.scss';
import style from './ServiceList.scss';
import classNames from 'classnames';

class ServiceList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
          
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
    }

    componentWillUnmount() {

    }

    render() {

        return (
            <div className={classNames(baseStyle.page,style.page)} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                        <div className={style.headerSearch}>
                            <div className={style.headerSearchLeft}>
                                <img className={style.headerSearchLeftIcon}
                                     src={require('../../image/forum-search.png')} alt=''/>
                            </div>
                            <div className={style.headerSearchRight}>
                                <input
                                    className={style.headerSearchRightInput}  type="text" placeholder="搜索服务商户" />
                            </div>
                        </div>
                </div>
                <div className={ classNames(style.navigation,baseStyle.bottomLine)}>
                    <span className={style.navigationItem}>附近
                       <div className={style.itemRight}></div>
                    </span>
                    <span className={style.navigationItem}>智能排序
                       <div className={style.itemRight}></div>
                    </span>
                     <span className={style.navigationItem}>分类
                            <div className={style.itemRight}></div>
                        </span>
                     <span className={style.navigationItem}>
                             <label > <input type="checkbox" className={style.shopping}  value="shopping" /> 营业中</label>
                     </span>
                </div>
                <div className={style.content}>
                    {
                        [1,2,3].map(()=>
                            <div className={style.contentList}>
                                <div className={style.listLeft}>
                                    <img className={style.listLeftImg} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/280" alt=""/>
                                    <div className={style.listLeftContent}>
                                        <span className={style.contentName}>宠物乐园咖啡</span>
                                        <div className={style.contentStar}>
                                            <div className={style.contentStarIcon}>
                                                <img src={require("../../image/star.png")} alt=""/>
                                                <img src={require("../../image/star.png")} alt=""/>
                                                <img src={require("../../image/star.png")} alt=""/>
                                                <img src={require("../../image/star.png")} alt=""/>
                                                <img src={require("../../image/star.png")} alt=""/>
                                            </div>
                                            <span className={style.contentStarFont}>¥45/人</span>
                                        </div>
                                <span className={style.contentBottom}>咖啡厅
                                    <span className={style.contentBottomWhere}>金杨</span>
                                </span>
                                    </div>
                                </div>
                                <div className={style.listRight}>
                                    <span className={style.listRightTop}>2.1km</span>
                                    {
                                        false?
                                            <div className={style.listRightBottom}>休息中</div>
                                            :   <div className={style.listRightBottomActive}>营业中</div>
                                    }

                                </div>
                            </div>
                        )
                    }

                </div>
                 
            </div>
        );
    }
}

ServiceList.propTypes = {};

export default connect(() => ({}))(ServiceList);
