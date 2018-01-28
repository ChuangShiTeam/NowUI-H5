
import  React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';
import {Link} from 'react-router';
import  style from './Systemmessage.scss';
import baseStyle from '../../css/Base.scss';
import classNames from 'classnames';
class Systemmessage extends Component{
    constructor(props){
        super(props);

        this.state = {
            isload:false,
            mySystemMessageList:[1,2]
        }
    }

    componentDidMount(){
        util.setTitle('wawipet哇咿宠');

    }

    componentWillUnmount(){

    }
    render(){
        return(
            <div  className={baseStyle.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={classNames(style.header,baseStyle.bottomLine)}>
                    <div className={style.navigation}>
                        <Link to="/my/Comment"  className={style.navigationItem}>评论和@我
                            {false?
                                <div className={style.redPoint}></div>
                                :
                                <div className={style.redPointHide}></div>
                            }
                        </Link>
                        <Link  to="/my/Notice" className={style.navigationItem}>通知
                            {false?
                                <div className={style.redPoint}></div>
                                :
                                <div className={style.redPointHide}></div>
                            }</Link>
                        <span className={classNames(style.navigationItems,style.navigationItem)}>系统消息
                            {true?
                                <div className={style.redPoint}></div>
                                :
                                <div className={style.redPointHide}></div>
                            }
                        </span>
                        <Link to="/my/Personalletter"  className={style.navigationItem}>私信
                            {false?
                                <div className={style.redPoint}></div>
                                :
                                <div className={style.redPointHide}></div>
                            }</Link>
                    </div>
                </div>
                <div className={style.content}>
                    {
                        this.state.mySystemMessageList.map(()=>
                            <div className={classNames(style.contentList,baseStyle.bottomLine)}>
                                <span className={style.tittle}>密码更改通知！</span>
                            <span className={style.contents}>
                                您已经成功更改了您的登录密码，请妥善保管您的密码。如您对此有任何疑问，请联系平台管理员。
                            </span>
                                <div className={style.contentBottom}>
                                    <div className={style.times}>2018-01-10</div>
                                    <div className={style.deletes}>删除</div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        );
    }
}
export  default connect(() => ({}))(Systemmessage);
