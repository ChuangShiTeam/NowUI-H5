
import  React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';
import {Link} from 'react-router';
import  style from './Comment.scss';
import baseStyle from '../../css/Base.scss';
import classNames from 'classnames';
class Comment extends Component{
    constructor(props){
        super(props);

        this.state = {
            isload:false
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
                        <span  className={classNames(style.navigationItems,style.navigationItem)}>评论和@我
                            {true?
                                <div className={style.redPoint}></div>
                                :
                                <div className={style.redPointHide}></div>
                            }
                        </span>
                        <Link to="/my/Notice" className={style.navigationItem}>通知
                            {false?
                                <div className={style.redPoint}></div>
                                :
                                <div className={style.redPointHide}></div>
                            }</Link>
                        <Link  to="/my/Systemmessage" className={style.navigationItem}>系统消息
                            {false?
                                <div className={style.redPoint}></div>
                                :
                                <div className={style.redPointHide}></div>
                            }
                        </Link>
                        <Link to="/my/Personalletter"  className={style.navigationItem}>私信
                            {false?
                                <div className={style.redPoint}></div>
                                :
                                <div className={style.redPointHide}></div>
                            }</Link>
                    </div>
                </div>
                <div className={style.content}>
                    <div  className={classNames(style.contentList,baseStyle.bottomLine)}>
                        <div className={style.contentListLeft}>
                            <img  src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=""/>
                        </div>
                        <div className={style.contentListRight}>
                            <div className={style.contentListRightTop}>
                                <div className={style.names}>
                                    <span className={style.namesLeft}> 馥馥  </span>
                                    <span className={style.namesRight}>评论了你的动态</span>
                                    {false?
                                        <span className={style.namesLeft}> 小花粥</span>
                                        :
                                        <span></span>
                                    }
                                </div>
                                <div className={style.times}>2018-01-10</div>
                            </div>
                            {true ?
                                <div className={style.comment}>我家的狗狗也是这样，皮得很，真不知道有什么办法可以管管他呀！</div>
                                :
                                <div></div>
                            }
                            <div className={style.contentListRightContent}>
                                <img className={style.contentListRightContentImg} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/110/h/75" alt=""/>
                                <div className={style.contentListRightContentRight}>
                                    <span className={style.contentListRightContentRightTop}> 今天一回家就看到这俩货把我的沙发拆得不今天一回家就看到这俩货把我的沙发拆得不…</span>
                                    <span className={style.contentListRightContentRightBottom}>2018-01-10</span>
                                </div>
                            </div>
                            <div className={style.contentListRightBottom}>
                                <div className={style.contentListRightBottomIcon}>
                                    {
                                        true ?
                                            <img src={require("../../image/like.png")} alt=""/>
                                            :
                                            <img src={require("../../image/like-active.png")} alt=""/>
                                    }
                                    <img className={style.contentListRightBottomIconComment} src={require("../../image/comment.png")} alt=""/>
                                </div>
                                <span className={style.deletes}>删除</span>
                            </div>
                        </div>
                    </div>
                    <div  className={classNames(style.contentList,baseStyle.bottomLine)}>
                        <div className={style.contentListLeft}>
                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=""/>
                        </div>
                        <div className={style.contentListRight}>
                            <div className={style.contentListRightTop}>
                                <div className={style.names}>
                                    <span className={style.namesLeft}> 杰克  </span>
                                    <span className={style.namesRight}>在动态@了你</span>
                                    {false?
                                        <span className={style.namesLeft}> 小花粥</span>
                                        :
                                        <span></span>
                                    }
                                </div>
                                <div className={style.times}>2018-01-10</div>
                            </div>
                            {false ?
                                <div className={style.comment}>我家的狗狗也是这样，皮得很，真不知道有什么办法可以管管他呀！</div>
                                :
                                <div></div>
                            }

                            <div className={style.contentListRightContent}>
                                <img className={style.contentListRightContentImg} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/110/h/75" alt=""/>
                                <div className={style.contentListRightContentRight}>
                                    <span className={style.contentListRightContentRightTop}> 今天一回家就看到这俩货把我的沙发拆得不今天一回家就看到这俩货把我的沙发拆得不…</span>
                                    <span className={style.contentListRightContentRightBottom}>2018-01-10</span>
                                </div>
                            </div>
                            <div className={style.contentListRightBottom}>
                                <div className={style.contentListRightBottomIcon}>
                                    {
                                        false ?
                                            <img src={require("../../image/like.png")} alt=""/>
                                            :
                                            <img src={require("../../image/like-active.png")} alt=""/>
                                    }
                                    <img className={style.contentListRightBottomIconComment} src={require("../../image/comment.png")} alt=""/>
                                </div>
                                <span className={style.deletes}>删除</span>
                            </div>
                        </div>
                    </div>
                    <div  className={classNames(style.contentList,baseStyle.bottomLine)}>
                        <div className={style.contentListLeft}>
                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=""/>
                        </div>
                        <div className={style.contentListRight}>
                            <div className={style.contentListRightTop}>
                                <div className={style.names}>
                                    <span className={style.namesLeft}> 安安  </span>
                                    <span className={style.namesRight}>在你的动态中评论了</span>
                                    {true?
                                        <span className={style.namesLeft}> 小花粥</span>
                                        :
                                        <span></span>
                                    }
                                </div>
                                <div className={style.times}>2018-01-10</div>
                            </div>
                            {true ?
                                <div className={style.comment}>冬天的时候边牧会怕冷么?看看我家弟弟一起在家里瑟瑟发抖的样子好不忍心啊!</div>
                                :
                                <div></div>
                            }
                            <div className={style.contentListRightContent}>
                                <img className={style.contentListRightContentImg} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/110/h/75" alt=""/>
                                <div className={style.contentListRightContentRight}>
                                    <span className={style.contentListRightContentRightTop}> 今天一回家就看到这俩货把我的沙发拆得不今天一回家就看到这俩货把我的沙发拆得不…</span>
                                    <span className={style.contentListRightContentRightBottom}>2018-01-10</span>
                                </div>
                            </div>
                            <div className={style.contentListRightBottom}>
                                <div className={style.contentListRightBottomIcon}>
                                    {
                                        true ?
                                            <img src={require("../../image/like.png")} alt=""/>
                                            :
                                            <img src={require("../../image/like-active.png")} alt=""/>
                                    }
                                    <img className={style.contentListRightBottomIconComment} src={require("../../image/comment.png")} alt=""/>
                                </div>
                                <span className={style.deletes}>删除</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export  default connect(() => ({}))(Comment);

