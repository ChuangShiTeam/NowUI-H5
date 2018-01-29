import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import classNames from 'classnames';
import {Link} from 'react-router';

import util from '../../common/util';

import  BrandProduct from './BrandProduct';
import  BrandStory from './BrandStory';

import style from './Brand.scss';
import baseStyle from '../../css/Base.scss';

class Brand extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelectedIndex:0,
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

    handleSelectedBrand(index){
        this.setState({
            isSelectedIndex:index,
        })
    }
    render() {
        return (
            <div className={classNames(style.page, baseStyle.page)} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        NITORI
                    </div>
                </div>
                <div className={classNames((style.listContentTopItem))}>
                    <img className={style.listContentTopBanner}
                         src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/58/h/58'
                         alt=''/>
                    <div className={style.listContentTopBannerLogoBg}>
                        <img className={style.listContentTopBannerLogo}
                             src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/58/h/58'
                             alt=''/>
                    </div>
                    {/*<span className={style.listContentTopBannerName}>NITORI制造商</span>*/}
                </div>
                <div className={style.content}>
                    <div className={style.categoryItem}>
                        <div className={(style.categoryItemText,this.state.isSelectedIndex == 0?style.categoryItemTextNormalColor:style.categoryItemTextSelectedColor)} onClick={this.handleSelectedBrand.bind(this,0)}>
                            品牌产品
                        </div>
                        <span className={style.categoryItemLine}></span>
                        <div className={(style.categoryItemText,this.state.isSelectedIndex == 1?style.categoryItemTextNormalColor:style.categoryItemTextSelectedColor)} onClick={this.handleSelectedBrand.bind(this,1)}>
                            品牌故事
                        </div>
                    </div>
                </div>
                <div className={baseStyle.bottomLine}></div>
                {
                    this.state.isSelectedIndex === 0?<BrandProduct/>:<BrandStory/>
                }
            </div>
        );
    }
}

Brand = createForm({})(Brand);

export default connect((state) => ({
    index: state.index
}))(Brand);
