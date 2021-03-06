import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import Notification from 'rc-notification';

import util from '../../common/util';

import  style from './Whole.scss';

let notification = null;
Notification.newInstance({}, (n) => notification = n);

class Searchtype extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
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
                                            message: '内容不能为空'
                                        }],
                                        initialValue: ''
                                    })} type="text" placeholder="搜索宠物品种" onKeyUp={this.handleKeyUp.bind(this)}/>
                                </div>
                            </div>
                        </div>
                        <div className={style.headerContentRight} onClick={this.handleClose.bind(this)}>
                            <img className={style.headerContentRightClose} src={require('../../image/forum-close.png')}
                                 alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Searchtype = createForm({})(Searchtype);

export default connect(() => ({}))(Searchtype);
