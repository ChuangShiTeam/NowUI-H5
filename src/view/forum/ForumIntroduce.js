import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import Notification from 'rc-notification';
import util from '../../common/util';
import http from '../../common/http';
import style from './ForumIntroduce.scss';


let notification = null;
Notification.newInstance({}, (n) => notification = n);

class ForumIntroduce extends Component {
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
            http.request({
                url: '/forum/mobile/v1/save',
                data: values,
                success: function (data) {
                    notification.notice({
                        content: '创建成功'
                    });
                    this.props.history.push({
                        pathname: '/forum/index',
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
                <div className={style.bottom}>
                    <div className={style.review} onClick={this.handleSubmit.bind(this)}>提交</div>
                </div>
            </div>
        );
    }
}
ForumIntroduce = createForm({})(ForumIntroduce);
export default connect(() => ({}))(ForumIntroduce);
