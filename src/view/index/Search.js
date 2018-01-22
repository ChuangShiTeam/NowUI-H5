import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import Notification from "rc-notification";
import classNames from 'classnames';

import util from '../../common/util';

import style from './Search.scss';
import baseStyle from '../../css/Base.scss';

let notification = null;
Notification.newInstance({}, (n) => notification = n);

class Search extends Component {
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

    handleKeyUp(event) {
        if (event.keyCode === 13) {
            this.handleSubmit();
        }
    }

    handleSubmit() {
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                var message = '';
                for (var error in errors) {
                    message += '<p>';
                    message += errors[error].errors[0].message;
                    message += '</p>';
                }

                notification.notice({
                    content: <div dangerouslySetInnerHTML={{__html: message}}></div>
                });

                return;
            }

            alert(values)
        });
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
                                        className={style.headerContentLeftSearchRightInput} {...getFieldProps('forumName', {
                                        rules: [{
                                            required: true,
                                            message: '圈子名称为空'
                                        }],
                                        initialValue: ''
                                    })} type="text" placeholder="请输入关键词，如：狗狗、猫咪" onKeyUp={this.handleKeyUp.bind(this)}/>
                                </div>
                            </div>
                        </div>
                        <div className={style.headerContentRight} onClick={this.handleClose.bind(this)}>
                            <img className={style.headerContentRightClose} src={require('../../image/forum-close.png')}
                                 alt=''/>
                        </div>
                    </div>
                </div>
                <div className={classNames(style.hot, style.content)}>
                    <div className={style.hotTitle}>热门搜索</div>
                    <div className={style.hotContent}>
                        <span className={style.hotContentItem}>成犬喂养</span>
                        <span className={style.hotContentItem}>成犬喂养</span>
                        <span className={style.hotContentItem}>成犬喂养</span>
                        <span className={style.hotContentItem}>成犬喂养</span>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={classNames(style.list, baseStyle.list, baseStyle.content)} style={{paddingTop: '10px'}}>
                    <div className={classNames(style.listLeft, style.historyTitle)}>
                        历史搜索
                    </div>
                    <div className={style.listRight}>
                        <img className={style.delete}
                             src={require('../../image/delete.png')} alt=''/>
                    </div>
                </div>
                <div className={classNames(style.list, baseStyle.list, baseStyle.content)}>
                    <div className={classNames(style.listLeft, style.historyItemTitle)}>
                        用什么喂养小乌龟
                    </div>
                    <div className={style.listRight}>
                        <img className={style.searchDelete}
                             src={require('../../image/search-delete.png')} alt=''/>
                    </div>
                </div>
                <div className={classNames(style.list, baseStyle.list, baseStyle.content)}>
                    <div className={classNames(style.listLeft, style.historyItemTitle)}>
                        用什么喂养小乌龟
                    </div>
                    <div className={style.listRight}>
                        <img className={style.searchDelete}
                             src={require('../../image/search-delete.png')} alt=''/>
                    </div>
                </div>
                <div className={classNames(style.list, baseStyle.list, baseStyle.content)}>
                    <div className={classNames(style.listLeft, style.historyItemTitle)}>
                        用什么喂养小乌龟
                    </div>
                    <div className={style.listRight}>
                        <img className={style.searchDelete}
                             src={require('../../image/search-delete.png')} alt=''/>
                    </div>
                </div>
            </div>
        );
    }
}

Search = createForm({})(Search);

export default connect((state) => ({
    index: state.index
}))(Search);
