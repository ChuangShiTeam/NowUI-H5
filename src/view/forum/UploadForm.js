import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import Notification from 'rc-notification';
import classNames from 'classnames';
import util from '../../common/util';
import http from '../../common/http';
import ImageUpload from '../../component/upload/ImageUpload';
import Uploader from '../../component/upload/Uploader';
import style from './Add.scss';
import baseStyle from '../../css/Base.scss';

let notification = null;
Notification.newInstance({}, (n) => notification = n);
class UploadForm extends Component {
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

    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err){
                console.log('Received values of form: ', values);
            }
        });
    }

    handClose() {
        this.props.history.push({
            pathname: '/forum/index',
            query: {}
        });
    }

    render() {
        const {getFieldProps} = this.props.form;
        return (
            <div className={style.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        上传控件
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.upload}>
                        <div className={style.uploadLeft}>上传控件</div>
                        <Uploader
                            uploadUrl={'https://jsonplaceholder.typicode.com/posts/'}
                            max={9}
                            {...getFieldProps('formData',{
                                initialValue:{formData:[]},
                                rules: [{
                                    required: true,
                                    message: '圈子名称不能为空'
                                }]
                            })}
                        />
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={classNames(style.content, style.footer)}>
                    <div className={style.review} onClick={this.handleSubmit.bind(this)}>提交审核</div>
                    <div className={style.close} onClick={this.handClose.bind(this)}>关闭</div>
                </div>
            </div>
        );
    }
}

UploadForm = createForm({})(UploadForm);

export default connect(() => ({}))(UploadForm);
