import React, {Component} from 'react';
import {connect} from 'react-redux';
import Upload from 'rc-upload';

import ImageUpload from '../../component/upload/ImageUpload';

import util from '../../common/util';

import style from './Add.scss';
import baseStyle from '../../css/Base.scss';
import {createForm} from "rc-form";
import classNames from "classnames";

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

        return (
            <div className={style.page} style={{height: document.documentElement.clientHeight}}>
                <div className={style.content}>
                    <div className={style.upload}>
                        <ImageUpload name="forumMedia" ref="forumMedia" limit={1}/>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={style.content}>
                    <div className={style.summary}>
                        <textarea {...getFieldProps('memberConfirmPassword', {
                            rules: [{
                                required: true,
                                message: '确认密码不能为空'
                            }],
                            initialValue: ''
                        })} className={style.summaryTextarea} rows="8" placeholder="(选填)说点什么…"/>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={style.content}>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={style.listLeft}></div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            所在位置
                        </div>
                        <div className={style.listRight}>
                            <div className={baseStyle.rightArrow}></div>
                        </div>
                    </div>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={style.listLeft}></div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            提醒谁看
                        </div>
                        <div className={style.listRight}>
                            <div className={baseStyle.rightArrow}></div>
                        </div>
                    </div>
                    <div className={classNames(baseStyle.list)}>
                        <div className={style.listLeft}></div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            添加标签
                        </div>
                        <div className={style.listRight}>
                            <div className={baseStyle.rightArrow}></div>
                        </div>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={style.submit}>发送</div>
            </div>
        );
    }
}

Add = createForm({})(Add);

export default connect(() => ({}))(Add);
