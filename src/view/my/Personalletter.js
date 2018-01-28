import  React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';
import {Link} from 'react-router';
import  style from './Personalletter.scss';
import baseStyle from '../../css/Base.scss';
import classNames from 'classnames';
class Personalletter extends Component{
    constructor(props){
        super(props);

        this.state = {
            isload:false,
            myPersonalLetter:[1,2]
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
                        <Link to="/my/Comment" className={style.navigationItem}>评论和@我
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
                            }
                        </Link>
                        <Link to="/my/Systemmessage" className={style.navigationItem}>系统消息
                            {false?
                                <div className={style.redPoint}></div>
                                :
                                <div className={style.redPointHide}></div>
                            }
                        </Link>
                        <span  className={classNames(style.navigationItems,style.navigationItem)}>私信
                            {true?
                                <div className={style.redPoint}></div>
                                :
                                <div className={style.redPointHide}></div>
                            }
                        </span>
                    </div>
                </div>
                <div className={style.content}>
                        {
                            this.state.myPersonalLetter.map(()=>
                                <div className={classNames(style.contentList)}>
                                    <div className={style.contentListLeft}>
                                        <div className={style.contentListLeftIcon}>
                                            <div className={style.attentionPoint}>
                                                <div>2</div>
                                            </div>
                                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/41/h/41" alt=""/>
                                        </div>
                                    </div>
                                    <div className={style.contentListRight}>
                                        <div className={style.contentListRightTop}>汤姆和杰瑞</div>
                                        <span >你好！请问你养的猫是弟弟还是妹妹来的...</span>
                                    </div>
                                </div>
                            )
                        }
                </div>
            </div>
        );
    }
}
export  default connect(() => ({}))(Personalletter);
