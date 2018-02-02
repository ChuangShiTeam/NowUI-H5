import  React, {Component} from 'react';
import util from '../../common/util';
import  style from './Addpet.scss';
import {Link} from 'react-router';
import baseStyle from '../../css/Base.scss';
import {createForm} from "rc-form";
import classNames from 'classnames';
import Notification from 'rc-notification';


let notification = null;
Notification.newInstance({}, (n) => notification = n);
class Addpet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isload: false,
            forum: {}
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        this.state.forum = this.props.location.state.forum;

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




        });
    }
    componentWillUnmount() {

    }
    render(){
        const {getFieldProps} = this.props.form;
        return(
            <div   className={classNames(baseStyle.page,style.page)} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={classNames(baseStyle.bottomLine,style.header)}>我的爱宠
                    <span className={style.headerRight}>删除</span>
                </div>
                <div className={style.headerBottom}>
                    <span className={style.headerBottomLeft}>头像</span>
                    <div className={style.headerBottomRight}>
                        <img className={style.petPhotoImg} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/60/h/60" alt=""/>
                        <div className={style.imgRight}></div>
                    </div>
                </div>
                <div className={style.content}>
                    <div  className={classNames(baseStyle.bottomLine,style.contentList)}>
                        <span  className={style.listLeft}>
                            宠物名字
                        </span>
                        <span  className={style.listRight}>
                               <input type="text" className={style.inputName} placeholder="请输入爱宠名称" {...getFieldProps('forumName', {
                                   rules: [{
                                       required: true,
                                       message: '爱宠名字不能为空'
                                   }],
                                   initialValue: ''
                               })}/>
                        </span>
                    </div>
                    <div  className={classNames(baseStyle.bottomLine,style.contentList)}>
                        <span  className={style.listLeft}>
                            宠物性别
                        </span>
                        <span  className={style.listRightSelectSex}>
                                <label class="radio-inline"> <input type="radio" className={style.sex} name="gender" id="emp_add_gender1" value="M" /> 弟弟</label>
                            <label class="radio-inline"> <input type="radio" className={style.sex} name="gender" id="emp_add_gender2" value="F" /> 妹妹 </label>
                        </span>
                    </div>
                    <div  className={classNames(baseStyle.bottomLine,style.contentList)}>
                        <span  className={style.listLeft}>
                            宠物生日
                        </span>
                        <span  className={style.listRight}>
                            请选择爱宠生日
                            <div className={style.imgRights}></div>
                        </span>
                    </div>
                    <div  className={classNames(baseStyle.bottomLine,style.contentList)}>
                        <span  className={style.listLeft}>
                            宠物品种
                        </span>
                        <Link to={"/my/petkind"}  className={style.listRight}>
                            请选择爱宠品种
                              <div className={style.imgRights}></div>
                        </Link>
                    </div>
                </div>
                <div className={style.saveButton} onClick={this.handleSubmit.bind(this)}>保存</div>
            </div>
        )
    }
}
Addpet= createForm({})(Addpet);
export default Addpet;