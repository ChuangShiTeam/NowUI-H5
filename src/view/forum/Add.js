import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import Upload from 'rc-upload';
import classNames from 'classnames';

import util from '../../common/util';

import style from './Add.scss';
import baseStyle from '../../css/Base.scss';

class Add extends Component {
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

    render() {
        const {getFieldProps} = this.props.form;

        const uploaderProps = {
            action: '/upload.do',
            data: {a: 1, b: 2},
            headers: {
                Authorization: 'xxxxxxx',
            },
            multiple: true,
            beforeUpload(file) {
                console.log('beforeUpload', file.name);
            },
            onStart: (file) => {
                console.log('onStart', file.name);
            },
            onSuccess(file) {
                console.log('onSuccess', file);
            },
            onProgress(step, file) {
                console.log('onProgress', Math.round(step.percent), file.name);
            },
            onError(err) {
                console.log('onError', err);
            }
        }

        return (
            <div className={style.page} style={{height: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        创建圈子
                    </div>
                </div>
                <div className={style.upload}>
                    <div className={style.uploadLeft}>上传圈子照片</div>
                    <div className={style.uploadRight}>
                        <Upload className={style.uploadRightIcon} {...uploaderProps} component="div" style={{display: 'inline-block'}}>
                            <img src={require('../../image/upload.png')} alt=''/>
                        </Upload>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={style.list}>
                    <div className={classNames(style.listItem, baseStyle.bottomLine)}>
                        <div className={style.listItemLeft}>圈子名称</div>
                        <div className={style.listItemCenter}>
                            <input className={style.listItemCenterInput} {...getFieldProps('forumName', {
                                rules: [{
                                    required: true,
                                    message: '圈子名称不能为空'
                                }],
                                initialValue: ''
                            })}type="text" placeholder="输入不超过25个字符的圈子名称"/>
                        </div>
                    </div>
                    <div className={classNames(style.listItem, baseStyle.bottomLine)}>
                        <div className={style.listItemLeft}>圈子简介</div>
                        <div className={style.listItemCenter}>
                            <input className={style.listItemCenterInput} {...getFieldProps('forumDescription', {
                                rules: [{
                                    required: true,
                                    message: '圈子简介不能为空'
                                }],
                                initialValue: ''
                            })}type="text" placeholder="请输入超过255个字符的圈子简介"/>
                        </div>
                    </div>
                </div>
                <div className={style.review}>提交审核</div>
                <div className={style.close}>关闭</div>
            </div>
        );
    }
}

Add = createForm({})(Add);

export default connect(() => ({}))(Add);
