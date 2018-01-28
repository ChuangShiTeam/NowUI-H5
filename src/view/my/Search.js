import React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';
import  {Link} from  'react-router';
import {createForm} from "rc-form";
import Notification from 'rc-notification';
import baseStyle from '../../css/Base.scss';
import  style from './Whole.scss';

let notification = null;
Notification.newInstance({}, (n) => notification = n);

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            mySearchList:[1,2]
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
                <div className={style.navigation}>
                    <div  className={style.navigationList}>
                        <Link to="/my/whole" className={style.navigationItem}>全部</Link>
                        <Link to="/my/bookmark" className={style.navigationItem}>文章</Link>
                        <Link to="/my/dynamic" className={style.navigationItem}>动态</Link>
                        <Link to="/my/adorable"  className={style.navigationItem}>萌物</Link>
                        <div className={style.nowState}>商户</div>
                    </div>
                    <div className={style.search}>
                        <img src={require("../../image/search.png")} alt=""/>
                    </div>
                </div>
                <div className={style.headerContents}>
                    <div className={style.headerContentLeftSearchs}>
                        <div className={style.headerContentLeftSearchLefts}>
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
                            })} type="text" placeholder="查找收藏的内容" onKeyUp={this.handleKeyUp.bind(this)}/>
                        </div>
                    </div>
                </div>

                <div className={style.list}>
                    {
                        this.state.mySearchList.map(()=>
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
                        )
                    }
                </div>
            </div>
        );
    }
}
Search = createForm({})(Search);
export default connect(() => ({}))(Search);

