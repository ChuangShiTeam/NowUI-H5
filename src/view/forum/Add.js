import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import {Link} from 'react-router';
import {Toast, List, InputItem} from 'antd-mobile';

import util from "../../common/util";

class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
    }

    componentWillUnmount() {

    }

    handleSubmit() {
        this.props.history.push({
            pathname: '/forum/index',
            query: {}
        });
    }

    render() {
        const {getFieldProps, getFieldError} = this.props.form;

        return (
            <div>
                <div className="forum-add-header">
                    创建圈子
                </div>
                <div className="forum-add-upload">
                    上传圈子照片
                    <img className="forum-add-upload-icon" src={require('../../image/forum-add-upload-icon.png')} alt=""/>
                </div>
                <div className="forum-add-space"></div>
                <List>
                    <InputItem
                        {...getFieldProps('forumName', {
                            rules: [{
                                required: true,
                                message: '输入不超过25个字符的圈子名称',
                            }],
                            initialValue: '',
                        })}
                        error={!!getFieldError('forumName')}
                        clear
                        placeholder="输入不超过25个字符的圈子名称"
                    >圈子名称:</InputItem>
                    <InputItem
                        {...getFieldProps('forumSummary', {
                            rules: [{
                                required: true,
                                message: '请输入超过255个字符的圈子简介',
                            }],
                            initialValue: '',
                        })}
                        error={!!getFieldError('forumSummary')}
                        clear
                        placeholder="请输入超过255个字符的圈子简介"
                    >圈子简介:</InputItem>
                </List>
                <div className="forum-add-submit">提交审核</div>
            </div>
        );
    }
}

Add.propTypes = {};

Add = createForm()(Add);

export default connect(() => ({}))(Add);
