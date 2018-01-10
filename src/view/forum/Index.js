import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import util from "../../common/util";

import './Index.css';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');

        new window.Swiper('.forum-index-interested-content', {
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

    handleAdd() {
        this.props.history.push({
            pathname: '/forum/add',
            query: {}
        });
    }

    handleSearch() {
        this.props.history.push({
            pathname: '/forum/search',
            query: {}
        });
    }

    handleSubmit() {

    }

    render() {
        return (
            <div>
                <div className="forum-index-header">
                    <div className="forum-index-header-mask" style={{opacity: this.state.opacity}}></div>
                    <div className="forum-index-header-left">
                        <div className="forum-index-header-left-add" onClick={this.handleAdd.bind(this)}>
                            <img src={require('../../image/forum-add.png')} alt=""/>
                        </div>
                    </div>
                    <div className="forum-index-header-center">
                        <div className="forum-index-header-center-left">圈子</div>
                        <Link to="/topic/index" className="forum-index-header-center-right">动态</Link>
                    </div>
                    <div className="forum-index-header-right">
                        <div className="forum-index-header-right-search" onClick={this.handleSearch.bind(this)}>
                            <img src={require('../../image/search.png')} width="20" height="22" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="forum-index-my">
                    <div className="forum-index-my-header">
                        <img className="forum-index-my-header-icon" src={require('../../image/forum-index-my.png')}
                             width="22"
                             height="16" alt=""/>
                        <div className="forum-index-my-header-text">我加入的圈子</div>
                    </div>
                    <div className="forum-index-my-content">
                        <Link to="/forum/homepage">
                            <div className="forum-index-my-content-item">
                                <img className="forum-index-my-content-item-icon"
                                     src={require('../../image/WechatIMG2050.png')}
                                     alt=""/>
                                <div className="forum-index-my-content-item-title">魔都喵星人</div>
                                <div className="forum-index-my-content-item-summary">这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入</div>
                                <img className="forum-index-my-content-item-user-icon"
                                     src={require('../../image/forum-index-my-content-item-user-icon.png')} alt=""/>
                                <div className="forum-index-my-content-item-user-name">小可爱</div>
                                <div className="forum-index-my-content-item-topic">今日最新话题数 <span
                                    className="forum-index-my-content-item-topic-number">53</span></div>
                                <div className="forum-index-my-content-item-top">置顶</div>
                            </div>
                        </Link>
                        <Link to="/forum/homepage">
                            <div className="forum-index-my-content-item">
                                <img className="forum-index-my-content-item-icon"
                                     src={require('../../image/WechatIMG2050.png')}
                                     alt=""/>
                                <div className="forum-index-my-content-item-title">魔都喵星人</div>
                                <div className="forum-index-my-content-item-summary">这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入</div>
                                <img className="forum-index-my-content-item-user-icon"
                                     src={require('../../image/forum-index-my-content-item-user-icon.png')} alt=""/>
                                <div className="forum-index-my-content-item-user-name">小可爱</div>
                                <div className="forum-index-my-content-item-topic">今日最新话题数 <span
                                    className="forum-index-my-content-item-topic-number">53</span></div>
                                <div className="forum-index-my-content-item-top">置顶</div>
                            </div>
                        </Link>
                        <Link to="/forum/homepage">
                            <div className="forum-index-my-content-item">
                                <img className="forum-index-my-content-item-icon"
                                     src={require('../../image/WechatIMG2050.png')}
                                     alt=""/>
                                <div className="forum-index-my-content-item-title">魔都喵星人</div>
                                <div className="forum-index-my-content-item-summary">这里是魔都喵星人的聚集地，是爱猫人士的家园，欢迎加入</div>
                                <img className="forum-index-my-content-item-user-icon"
                                     src={require('../../image/forum-index-my-content-item-user-icon.png')} alt=""/>
                                <div className="forum-index-my-content-item-user-name">小可爱</div>
                                <div className="forum-index-my-content-item-topic">今日最新话题数 <span
                                    className="forum-index-my-content-item-topic-number">53</span></div>
                                <div className="forum-index-my-content-item-top">置顶</div>
                            </div>
                        </Link>
                        <div className="forum-index-my-content-more">
                            <div className="forum-index-my-content-more-text">查看更多</div>
                            <img className="forum-index-my-content-more-icon"
                                 src={require('../../image/forum-index-my-content-more-icon.png')} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="forum-index-interested">
                    <div className="forum-index-interested-header">
                        <img className="forum-index-interested-header-icon" src={require('../../image/forum-index-interested.png')}
                             alt=""/>
                        <div className="forum-index-interested-header-text">你可能感兴趣的圈子</div>
                    </div>
                    <div className="forum-index-interested-content">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide forum-index-interested-content-item">
                                <img src={require('../../image/forum-index-interested-item.png')} alt=""/>
                            </div>
                            <div className="swiper-slide forum-index-interested-content-item">
                                <img src={require('../../image/forum-index-interested-item.png')} alt=""/>
                            </div>
                            <div className="swiper-slide forum-index-interested-content-item">
                                <img src={require('../../image/forum-index-interested-item.png')} alt=""/>
                            </div>
                            <div className="swiper-slide forum-index-interested-content-item">
                                <img src={require('../../image/forum-index-interested-item.png')} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="forum-index-hot">
                    <div className="forum-index-hot-header">
                        热门动态
                    </div>
                    <div className="forum-index-hot-content">
                        <div className="forum-index-hot-content-item">
                            <div className="forum-index-hot-content-item-header">
                                <img className="forum-index-hot-content-item-header-icon"
                                     src={require('../../image/WechatIMG1916.png')} alt=""/>
                                <div className="forum-index-hot-content-item-header-name">Nami</div>
                                <div className="forum-index-hot-content-item-header-time">20分钟前</div>
                            </div>
                            <div className="forum-index-hot-content-item-content"></div>
                            <div className="forum-index-hot-content-item-footer">
                                <div className="forum-index-hot-content-item-footer-line"></div>
                                <div className="forum-index-hot-content-item-footer-tag">
                                    <div className="forum-index-hot-content-item-footer-tag-from">来自</div>
                                    <div className="forum-index-hot-content-item-footer-tag-text">大爱猫咪控</div>
                                    <div className="forum-index-hot-content-item-footer-tag-text">大爱猫咪控</div>
                                    <div className="forum-index-hot-content-item-footer-tag-text">大爱猫咪控</div>
                                    <div className="forum-index-hot-content-item-footer-tag-text">大爱猫咪控</div>
                                </div>
                                <img className="forum-index-hot-content-item-footer-like-icon"
                                     src={require('../../image/forum-index-hot-content-item-footer-like-active.png')} alt=""/>
                                <span className="forum-index-hot-content-item-footer-like-number">10</span>
                                <img className="forum-index-hot-content-item-footer-favorite-icon"
                                     src={require('../../image/forum-index-hot-content-item-footer-favorite-active.png')}
                                     alt=""/>
                                <span className="forum-index-hot-content-item-footer-favorite-number">10</span>
                                <img className="forum-index-hot-content-item-footer-comment-icon"
                                     src={require('../../image/forum-index-hot-content-item-footer-comment.png')} alt=""/>
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
