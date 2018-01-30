import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import Notification from 'rc-notification';
import util from '../../common/util';
import http from '../../common/http';
import style from './EditIntroduce.scss';


let notification = null;
Notification.newInstance({}, (n) => notification = n);

class EditIntroduce extends Component {
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
            pathname: '/forum/info/' + this.state.forum.forumId,
            query: {}
        });
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
                url: '/forum/mobile/v1/update/description',
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
                <div className={style.content}>
                    <div className={style.listItemCenterDescription}>
                        <textarea className={style.listItemCenterTextarea} {...getFieldProps('forumDescription', {
                            rules: [{
                                required: true,
                                message: '圈子简介不能为空'
                            }],
                            initialValue: ''
                        })} rows="5" placeholder="请输入超过255个字符的圈子简介"/>
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.review} onClick={this.handleSubmit.bind(this)}>提交</div>
                </div>
            </div>
        );
    }
}
EditIntroduce = createForm({})(EditIntroduce);
export default connect(() => ({}))(EditIntroduce);
