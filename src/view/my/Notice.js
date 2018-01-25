
import  React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';
import {Link} from 'react-router';
import  style from './Notice.scss';
import baseStyle from '../../css/Base.scss';
import classNames from 'classnames';
class Notice extends Component{
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
                        <Link to="/my/Comment" className={style.navigationItem}>评论和@我
                            {false?
                                <div className={style.redPoint}></div>
                                :
                                <div className={style.redPointHide}></div>
                            }
                        </Link>
                        <span className={classNames(style.navigationItems,style.navigationItem)}>通知
                            {true?
                                <div className={style.redPoint}></div>
                                :
                                <div className={style.redPointHide}></div>
                            }</span>
                        <Link to="/my/Systemmessage" className={style.navigationItem}  >系统消息
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
                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=""/>
                        </div>
                        <div className={style.contentListRight}>
                            <div className={style.contentListRightLeft}>
                                <div className={style.names}>
                                    <span className={style.namesLeft}> 馥馥  </span>
                                    <span className={style.namesRight}>关注了你</span>
                                </div>
                                <div className={style.times}>2018-01-10</div>
                            </div>
                            <span className={style.deletes}>删除</span>
                        </div>
                    </div>
                    <div  className={classNames(style.contentList,baseStyle.bottomLine)}>
                        <div className={style.contentListLeft}>
                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=""/>
                        </div>
                        <div>
                            <div className={style.contentListRightLeft}>
                                <div className={style.names}>
                                    <span className={style.namesLeft}> 杰克  </span>
                                    <span className={style.namesRight}>收藏了你的动态</span>
                                </div>
                                <div className={style.times}>2018-01-10</div>
                            </div>
                            <div className={style.contentListRightContent}>
                                <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/110/h/75" alt=""/>
                                <div className={style.contentListRightContentRight}>
                                    <span className={style.contentListRightContentRightTop}> 今天一回家就看到这俩货把我的沙发拆得不今天一回家就看到这俩货把我的沙发拆得不…</span>
                                    <span className={style.contentListRightContentRightBottom}>2018-01-10</span>
                                </div>
                            </div>
                            <div className={style.contentListRightBottom}>
                                <span className={style.deletes}>删除</span>
                            </div>
                        </div>
                    </div>
                    <div  className={classNames(style.contentList,baseStyle.bottomLine)}>
                        <div className={style.contentListLeft}>
                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=""/>
                        </div>
                        <div>
                            <div className={style.contentListRightLeft}>
                                <div className={style.names}>
                                    <span className={style.namesLeft}> 安安  </span>
                                    <span className={style.namesRight}>赞了你的动态</span>
                                </div>
                                <div className={style.times}>2018-01-10</div>
                            </div>
                            <div className={style.contentListRightContent}>
                                <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/110/h/75" alt=""/>
                                <div className={style.contentListRightContentRight}>
                                    <span className={style.contentListRightContentRightTop}> 今天一回家就看到这俩货把我的沙发拆得不今天一回家就看到这俩货把我的沙发拆得不</span>
                                    <span className={style.contentListRightContentRightBottom}>2018-01-10</span>
                                </div>
                            </div>
                            <div className={style.contentListRightBottom}>
                                <span className={style.deletes}>删除</span>
                            </div>
                        </div>
                    </div>
                    <div  className={classNames(style.contentList,baseStyle.bottomLine)}>
                        <div className={style.contentListLeft}>
                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=""/>
                        </div>
                        <div className={style.contentListRight}>
                            <div className={style.contentListRightLeft}>
                                <div className={style.names}>
                                    <span className={style.namesLeft}>大大大饺子  </span>
                                    <span className={style.namesRight}>关注了你</span>
                                </div>
                                <div className={style.times}>2018-01-10</div>
                            </div>
                            <span className={style.deletes}>删除</span>
                        </div>
                    </div>
                    <div  className={classNames(style.contentList,baseStyle.bottomLine)}>
                        <div className={style.contentListLeft}>
                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/30/h/30" alt=""/>
                        </div>
                        <div className={style.contentListRight}>
                            <div className={style.contentListRightLeft}>
                                <div className={style.names}>
                                    <span className={style.namesLeft}> 麦克  </span>
                                    <span className={style.namesRight}>关注了你</span>
                                </div>
                                <div className={style.times}>2018-01-10</div>
                            </div>
                            <span className={style.deletes}>删除</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export  default connect(() => ({}))(Notice);
