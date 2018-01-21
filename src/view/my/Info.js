import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import classNames from 'classnames';
import {Link} from 'react-router';
import util from '../../common/util';

import style from './Info.scss';
import baseStyle from '../../css/Base.scss';


class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            isEdit: true,
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        this.handleLoad();
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

    }

    handleHeaderContentRight(){
        this.setState({
            isEdit:!this.state.isEdit,
        })
    }

    handleSave(){
        alert('保存修改');
    }
    handleLoad() {
        let forumId = this.props.params.forumId;
    }

    render() {
        const {getFieldProps} = this.props.form;

        return (
            <div className={style.page} style={{height: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        <div className={style.headerContentLeft}>
                        </div>
                        <div className={style.headerContentCenter}>
                            个人资料
                        </div>
                        <div className={style.headerContentRight} onClick={this.handleHeaderContentRight.bind(this)}>
                            <img className={style.headerContentRightEdit}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/18/h/18'
                                 alt=''/>
                        </div>
                    </div>
                </div>
                <div className={style.content}>
                    <div className={classNames(style.image, baseStyle.list)}>
                        <div className={baseStyle.listLeft}>头像</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            <img className={style.imageCenterImage}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/58/h/58'
                                 alt=''/>
                        </div>
                        <div className={baseStyle.listRight}>
                        </div>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={style.content}>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={baseStyle.listLeft}>昵称</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            {
                                this.state.isEdit ?
                                    <input  className={style.listItemCenterInput} {...getFieldProps('nickName', {
                                        rules: [{
                                            required: true,
                                            message: '昵称不能为空'
                                        }],
                                        initialValue: ''
                                    })} type="text" placeholder="请输入昵称"/>
                                    :
                                    '大木木_Lin'
                            }
                        </div>
                        <div className={baseStyle.listRight}>
                        </div>
                    </div>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={baseStyle.listLeft}>个性签名</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            {
                                this.state.isEdit ?
                                    <input  className={style.listItemCenterInput} {...getFieldProps('signUp', {
                                        rules: [{
                                            required: true,
                                            message: '个人签名不能为空'
                                        }],
                                        initialValue: ''
                                    })} type="text" placeholder="请输入个性签名"/>
                                    :
                                    'Capturing every moment...'
                            }
                        </div>
                        <div className={baseStyle.listRight}>
                        </div>
                    </div>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={baseStyle.listLeft}>性别</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                        </div>
                        <div className={style.listItemRightGenderContent}>
                            {
                                this.state.isEdit ?
                                    <div className={style.listItemRightContent}>
                                        <div className={style.listItemRightContentGender}>
                                            <img className={style.listItemRightGenderImage}
                                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/18/h/18'
                                                 alt=''/>
                                            <div className={style.listItemRightGenderText}>男</div>
                                        </div>
                                        <div className={style.listItemRightContent}>
                                            <img className={style.listItemRightGenderImage}
                                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/18/h/18'
                                                 alt=''/>
                                            <div className={style.listItemRightGenderText}>女</div>
                                        </div>
                                    </div>
                                    :'女'
                            }
                        </div>
                    </div>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={baseStyle.listLeft}>城市</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            {
                                this.state.isEdit ?
                                    <div  className={style.listItemRightContent}>
                                        <input  className={style.listItemCenterInput} {...getFieldProps('cityName', {
                                            rules: [{
                                                required: true,
                                                message: '城市名称不能为空'
                                            }],
                                            initialValue: ''
                                        })} type="text" placeholder="请输入城市名称"/>
                                        <img className={style.listItemRightLocatinImage}
                                             src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/18/h/18'
                                             alt=''/>
                                    </div>

                                    :
                                    '上海'
                            }
                        </div>
                        <div className={baseStyle.listRight}>
                        </div>
                    </div>
                    <div>
                        {
                            this.state.isEdit?
                                ''
                                :<div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                                    <div className={baseStyle.listLeft}>设置密码</div>
                                    <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                                    </div>
                                    <div className={baseStyle.listRight}>
                                        <div className={baseStyle.rightArrow}></div>
                                    </div>
                                </div>
                        }
                    </div>
                    <div>
                        {
                            this.state.isEdit?
                                ''
                                :<div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                                    <div className={baseStyle.listLeft}>偏好语言</div>
                                    <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                                        简体中文
                                    </div>
                                    <div className={baseStyle.listRight}>
                                        <div className={baseStyle.rightArrow}></div>
                                    </div>
                                </div>
                        }

                    </div>

                </div>
                <div className={classNames(style.content, style.footer)}>
                    {
                        this.state.isEdit?<div className={style.review} onClick={this.handleSave.bind(this)}>保存修改</div>:''
                    }
                </div>
            </div>
        );
    }
}

Info = createForm({})(Info);

export default connect(() => ({}))(Info);