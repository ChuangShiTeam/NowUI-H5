import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import util from '../../common/util';

import style from './Index.scss';
import baseStyle from '../../css/Base.scss';

class Index extends Component {
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
    render() {
        return (
            <div className={style.baseStyle}>
                <div className={style.page}>
                    <div className={style.headImg}>
                        <div className={style.imgLeft}>
                            <div className={style.headImg1}>
                                <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/56/h/56" alt=""/>
                                <div>大木木_Lin</div>
                            </div>
                            <div className={style.imgRight}>
                                <div className={style.rightLeft}>个人主页</div>
                                <div className={style.rightRight}></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.middle}>
                        <div className={style.middleLeft}>
                            <div className={style.redSpot}></div>
                            <div>
                               <div className={style.newsImg}>
                                   <img src={require('../../image/my-news.png')} alt=""/>
                               </div>
                                <div className={style.news}>消息</div>
                            </div>
                        </div>
                        <div className={style.middleRight}>
                            <div>
                                <div className={style.loveImg}>
                                    <img src={require('../../image/my-collect.png')} alt=""/>
                                </div>
                                <div className={style.news}>收藏</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.nullDiv}></div>
                    <div className={style.newsList}>
                        <Link to="/my/info" className={style.listModule}>
                            <div className={style.moreLeft}>
                                <div  className={style.picture}>
                                    <img src={require('../../image/my-user.png')}  alt=""/>
                                </div>
                                <div className={style.pictureRight}>个人资料</div>
                            </div>
                            <div className={style.more}>
                                <div className={style.moreImg}></div>
                            </div>
                        </Link>
                        <div className={style.nullDiv1}></div>
                        <div className={style.listModule}>
                            <div className={style.moreLeft}>
                                <div  className={style.picture}>
                                    <img src={require('../../image/my-pet.png')}  alt=""/>
                                </div>
                                <div className={style.pictureRight}>我的爱宠</div>
                            </div>
                            <div className={style.more}>
                                <div className={style.moreImg}></div>
                            </div>
                        </div>
                        <div className={style.nullDiv1}></div>
                        <div className={style.listModule}>
                            <div className={style.moreLeft}>
                                <div  className={style.pictureFollow}>
                                    <img  src={require('../../image/my-follow.png')}  alt=""/>
                                </div>
                                <div className={style.pictureRight}>我的关注</div>
                            </div>
                            <div className={style.more}>
                                <div className={style.moreImg}></div>
                            </div>
                        </div>
                        <div className={style.nullDiv1}></div>
                        <div className={style.listModule}>
                            <div className={style.moreLeft}>
                                <div  className={style.pictureQrcode}>
                                    <img src={require('../../image/my-qrcode.png')}  alt=""/>
                                </div>
                                <div className={style.pictureRight}>我的二维码</div>
                            </div>
                            <div className={style.more}>
                                <div className={style.moreImg}></div>
                            </div>
                        </div>
                        <div className={style.nullDiv1}></div>
                    </div>
                    <div className={style.getOut}>
                        <div>退出登录</div>
                    </div>

                </div>
            </div>
        );
    }
}

Index.propTypes = {};

export default connect(() => ({}))(Index);
