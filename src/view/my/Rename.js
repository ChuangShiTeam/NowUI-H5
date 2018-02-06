import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import Notification from 'rc-notification';


import util from '../../common/util';
import http from '../../common/http';

import style from './Rename.scss';

let notification = null;
Notification.newInstance({}, (n) => notification = n);

class Rename extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            forum: {}
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        this.state.forum = this.props.location.state.forum;
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

    }




    handleClose() {
        this.props.history.push({
            pathname: '/my/addpet/',
            query: {}
        });
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

            values.forumId = this.state.forum.forumId;
            http.request({
                url: '/forum/mobile/v1/update/name',
                data: values,
                success: function (data) {
                    if (data){
                        notification.notice({
                            content: '修改成功'
                        });
                    }else{
                        notification.notice({
                            content: '修改失败'
                        });
                    }

                    this.props.history.push({
                        pathname: '/forum/info/' + this.state.forum.forumId,
                        query: {}
                    });
                }.bind(this),
                complete: function () {

                }
            });


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
                                <div className={style.headerContentLeftSearchRight}>
                                    <input
                                        className={style.headerContentLeftSearchRightInput} {...getFieldProps('forumName', {
                                        rules: [{
                                            required: true,
                                            message: '宠物名不能为空'
                                        }],
                                        initialValue: ''
                                    })} type="text" placeholder="请输入宠物名" onKeyUp={this.handleKeyUp.bind(this)}/>
                                </div>
                            </div>
                        </div>
                        <div className={style.headerContentRight} onClick={this.handleClose.bind(this)}>
                            <img className={style.headerContentRightClose} src={require('../../image/upload-close.png')}
                                 alt=''/>
                        </div>
                    </div>
                    <div className={style.content}>
                        <div className={style.review} onClick={this.handleSubmit.bind(this)}>提交</div>
                    </div>
                </div>
            </div>
        );
    }
}

Rename = createForm({})(Rename);

export default connect(() => ({}))(Rename);
