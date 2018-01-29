import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import Notification from 'rc-notification';
import baseStyle from '../../css/Base.scss'
import classNames from 'classnames'

import util from '../../common/util';

import  style from './AddLable.scss';

let notification = null;
Notification.newInstance({}, (n) => notification = n);

class AddLable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            AddLableList:[1,2]
        }
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
            <div className={style.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        <div className={style.headerContentLeft}>
                                    <input
                                        className={style.headerContentLeftSearchInput} {...getFieldProps('forumName', {
                                        rules: [{
                                            required: true,
                                            message: '内容不能为空'
                                        }],
                                        initialValue: ''
                                    })} type="text" placeholder="# 搜索话题,商品" onKeyUp={this.handleKeyUp.bind(this)}/>
                        </div>
                        <div className={style.headerContentRight} onClick={this.handleClose.bind(this)}>
                            取消
                        </div>
                    </div>
                    <div className={style.center}>热门话题</div>
                </div>
                <div className={style.content}>
                    {
                        this.state.AddLableList.map(()=>
                        <div  className={classNames(style.contentList,baseStyle.bottomLine)}> 
                            <div className={style.contentListLeft}>
                                <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/48/h/48" alt=""/>
                            </div>
                            <div className={style.contentListRight}>
                                <div className={style.contentListRightTop}>#超好用的项圈#</div>
                                <div className={style.contentListRightBottom}>1982个动态</div>
                            </div>
                        </div>
                        )
                    }
                </div>

            </div>
        );
    }
}

AddLable = createForm({})(AddLable);

export default connect(() => ({}))(AddLable);
