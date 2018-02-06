import React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';
import baseStyle from '../../css/Base.scss';
import style from './Details.scss';
import classNames from 'classnames';
import  ReactSwipes from 'react-swipes';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
let opt = {
    distance: 230,
    currentPoint: 0,
    autoPlay: false,
    loop: true,
    swTouchstart: (ev) => {

    },
    swTouchmove: (ev) => {

    },
    swTouchend: (ev) => {
        let data = {
            moved: ev.moved,
            originalPoint: ev.originalPoint,
            newPoint: ev.newPoint,
            cancelled: ev.cancelled,
        }
        console.log(data);
    }
}


class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            isSelectedIndex:0,
            clicked: 'none',
            clicked1: 'none',
            clicked2: 'none',

        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
    }

    componentWillUnmount() {

    }

    render() {

        return (
            <div className={classNames(baseStyle.page,style.page)} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <img className={style.headerBackground} src={require("../../image/0.png")}  alt=""/>
                    <div className={style.mask}>
                        <img className={style.photo} src={require("../../image/0.png")}alt=""/>
                        <span className={style.name}>小精灵医院</span>
                        <div className={style.people}>
                            <span className={style.fans}>1390 粉丝</span>
                            <span className={style.number}>¥1699 人均</span>
                        </div>
                    </div>
                </div>
                <div className={ classNames(style.details,baseStyle.bottomLine)}>
                    <div className={style.detailsTop}>
                        <span className={style.detailsTopLeft}>评分
                             <span  className={style.detailsTopLeftOther}>服务 8.2  环境 7.3</span>
                        </span>
                        <div className={style.detailsTopRight}>
                            <img src={require("../../image/star.png")} alt=""/>
                            <img src={require("../../image/star.png")} alt=""/>
                            <img src={require("../../image/star.png")} alt=""/>
                            <img src={require("../../image/star.png")} alt=""/>
                            <img src={require("../../image/star.png")} alt=""/>
                        </div>
                    </div>
                    <div className={style.detailsCenter}>
                        <div className={style.detailsCenterLeft}>
                            <img src={require("../../image/service-address.png")} alt=""/>
                            <span>羽山路948号（南洋泾路羽山路）</span>
                        </div>
                        <img className={style.detailsCenterRight} src={require("../../image/service-phone.png")} alt=""/>
                    </div>
                    <div className={style.detailsBottom}>
                        <div className={style.detailsBottomTop}>
                            <img className={style.timesIcon} src={require("../../image/service-time.png")} alt=""/>
                            <span>营业时间：</span>
                        </div>
                        <span className={style.time}>周一至周日 09:00-21:00</span>
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.contentTop}>
                        <div>
                            <span className={style.tittle}>全部点评</span>
                            <span  className={style.tittleNumber}>(55)</span>
                        </div>
                        <div className={style.tittleRights}></div>
                    </div>
                    <div className={classNames(style.contentList,baseStyle.bottomLine)}>
                        <img className={style.contentListImg }src={require("../../image/2.png")} alt=""/>
                        <div className={style.ListRight}>
                                <div className={style.friendsInfo}>
                                    <span className={style.friendsName}>喵子酱</span>
                                    <span className={style.friendsTime}>2018-01-12</span>
                                </div>
                                <div>
                                    <span className={style.score}>打分</span>
                                    <div className={style.scoreImg}>
                                        <img src={require("../../image/star.png")} alt=""/>
                                        <img src={require("../../image/star.png")} alt=""/>
                                        <img src={require("../../image/star.png")} alt=""/>
                                        <img src={require("../../image/star.png")} alt=""/>
                                        <img src={require("../../image/star.png")} alt=""/>
                                    </div>
                                </div>
                                <div className={style.ListRightContent}>这家店的医生很不错哦，很耐心。而且医术还很高超，经过一个月...</div>
                            {
                                true?
                                    <a href="" className={style.readAll}>阅读全文</a>
                                    : null
                            }
                            <div className={style.listImg}>
                                <img src={require("../../image/2.png")}alt=""/>
                                <img src={require("../../image/2.png")}alt=""/>
                                <img src={require("../../image/2.png")}alt=""/>
                            </div>
                            <div className={style.listBottom}>
                                <span>3个赞 4条评论</span>
                                <div className={style.listBottomRight}>
                                    {
                                        true?
                                            <div className={classNames(style.agree,style.agreeBorder)}>
                                                <img className={style.agreeIcon} src={require("../../image/service-agree.png")} alt=""/>
                                                <span>赞</span>
                                            </div>
                                            :
                                            <div className={classNames(style.agree,style.agreeBackground)}>
                                                <img className={style.agreeIcon} src={require("../../image/service-agreeactive.png")} alt=""/>
                                                <span>赞</span>
                                            </div>
                                    }
                                  
                                    <div className={style.talk}>
                                        <img className={style.talkIcon} src={require("../../image/service-talk.png")} alt=""/>
                                        <span>评论</span>
                                    </div>
                                </div>
                         
                            </div>
                        </div>
                    </div>
                    <div className={classNames(style.contentList,baseStyle.bottomLine)}>
                        <img className={style.contentListImg }src={require("../../image/2.png")} alt=""/>
                        <div className={style.ListRight}>
                            <div className={style.friendsInfo}>
                                <span className={style.friendsName}>喵子酱</span>
                                <span className={style.friendsTime}>2018-01-12</span>
                            </div>
                            <div>
                                <span className={style.score}>打分</span>
                                <div className={style.scoreImg}>
                                    <img src={require("../../image/star.png")} alt=""/>
                                    <img src={require("../../image/star.png")} alt=""/>
                                    <img src={require("../../image/star.png")} alt=""/>
                                    <img src={require("../../image/star.png")} alt=""/>
                                    <img src={require("../../image/star.png")} alt=""/>
                                </div>
                            </div>
                            <div className={style.ListRightContent}>这家店的医生很不错哦，很耐心。而且医术还很高超，经过一个月...</div>
                            <div className={style.listBottom}>
                                <span>3个赞 4条评论</span>
                                <div className={style.listBottomRight}>
                                    {
                                        false?
                                            <div className={classNames(style.agree,style.agreeBorder)}>
                                                <img className={style.agreeIcon} src={require("../../image/service-agree.png")} alt=""/>
                                                <span>赞</span>
                                            </div>
                                            :
                                            <div className={classNames(style.agree,style.agreeBackground)}>
                                                <img className={style.agreeIcon} src={require("../../image/service-agreeactive.png")} alt=""/>
                                                <span className={style.pinkFont}>赞</span>
                                            </div>
                                    }

                                    <div className={style.talk}>
                                        <img className={style.talkIcon} src={require("../../image/service-talk.png")} alt=""/>
                                        <span>评论</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={classNames(style.contentBottom,baseStyle.bottomLine)}>
                        查看全部评论
                    </div>
                </div>
                <div className={style.contentTop}>
                    <div>
                        <span className={style.tittle}>相关动态</span>
                        <span  className={style.tittleNumber}>(34)</span>
                    </div>
                    <div className={style.tittleRights}></div>
                </div>
                <ReactSwipes  options={opt} className={classNames(style.otherThinkBottom,"card-slide" ,baseStyle.bottomLine)}>
                    {
                        [1,2,3].map((val, index) => <div className={style.otherThinkBottomList} key={index}>
                            <img className={style.otherThinkBottomListTop} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/640/h/250" alt=""/>
                            <div className={style.otherThinkBottomListCenter}>我家的猫咪超喜欢在里面和我躲猫猫的超级可…</div>
                            <div className={style.otherThinkBottomListBottom}>
                                <img className={style.otherThinkBottomListBottomImg} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/640/h/250" alt=""/>
                                <span className={style.otherThinkBottomListBottomFont}>大木木_Lin</span>
                            </div>
                        </div>)
                    }
                </ReactSwipes>
                <div className={style.contentTop}>
                    <div>
                        <span className={style.tittle}>商户动态 </span>
                        <span  className={style.tittleNumber}>(34)</span>
                    </div>
                    <div className={style.tittleRights}></div>
                </div>
                <div className={classNames(style.contentList,baseStyle.bottomLine)}>
                    <img className={style.contentListImg }src={require("../../image/2.png")} alt=""/>
                    <div className={style.ListRight}>
                        <div className={style.friendsInfo}>
                            <span className={style.friendsName}>小精灵医院</span>
                        </div>
                        <div className={classNames( style.ListRightContent,style.ListRightContentMargin)}>这家店的医生很不错哦，很耐心。而且医术还很高超，经过一个月...</div>
                        <div className={style.shopImg}>
                            <img src={require("../../image/2.png")}alt=""/>
                        </div>
                        <span className={classNames(style.friendsTime,style.friendsTimeMargin) }>2018-01-12  18:32</span>
                    </div>

                </div>
                <div className={classNames(style.contentList,baseStyle.bottomLine)}>
                    <img className={style.contentListImg }src={require("../../image/2.png")} alt=""/>
                    <div className={style.ListRight}>
                        <div className={style.friendsInfo}>
                            <span className={style.friendsName}>小精灵医院</span>
                        </div>
                        <div className={classNames( style.ListRightContent,style.ListRightContentMargin)}>这家店的医生很不错哦，很耐心。而且医术还很高超，经过一个月...</div>
                        <span className={classNames(style.friendsTime,style.friendsTimeMargin) }>2018-01-12  18:32</span>
                    </div>

                </div>
                <div className={classNames(style.contentBottom,baseStyle.bottomLine)}>
                    查看全部商家动态
                </div>
                <div className={classNames(style.contentTop,baseStyle.bottomLine) }>
                    <div>
                        <span className={style.tittle}>品牌故事 </span>
                    </div>
                    <div className={style.tittleRights}></div>
                </div>
                <div className={classNames(style.contentTop,baseStyle.bottomLine)}>
                    <div>
                        <span className={style.tittle}>分店信息  </span>
                        <span  className={style.tittleNumber}>(2)</span>
                    </div>
                    <div className={style.tittleRights}></div>
                </div>
                <div className={ classNames(style.details,baseStyle.bottomLine)}>
                    <div className={style.detailsTop}>
                        <span className={style.detailsTopLeft}>商户信息</span>
                    </div>
                    <div className={style.detailsBottom}>
                        <div className={style.detailsBottomTop}>
                            <img className={style.timesIcon} src={require("../../image/service-time.png")} alt=""/>
                            <span>营业时间：</span>
                        </div>
                        <span className={style.time}>周一至周日 09:00-21:00</span>
                    </div>
                    <div className={classNames(style.detailsCenter,style.shopingInfoBottom)}>
                        <div className={style.iconList}>
                            <img className={style.iconListImg} src={require("../../image/service-wifi.png")} alt=""/>
                            <span className={style.iconListName}>WIFI</span>
                        </div>
                        <div className={style.iconList}>
                            <img className={style.iconListImg} src={require("../../image/service-card.png")} alt=""/>
                            <span className={style.iconListName}>刷卡</span>
                        </div>
                        <div className={style.iconList}>
                            <img className={style.iconListImg} src={require("../../image/service-parking.jpg")} alt=""/>
                            <span className={style.iconListName}>停车位</span>
                        </div>
                        <div className={style.iconList}>
                            <img className={style.iconListImg} src={require("../../image/service-battery.png")} alt=""/>
                            <span className={style.iconListName}>手机充电</span>
                        </div>

                    </div>
                </div>
                <div className={ classNames(style.details,baseStyle.bottomLine)}>
                    <div className={style.detailsTop}>
                        <span className={style.detailsTopLeft}>相关商户</span>
                    </div>

                    <ReactSwipes  options={opt} className={classNames(style.storeList,"card-slide" )}>
                        {
                            [1,2,3,4,5].map((val, index) =>
                                <div className={style.storeListItem} key={index}>
                                    <img className={style.storeListItemImg} src={require("../../image/0.png")}  alt=""/>
                                    <span  className={style.storeListItemFont}> 小精灵医院</span>
                                </div>)
                        }
                    </ReactSwipes>
                </div>
            </div>
        );
    }
}

Details.propTypes = {};

export default connect(() => ({}))(Details);
