import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import classNames from 'classnames';
import {Link} from 'react-router';

import util from '../../common/util';

import style from './Index.scss';
import baseStyle from '../../css/Base.scss';
class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
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
    list=()=>{
        console.log(1);

    }
    render() {
        const {getFieldProps} = this.props.form;

        return (
            <div className={classNames(style.page, baseStyle.page)} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        <div className={style.headerContentLeft}>
                            <div className={style.headerContentLeftSearch}>
                                <div className={style.headerContentLeftSearchLeft}>
                                    <img className={style.headerContentLeftSearchLeftIcon}
                                         src={require('../../image/forum-search.png')} alt=''/>
                                </div>
                                <div className={style.headerContentLeftSearchRight}>
                                    <input
                                        className={style.headerContentLeftSearchRightInput} {...getFieldProps('shopName', {
                                        rules: [{
                                            required: true,
                                            message: '名称不能为空'
                                        }],
                                        initialValue: ''
                                    })} type="text" placeholder="请输入关键字" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames(baseStyle.list)}>
                    <img className={style.contentTopImage}
                         src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/58/h/58'
                         alt=''/>
                </div>
                <div className={style.content}>
                    <div className={style.categoryItem}>
                        <span className={style.categoryItemText}>美食</span>
                        <span className={style.categoryItemText}>服饰</span>
                        <span className={style.categoryItemText}>出行</span>
                        <span className={style.categoryItemText}>家居</span>
                        <span className={style.categoryItemText}>玩具</span>
                        <span className={style.categoryItemText}>图书</span>
                    </div>
                </div>
                <div className={baseStyle.bottomLine}></div>
                <div className={style.content}>
                    <div className={style.filterItem}>
                        <Link to="/shop/Brand" >
                            <div className={style.filterItemBg}>
                                <span className={style.filterItemText}>品牌</span>
                                <img className={style.filterItemArrowIcon}
                                     src={require('../../image/shop-arrow.png')} alt=''/>
                            </div>
                        </Link>
                        <div className={style.filterItemBg}>
                            <span className={style.filterItemText} onClick={this.list.bind()}>商户</span>
                            <img className={style.filterItemArrowIcon}
                                 src={require('../../image/shop-arrow.png')} alt=''/>

                        </div>
                        <div className={style.filterItemBg}>
                            <span className={style.filterItemText}>适合</span>
                            <img className={style.filterItemArrowIcon}
                                 src={require('../../image/shop-arrow.png')} alt=''/>
                        </div>
                        <div className={style.filterItemBg}>
                            <span className={style.filterItemText}>全部</span>
                            <img className={style.filterItemArrowIcon}
                                 src={require('../../image/shop-arrow.png')} alt=''/>
                        </div>
                    </div>
                </div>
                <div className={classNames(style.lineTop, baseStyle.bottomLine)}></div>
                <div className={style.content}>
                    <div className={style.listWaterFallItem}>
                        <img className={style.listWaterFallItemImage}
                             src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/58/h/58'
                             alt=''/>
                        <p className={style.listWaterFallItemTitle}>海军风毛绒狗窝</p>
                        <p className={style.listWaterFallItemSubTitle}>好用而不贵，性价比超高的好货</p>

                        <div className={style.footContainer}>
                            <div className={style.footLeft}>
                                <span className={style.listWaterFallItemPriceIcon}>￥</span>
                                <span className={style.listWaterFallItemPrice}>99</span>
                            </div>
                            <div className={style.footRight}>
                                <span className={style.listWaterFallItemName}>皮蛋</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

Index = createForm({})(Index);

export default connect((state) => ({
    index: state.index
}))(Index);
