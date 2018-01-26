import React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';
import {createForm} from "rc-form";
import Notification from 'rc-notification';
import baseStyle from '../../css/Base.scss';
import  style from './Whole.scss';
import classNames from "classnames";

let notification = null;
Notification.newInstance({}, (n) => notification = n);

class Collectionfind extends Component {
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
        return(
            <div className={baseStyle.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.headerContents}>
                    <div className={style.headerContentLeftCollectionfind}>
                        <div className={style.headerContentLeftSearchCollectionfind}>
                            <div className={style.headerContentLeftSearchLeftCollectionfind}>
                                <img className={style.headerContentLeftSearchLeftIcons}
                                     src={require('../../image/forum-search.png')} alt=''/>
                            </div>
                            <div className={style.headerContentLeftSearchRights}>
                                <input
                                    className={style.headerContentLeftSearchRightInputs} {...getFieldProps('forumName', {
                                    rules: [{
                                        required: true,
                                        message: '圈子名称为空'
                                    }],
                                    initialValue: ''
                                })} type="text" placeholder="爱贝尓宠物医" onKeyUp={this.handleKeyUp.bind(this)}/>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(style.headerContentRights ,style.clearCollectionfind) } onClick={this.handleClose.bind(this)}>
                        <img className={style.headerContentRightCloses} src={require('../../image/forum-close.png')}
                             alt=''/>
                    </div>
                </div>

                <div className={style.list}>
                    <div className={style.listContent}>
                        <div className={style.listLeft}>
                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
                            <div className={style.listCenter}>
                                <div className={style.tittles}>小佩的宠物店 </div>
                                <div className={style.times}>
                                    <div>收藏于:2018-1-09 12:10</div>
                                </div>
                            </div>
                        </div>
                        <div className={style.listRight}>
                            <div>
                                <img src={require("../../image/star.png")} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={style.listContent}>
                        <div className={style.listLeft}>
                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
                            <div className={style.listCenter}>
                                <div className={style.tittles}>MAS-COTI宠物寄养酒店</div>
                                <div className={style.times}>
                                    <div>收藏于:2017-12-01 12:02</div>
                                </div>
                            </div>
                        </div>
                        <div className={style.listRight}>
                            <div>
                                <img src={require("../../image/star.png")} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Collectionfind = createForm({})(Collectionfind);
export default connect(() => ({}))(Collectionfind);

