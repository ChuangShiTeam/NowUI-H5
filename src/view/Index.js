import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import util from '../common/util';

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
                <div className="header">
                    <div className="header-mask" style={{opacity: this.state.opacity}}></div>
                    <div className="header-left">
                        <div className="header-left-language">
                            <img src={require('../image/ch.png')} width="31" height="27" alt=""/>
                        </div>
                    </div>
                    <div className="header-center">
                        <div className="header-center-logo">
                            <img src={require('../image/logo.png')} width="100" height="24" alt=""/>
                        </div>
                    </div>
                    <div className="header-right">
                        <Link to="/login/quick" className="header-right-user">
                            <img src={require('../image/user.png')} width="20" height="22" alt=""/>
                        </Link>
                        <div className="header-right-search">
                            <img src={require('../image/search.png')} width="20" height="22" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="swiper-container index-banner">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"
                             style={{height: (document.documentElement.clientWidth / 320 * 380) + 'px'}}>
                            <img className="index-banner-image" src={require('../image/banner.png')} alt=""/>
                            <div className='swiper-mask'></div>
                            <div className='swiper-text'>为你搜罗沪上top10可接待宠物的咖啡厅！</div>
                        </div>
                        <div className="swiper-slide"
                             style={{height: (document.documentElement.clientWidth / 320 * 380) + 'px'}}>
                            <img className="index-banner-image" src={require('../image/banner.png')} alt=""/>
                            <div className='swiper-mask'></div>
                            <div className='swiper-text'>为你搜罗沪上top10可接待宠物的咖啡厅！</div>
                        </div>
                        <div className="swiper-slide"
                             style={{height: (document.documentElement.clientWidth / 320 * 380) + 'px'}}>
                            <img className="index-banner-image" src={require('../image/banner.png')} alt=""/>
                            <div className='swiper-mask'></div>
                            <div className='swiper-text'>为你搜罗沪上top10可接待宠物的咖啡厅！</div>
                        </div>
                    </div>
                    <div className="swiper-pagination index-banner-pagination"></div>
                </div>
                <div className="swiper-container index-category">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" width="44" height="43" src={require('../image/category-0.png')} alt=""/>
                            <div className="index-category-item-text">保健卡</div>
                        </div>
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" width="44" height="43" src={require('../image/category-1.png')} alt=""/>
                            <div className="index-category-item-text">健康知识</div>
                        </div>
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" width="44" height="43" src={require('../image/category-2.png')} alt=""/>
                            <div className="index-category-item-text">饮食</div>
                        </div>
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" width="44" height="43" src={require('../image/category-3.png')} alt=""/>
                            <div className="index-category-item-text">品种</div>
                        </div>
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" width="44" height="43" src={require('../image/category-4.png')} alt=""/>
                            <div className="index-category-item-text">丧事</div>
                        </div>
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" width="44" height="43" src={require('../image/category-5.png')} alt=""/>
                            <div className="index-category-item-text">美容时尚</div>
                        </div>
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" width="44" height="43" src={require('../image/category-6.png')} alt=""/>
                            <div className="index-category-item-text">家居</div>
                        </div>
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" width="44" height="43" src={require('../image/category-7.png')} alt=""/>
                            <div className="index-category-item-text">寄养出行</div>
                        </div>
                        <div className="swiper-slide index-category-item">
                            <img className="index-category-item-image" width="44" height="43" src={require('../image/category-8.png')} alt=""/>
                            <div className="index-category-item-text">领养</div>
                        </div>
                    </div>
                </div>
                <div className="index-topic-top">
                    <div className="index-topic-top-title index-text-line">热卖商品</div>
                    <div className="index-topic-top-item">
                        <img className="index-topic-top-item-image" src={require('../image/topic-top.png')} alt=""/>
                        <div className="index-topic-top-item-text">#十大最适合和爱宠在家做的事#</div>
                    </div>
                </div>
                <div className="index-topic-list">
                    <div className="swiper-container index-topic-list-content">
                        <div className="swiper-wrapper index-topic-list-wrapper">
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-text">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-text">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-text">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-text">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-text">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-text">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-text">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-text">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-text">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
                                </div>
                            </div>
                            <div className="swiper-slide index-topic-list-content-item">
                                <img className="index-topic-list-content-item-image" width="34" height="36" src={require('../image/topic-list.png')} alt=""/>
                                <div className="index-topic-list-content-item-text">全世界的明星们都在养什么，看完我不禁感叹 贫穷限制了我的想象力
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
                    <div className="swiper-container index-topic-new-content">
                        <div className="index-topic-new-content-item">
                            <div className="index-topic-new-content-item-title">为工作而生的汪星人，拉布拉多安慰犬</div>
                            <div className="index-topic-new-content-item-summary">拉布拉多寻回猎犬并不像它的名字那样来自拉布拉……</div>
                            <img className="index-topic-new-content-item-image" src={require('../image/0b55b319ebc4b745ad648affc8fc1e178b821562.png')} alt=""/>
                        </div>
                        <div className="index-topic-new-content-item">
                            <div className="index-topic-new-content-item-title">为工作而生的汪星人，拉布拉多安慰犬</div>
                            <div className="index-topic-new-content-item-summary">拉布拉多寻回猎犬并不像它的名字那样来自拉布拉……</div>
                            <img className="index-topic-new-content-item-image" src={require('../image/0b55b319ebc4b745ad648affc8fc1e178b821562.png')} alt=""/>
                        </div>
                    </div>
                    <div className="index-topic-new-video">
                        <img className="index-topic-new-video-image" src={require('../image/640.png')} alt=""/>
                        <div className="index-topic-new-video-title">带你走进卷毛猫的世界</div>
                        <div className="index-topic-new-video-summary">近些年，随着犬展在国内兴起，赛犬开始进入大众……</div>
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
                <br/>
            </div>
        );
    }
}

Index.propTypes = {};

export default connect(() => ({}))(Index);
