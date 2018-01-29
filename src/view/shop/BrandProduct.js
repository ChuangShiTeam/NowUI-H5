import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import util from '../../common/util';

import style from './BrandProduct.scss';
import baseStyle from '../../css/Base.scss';

class BrandProduct extends Component {
    constructor(props) {
        super(props);

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
            <div className={style.content}>
                <div className={style.listWaterFallItem}>
                    <img className={style.listWaterFallItemImage}
                         src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/58/h/58'
                         alt=''/>
                    <p className={style.listWaterFallItemTitle}>好用而不贵，性价比超高
                        的好货</p>

                    <div className={style.footContainer}>
                        <div className={style.footLeft}>
                            <span className={style.listWaterFallItemPriceIcon}>￥</span>
                            <span className={style.listWaterFallItemPrice}>99</span>
                        </div>
                        <div className={style.footRight}>
                            <span className={style.listWaterFallItemName}>NITORI</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => ({
    index: state.index
}))(BrandProduct);
