import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Toast} from 'antd-mobile';

import util from "../../common/util";

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');

        new window.Swiper('.forum-interested-content', {
            autoplay: 3000,
            speed: 1000,
            autoplayDisableOnInteraction: false,
            loop: true,
            centeredSlides: true,
            slidesPerView: 2,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
            onInit: function (swiper) {
                swiper.slides[2].className = "swiper-slide swiper-slide-active";
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                }
            }
        });
    }

    componentWillUnmount() {

    }

    handleSubmit() {

    }

    render() {
        return (
            <div>
                <div className="header header-bottom">
                    <div className="header-mask" style={{opacity: this.state.opacity}}></div>
                    <div className="header-left">
                        <div className="header-left-forum-add">
                            <img src={require('../../image/forum-add.png')} alt=""/>
                        </div>
                    </div>
                    <div className="header-center">
                        <div className="header-center-left">圈子</div>
                        <div className="header-center-right">动态</div>
                    </div>
                    <div className="header-right">
                        <div className="header-right-forum-search">
                            <img src={require('../../image/search.png')} width="20" height="22" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="forum-my">
                    <div className="forum-my-header">
                        <img className="forum-my-header-icon" src={require('../../image/forum-my.png')} width="22"
                             height="16" alt=""/>
                        <div className="forum-my-header-text">我加入的圈子</div>
                    </div>
                    <div className="forum-my-content">
                        <div className="forum-my-content-item">
                            <img className="forum-my-content-item-icon" src={require('../../image/WechatIMG2050.png')}
                                 alt=""/>
                            <div className="forum-my-content-item-title">魔都喵星人</div>
                            <div className="forum-my-content-item-summary">这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入</div>
                            <img className="forum-my-content-item-user-icon"
                                 src={require('../../image/forum-my-content-item-user-icon.png')} alt=""/>
                            <div className="forum-my-content-item-user-name">小可爱</div>
                            <div className="forum-my-content-item-topic">今日最新话题数 <span
                                className="forum-my-content-item-topic-number">53</span></div>
                            <div className="forum-my-content-item-top">置顶</div>
                        </div>
                        <div className="forum-my-content-item">
                            <img className="forum-my-content-item-icon" src={require('../../image/WechatIMG2050.png')}
                                 alt=""/>
                            <div className="forum-my-content-item-title">魔都喵星人</div>
                            <div className="forum-my-content-item-summary">这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入</div>
                            <img className="forum-my-content-item-user-icon"
                                 src={require('../../image/forum-my-content-item-user-icon.png')} alt=""/>
                            <div className="forum-my-content-item-user-name">小可爱</div>
                            <div className="forum-my-content-item-topic">今日最新话题数 <span
                                className="forum-my-content-item-topic-number">53</span></div>
                            <div className="forum-my-content-item-top">置顶</div>
                        </div>
                        <div className="forum-my-content-item">
                            <img className="forum-my-content-item-icon" src={require('../../image/WechatIMG2050.png')}
                                 alt=""/>
                            <div className="forum-my-content-item-title">魔都喵星人</div>
                            <div className="forum-my-content-item-summary">这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入</div>
                            <img className="forum-my-content-item-user-icon"
                                 src={require('../../image/forum-my-content-item-user-icon.png')} alt=""/>
                            <div className="forum-my-content-item-user-name">小可爱</div>
                            <div className="forum-my-content-item-topic">今日最新话题数 <span
                                className="forum-my-content-item-topic-number">53</span></div>
                            <div className="forum-my-content-item-top">置顶</div>
                        </div>
                        <div className="forum-my-content-more">
                            <div className="forum-my-content-more-text">查看更多</div>
                            <img className="forum-my-content-more-icon"
                                 src={require('../../image/forum-my-content-more-icon.png')} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="forum-interested">
                    <div className="forum-interested-header">
                        <img className="forum-interested-header-icon" src={require('../../image/forum-interested.png')}
                             alt=""/>
                        <div className="forum-interested-header-text">你可能感兴趣的圈子</div>
                    </div>
                    <div className="forum-interested-content">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide forum-interested-content-item">
                                <img src={require('../../image/forum-interested-item.png')} alt=""/>
                            </div>
                            <div className="swiper-slide forum-interested-content-item">
                                <img src={require('../../image/forum-interested-item.png')} alt=""/>
                            </div>
                            <div className="swiper-slide forum-interested-content-item">
                                <img src={require('../../image/forum-interested-item.png')} alt=""/>
                            </div>
                            <div className="swiper-slide forum-interested-content-item">
                                <img src={require('../../image/forum-interested-item.png')} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="forum-hot">
                    <div className="forum-hot-header">
                        热门动态
                    </div>
                    <div className="forum-hot-content">
                        <div className="forum-hot-content-item">
                            <div className="forum-hot-content-item-header">
                                <img className="forum-hot-content-item-header-icon" src={require('../../image/WechatIMG1916.png')} alt=""/>
                                <div className="forum-hot-content-item-header-name">Nami</div>
                                <div className="forum-hot-content-item-header-time">20分钟前</div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

Index.propTypes = {};

export default connect(() => ({}))(Index);
