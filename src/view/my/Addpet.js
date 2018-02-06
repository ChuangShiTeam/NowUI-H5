import  React, {Component} from 'react';
import util from '../../common/util';
import  style from './Addpet.scss';
import {Link} from 'react-router';
import baseStyle from '../../css/Base.scss';
import {createForm} from "rc-form";
import classNames from 'classnames';
import Notification from 'rc-notification';
import Modal from 'antd-mobile/lib/modal';
import DatePicker from 'antd-mobile/lib/date-picker';
const alert = Modal.alert;

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

let notification = null;
Notification.newInstance({}, (n) => notification = n);
class Addpet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isload: false,
            forum: {},
            date: now,
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
    handleDelete(){
        alert(null, '确定删除么', [
            { text: '删除', onPress: () => console.log('cancel'), style: 'default' },
            { text: '取消', onPress: () => console.log('ok') },
        ]);
    }
    componentWillUnmount() {

    }

    render(){

        return(
            <div   className={classNames(baseStyle.page,style.page)} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={classNames(baseStyle.bottomLine,style.header)}>我的爱宠
                    <span className={style.headerRight} onClick={this.handleDelete.bind(this)}>删除</span>
                </div>
                <div className={style.headerBottom}>
                    <span className={style.headerBottomLeft}>头像</span>
                    <div className={style.headerBottomRight}>
                        <img className={style.petPhotoImg} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/60/h/60" alt=""/>
                        <div className={style.imgRight}></div>
                    </div>
                </div>
                <div className={style.content}>
                    <Link to={"/my/Rename"}  className={classNames(baseStyle.bottomLine,style.contentList)}>
                        <span  className={style.listLeft}>
                            宠物名字
                        </span>
                        <span  className={classNames(style.listRight,style.petName)}>
                               请输入宠物名称
                        </span>
                    </Link>
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
                                    <DatePicker
                                        mode="date"
                                        extra="Optional"
                                        value={this.state.date}
                                        onChange={date => this.setState({ date })}
                                    >
                                        <p  onClick={this.click.bind(this)}>请输入宠物生日</p>
                                    </DatePicker>
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