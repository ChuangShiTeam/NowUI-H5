import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import classNames from 'classnames';

import util from '../../common/util';

import style from './SearchResult.scss';
import baseStyle from '../../css/Base.scss';

class SearchResult extends Component {
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

    handleClose() {
        this.props.form.resetFields();
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
                                        className={style.headerContentLeftSearchRightInput} {...getFieldProps('SearchResultName', {
                                        rules: [{
                                            required: true,
                                            message: '搜索内容不能为空'
                                        }],
                                        initialValue: ''
                                    })} type="text" placeholder="请输入关键词，如：狗狗、猫咪" />
                                </div>
                            </div>
                        </div>
                        <div className={style.headerContentRight} onClick={this.handleClose.bind(this)}>
                            <img className={style.headerContentRightClose} src={require('../../image/forum-close.png')}
                                 alt=''/>
                        </div>
                    </div>
                </div>
                <div className={classNames(style.content)}>
                    <div className={style.titleContent}>
                        <div className={style.titleLeftLine}></div>
                        <div className={style.titleRightText}>相关话题</div>
                    </div>
                    <div className={style.titleContentTag}>
                        <span className={style.titleContentItem}>#猫咪窝</span>
                        <span className={style.titleContentItem}>#保暖</span>
                        <span className={style.titleContentItem}>#猫咪领地</span>
                        <span className={style.titleContentItem}>#过冬神器</span>
                        <span className={style.titleContentItem}>#保暖神器</span>
                    </div>
                </div>
                <div className={classNames(style.content)}>
                    <div className={style.titleContent}>
                        <div className={style.titleLeftLine}></div>
                        <div className={style.titleRightText}>全部内容</div>
                    </div>
                    <div className={style.listWaterFallItem}>
                        <img className={style.listWaterFallItemImage}
                             src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/58/h/58'
                             alt=''/>
                        <p className={style.listWaterFallItemTitle}>我家的猫咪超喜欢在里面
                            和我躲猫猫的，超级可…</p>
                        <div className={classNames(style.content,style.listWaterFallItemBottom)}>
                            <div className={style.listWaterFallItemBottomLeft}>
                                <img className={style.listWaterFallItemBottomLeftImage}
                                     src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/58/h/58'
                                     alt=''/>
                            </div>
                            <div className={style.listWaterFallItemBottomCenter}>
                                <span className={style.listWaterFallItemBottomCenterText}>皮蛋和霍华德活动活动</span>
                            </div>
                            <div className={style.listWaterFallItemBottomRight}>
                                <img className={style.listWaterFallItemBottomRightCollectIcon}
                                     src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/58/h/58'
                                     alt=''/>
                                <span className={style.listWaterFallItemBottomRightCollectNum}>12</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SearchResult = createForm({})(SearchResult);

export default connect((state) => ({
    index: state.index
}))(SearchResult);
