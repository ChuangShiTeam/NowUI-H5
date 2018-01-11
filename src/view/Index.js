import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import util from '../common/util';

import Topic from "../component/topic/Index";

import './Index.css';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            opacity: 0
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');

        new window.Swiper('.index-banner', {
            loop: true,
            pagination: {
                el: '.index-banner-pagination',
            }
        });

        new window.Swiper('.index-category', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true
        });

        new window.Swiper('.index-topic-list-content', {
            direction: 'vertical',
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true
        });

        new window.Swiper('.index-topic-category-content', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true
        });

        new window.Swiper('.index-talent-content', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true
        });

        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        this.setState({
            opacity: scrollTop / 200
        });
    }

    render() {
        return (
            <div>
                <div className="index-header">
                    <div className="index-header-mask" style={{opacity: this.state.opacity}}></div>
                    <div className="index-header-left">
                        <div className="index-header-left-user">
                            <img src={require('../image/index-user.png')} alt=""/>
                        </div>
                    </div>
                    <div className="index-header-center">
                        <div className="index-header-center-logo">
                            <img src={require('../image/index-logo.png')} alt=""/>
                        </div>
                    </div>
                    <div className="index-header-right">
                        <div className="index-header-right-search">
                            <img src={require('../image/index-search.png')} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="swiper-container index-banner">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"
                             style={{height: (document.documentElement.clientWidth / 320 * 380) + 'px'}}>
                            <img className="index-banner-image" src={require('../image/banner.png')} alt=""/>
                        </div>
                        <div className="swiper-slide"
                             style={{height: (document.documentElement.clientWidth / 320 * 380) + 'px'}}>
                            <img className="index-banner-image" src={require('../image/banner.png')} alt=""/>
                        </div>
                        <div className="swiper-slide"
                             style={{height: (document.documentElement.clientWidth / 320 * 380) + 'px'}}>
                            <img className="index-banner-image" src={require('../image/banner.png')} alt=""/>
                        </div>
                    </div>
                    <div className="swiper-pagination index-banner-pagination"></div>
                </div>
                <div className="swiper-container index-category">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" src={require('../image/category-0.png')} alt=""/>
                            <div className="index-category-item-name">保健卡</div>
                        </div>
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" src={require('../image/category-1.png')} alt=""/>
                            <div className="index-category-item-name">健康知识</div>
                        </div>
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" src={require('../image/category-2.png')} alt=""/>
                            <div className="index-category-item-name">饮食</div>
                        </div>
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" src={require('../image/category-3.png')} alt=""/>
                            <div className="index-category-item-name">品种</div>
                        </div>
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" src={require('../image/category-4.png')} alt=""/>
                            <div className="index-category-item-name">丧事</div>
                        </div>
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" src={require('../image/category-5.png')} alt=""/>
                            <div className="index-category-item-name">美容时尚</div>
                        </div>
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" src={require('../image/category-6.png')} alt=""/>
                            <div className="index-category-item-name">家居</div>
                        </div>
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" src={require('../image/category-7.png')} alt=""/>
                            <div className="index-category-item-name">寄养出行</div>
                        </div>
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" src={require('../image/category-8.png')} alt=""/>
                            <div className="index-category-item-name">领养</div>
                        </div>
                    </div>
                </div>
                <div className="index-topic-top">
                    <div className="index-topic-top-title index-text-line">热门话题</div>
                    <div className="index-topic-top-item">
                        <img className="index-topic-top-item-image" src={require('../image/index-top-image.png')} alt=""/>
                    </div>
                </div>
                <div className="index-topic-list">
                    <div className="swiper-container index-topic-list-content">
                        <div className="swiper-wrapper index-topic-list-wrapper">
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-title">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-title">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-title">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-title">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-title">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-title">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-title">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-title">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-title">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-title">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="index-topic-category">
                    <div className="index-topic-category-title index-text-line">话题分类</div>
                    <div className="swiper-container index-topic-category-content">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide index-topic-category-item">
                                <img className="index-topic-category-item-image" src={require('../image/topic-category.png')} alt=""/>
                                <div className="index-topic-category-item-text"><p>狗</p><p className="index-topic-category-item-text-tag">Dog</p></div>
                            </div>
                            <div className="swiper-slide index-topic-category-item">
                                <img className="index-topic-category-item-image" src={require('../image/topic-category.png')} alt=""/>
                                <div className="index-topic-category-item-text"><p>狗</p><p className="index-topic-category-item-text-tag">Dog</p></div>
                            </div>
                            <div className="swiper-slide index-topic-category-item">
                                <img className="index-topic-category-item-image" src={require('../image/topic-category.png')} alt=""/>
                                <div className="index-topic-category-item-text"><p>狗</p><p className="index-topic-category-item-text-tag">Dog</p></div>
                            </div>
                            <div className="swiper-slide index-topic-category-item">
                                <img className="index-topic-category-item-image" src={require('../image/topic-category.png')} alt=""/>
                                <div className="index-topic-category-item-text"><p>狗</p><p className="index-topic-category-item-text-tag">Dog</p></div>
                            </div>
                            <div className="swiper-slide index-topic-category-item">
                                <img className="index-topic-category-item-image" src={require('../image/topic-category.png')} alt=""/>
                                <div className="index-topic-category-item-text"><p>狗</p><p className="index-topic-category-item-text-tag">Dog</p></div>
                            </div>
                            <div className="swiper-slide index-topic-category-item">
                                <img className="index-topic-category-item-image" src={require('../image/topic-category.png')} alt=""/>
                                <div className="index-topic-category-item-text"><p>狗</p><p className="index-topic-category-item-text-tag">Dog</p></div>
                            </div>
                            <div className="swiper-slide index-topic-category-item">
                                <img className="index-topic-category-item-image" src={require('../image/topic-category.png')} alt=""/>
                                <div className="index-topic-category-item-text"><p>狗</p><p className="index-topic-category-item-text-tag">Dog</p></div>
                            </div>
                            <div className="swiper-slide index-topic-category-item">
                                <img className="index-topic-category-item-image" src={require('../image/topic-category.png')} alt=""/>
                                <div className="index-topic-category-item-text"><p>狗</p><p className="index-topic-category-item-text-tag">Dog</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="index-talent">
                    <div className="index-talent-title index-text-line">达人榜</div>
                    <div className="swiper-container index-talent-content">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide index-talent-item">
                                <div className="index-talent-item-content">
                                    <img className="index-talent-item-content-image" src={require('../image/235570.png')} alt=""/>
                                    <p className="index-talent-item-content-name">准主人须知</p>
                                    <p className="index-talent-item-content-tag">编辑推荐</p>
                                    <div className="index-talent-item-content-button">去看看</div>
                                </div>
                            </div>
                            <div className="swiper-slide index-talent-item">
                                <div className="index-talent-item-content">
                                    <img className="index-talent-item-content-image" src={require('../image/235570.png')} alt=""/>
                                    <p className="index-talent-item-content-name">准主人须知</p>
                                    <p className="index-talent-item-content-tag">编辑推荐</p>
                                    <div className="index-talent-item-content-button">去看看</div>
                                </div>
                            </div>
                            <div className="swiper-slide index-talent-item">
                                <div className="index-talent-item-content">
                                    <img className="index-talent-item-content-image" src={require('../image/235570.png')} alt=""/>
                                    <p className="index-talent-item-content-name">准主人须知</p>
                                    <p className="index-talent-item-content-tag">编辑推荐</p>
                                    <div className="index-talent-item-content-button">去看看</div>
                                </div>
                            </div>
                            <div className="swiper-slide index-talent-item">
                                <div className="index-talent-item-content">
                                    <img className="index-talent-item-content-image" src={require('../image/235570.png')} alt=""/>
                                    <p className="index-talent-item-content-name">准主人须知</p>
                                    <p className="index-talent-item-content-tag">编辑推荐</p>
                                    <div className="index-talent-item-content-button">去看看</div>
                                </div>
                            </div>
                            <div className="swiper-slide index-talent-item">
                                <div className="index-talent-item-content">
                                    <img className="index-talent-item-content-image" src={require('../image/235570.png')} alt=""/>
                                    <p className="index-talent-item-content-name">准主人须知</p>
                                    <p className="index-talent-item-content-tag">编辑推荐</p>
                                    <div className="index-talent-item-content-button">去看看</div>
                                </div>
                            </div>
                            <div className="swiper-slide index-talent-item">
                                <div className="index-talent-item-content">
                                    <img className="index-talent-item-content-image" src={require('../image/235570.png')} alt=""/>
                                    <p className="index-talent-item-content-name">准主人须知</p>
                                    <p className="index-talent-item-content-tag">编辑推荐</p>
                                    <div className="index-talent-item-content-button">去看看</div>
                                </div>
                            </div>
                            <div className="swiper-slide index-talent-item">
                                <div className="index-talent-item-content">
                                    <img className="index-talent-item-content-image" src={require('../image/235570.png')} alt=""/>
                                    <p className="index-talent-item-content-name">准主人须知</p>
                                    <p className="index-talent-item-content-tag">编辑推荐</p>
                                    <div className="index-talent-item-content-button">去看看</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="index-topic-new">
                    <div className="index-topic-new-title index-text-line">最新话题</div>
                </div>
                <Topic/>
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
                <br/>
            </div>
        );
    }
}

Index.propTypes = {};

export default connect(() => ({}))(Index);
