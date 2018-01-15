import React, {Component} from 'react';
import {connect} from 'react-redux';

import TopicIndex from "../../component/topic/Index";

import util from '../../common/util';

import './Index.css';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: 0
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');

        window.addEventListener('scroll', this.handleScroll);

        this.props.dispatch({
            type: 'index',
            data: {
                bannerList: [{
                    bannerId: 0
                }, {
                    bannerId: 1
                }, {
                    bannerId: 2
                }, {
                    bannerId: 3
                }, {
                    bannerId: 4
                }],
                articleCategoryList: [{
                    articleCategoryId: 0,
                    articleCategoryName: '保健卡',
                    articleCategoryImage: '../../image/category-0.png'
                }, {
                    articleCategoryId: 1,
                    articleCategoryName: '健康知识',
                    articleCategoryImage: '../../image/category-1.png'
                }, {
                    articleCategoryId: 2,
                    articleCategoryName: '饮食',
                    articleCategoryImage: '../../image/category-2.png'
                }, {
                    articleCategoryId: 3,
                    articleCategoryName: '品种',
                    articleCategoryImage: '../../image/category-3.png'
                }, {
                    articleCategoryId: 4,
                    articleCategoryName: '丧事',
                    articleCategoryImage: '../../image/category-4.png'
                }, {
                    articleCategoryId: 5,
                    articleCategoryName: '美容时尚',
                    articleCategoryImage: '../../image/category-5.png'
                }, {
                    articleCategoryId: 6,
                    articleCategoryName: '家居',
                    articleCategoryImage: '../../image/category-6.png'
                }, {
                    articleCategoryId: 7,
                    articleCategoryName: '寄养出行',
                    articleCategoryImage: '../../image/category-7.png'
                }, {
                    articleCategoryId: 8,
                    articleCategoryName: '领养',
                    articleCategoryImage: '../../image/category-8.png'
                }],
                topArticleList: [{
                    articleId: 0,
                    articleTitle: '英国女王的挚爱——威尔士柯基，传说中的蜜桃臀英国女王的挚爱——威尔士柯基，传说中的蜜桃臀英国女王的挚爱——威尔士柯基，传说中的蜜桃臀'
                }, {
                    articleId: 1,
                    articleTitle: '英国女王的挚爱——威尔士柯基，传说中的蜜桃臀英国女王的挚爱——威尔士柯基，传说中的蜜桃臀英国女王的挚爱——威尔士柯基，传说中的蜜桃臀'
                }, {
                    articleId: 2,
                    articleTitle: '英国女王的挚爱——威尔士柯基，传说中的蜜桃臀英国女王的挚爱——威尔士柯基，传说中的蜜桃臀英国女王的挚爱——威尔士柯基，传说中的蜜桃臀'
                }, {
                    articleId: 3,
                    articleTitle: '英国女王的挚爱——威尔士柯基，传说中的蜜桃臀英国女王的挚爱——威尔士柯基，传说中的蜜桃臀英国女王的挚爱——威尔士柯基，传说中的蜜桃臀'
                }, {
                    articleId: 4,
                    articleTitle: '英国女王的挚爱——威尔士柯基，传说中的蜜桃臀英国女王的挚爱——威尔士柯基，传说中的蜜桃臀英国女王的挚爱——威尔士柯基，传说中的蜜桃臀'
                }],
                animalList: [{
                    categoryId: 0,
                    categoryName: '食物',
                    categoryDescription: 'Dog'
                }, {
                    categoryId: 1,
                    categoryName: '食物',
                    categoryDescription: 'Dog'
                }, {
                    categoryId: 2,
                    categoryName: '食物',
                    categoryDescription: 'Dog'
                }, {
                    categoryId: 3,
                    categoryName: '食物',
                    categoryDescription: 'Dog'
                }, {
                    categoryId: 4,
                    categoryName: '食物',
                    categoryDescription: 'Dog'
                }, {
                    categoryId: 5,
                    categoryName: '食物',
                    categoryDescription: 'Dog'
                }, {
                    categoryId: 6,
                    categoryName: '食物',
                    categoryDescription: 'Dog'
                }]
            }
        });

        setTimeout(function () {
            new window.Swiper('.index-banner', {
                pagination: '.pagination',
                loop: true
            });

            new window.Swiper('.index-category', {
                slidesPerView: 'auto',
                freeMode: true,
                freeModeFluid: true,
                spaceBetween: 0
            });

            new window.Swiper('.index-hot-article-content-list-container', {
                mode: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                freeModeFluid: true,
                spaceBetween: 0
            });

            new window.Swiper('.index-animal-category-content', {
                slidesPerView: 'auto',
                freeMode: true,
                freeModeFluid: true,
                spaceBetween: 0
            });

            new window.Swiper('.index-guess-content', {
                slidesPerView: 'auto',
                freeMode: true,
                freeModeFluid: true,
                spaceBetween: 0
            });
        }, 100);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        this.setState({
            opacity: scrollTop / 300
        });
    }

    render() {
        return (
            <div className="page tabbarPage">
                <div className="index-header-mask" style={{
                    opacity: this.state.opacity,
                    filter: 'progid:DXImageTransform.Microsoft.Alpha(opacity=100)'
                }}></div>
                <div className="index-header">
                    <div className="index-header-content">
                        <div className="index-header-content-left">
                            <img className="index-header-content-left-user"
                                 src={require('../../image/index-header-content-left-user.png')}
                                 alt=""/>
                        </div>
                        <div className="index-header-content-center">
                            <img className="index-header-content-center-logo"
                                 src={require('../../image/index-header-content-center-logo.png')} alt=""/>
                        </div>
                        <div className="index-header-content-right">
                            <img className="index-header-content-right-search"
                                 src={require('../../image/index-header-content-right-search.png')} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="index-banner swiper-container"
                     style={{
                         height: ((document.documentElement.clientWidth > 600 ? 600 : document.documentElement.clientWidth) / 320 * 380) + 'px'
                     }}
                >
                    <div className="index-banner-content swiper-wrapper">
                        {
                            this.props.index.bannerList.map(function (banner) {
                                return (
                                    <div key={banner.bannerId} className="swiper-slide">
                                        <img className="index-banner-content-image" src={require('../../image/0.png')}
                                             alt=""/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="pagination"></div>
                </div>
                <div className="index-category swiper-container">
                    <div className="index-category-content swiper-wrapper">
                        {
                            this.props.index.articleCategoryList.map(function (articleCategory) {
                                return (
                                    <div key={articleCategory.articleCategoryId} className="index-category-content-item swiper-slide">
                                        <img className="index-category-content-item-image"
                                             src={require('../../image/category-1.png')} alt=""/>
                                        <div className="index-category-content-item-name">{articleCategory.articleCategoryName}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="index-hot-article">
                    <div className="index-hot-article-header">
                        - 热门话题 -
                    </div>
                    <div className="index-hot-article-content">
                        <div className="index-hot-article-content-top">
                            <img className="index-hot-article-content-top-image" src={require('../../image/1.png')}
                                 alt=""/>
                            <span className="index-hot-article-content-top-name">#盘点十大最适合狗狗吃的零食#</span>
                        </div>
                        <div className="index-hot-article-content-list ">
                            <div className="index-hot-article-content-list-container swiper-container">
                                <div className="index-hot-article-content-list-container-wrapper swiper-wrapper">
                                    {
                                        this.props.index.topArticleList.map(function (article) {
                                            return (
                                                <div key={article.articleId} className="index-hot-article-content-list-container-wrapper-item top-line bottom-line swiper-slide">
                                                    <div className="index-hot-article-content-list-container-wrapper-item-left">
                                                        <img
                                                            className="index-hot-article-content-list-container-wrapper-item-left-image"
                                                            src={require('../../image/2.png')}
                                                            alt=""/>
                                                    </div>
                                                    <div className="index-hot-article-content-list-container-wrapper-item-right">
                                                        {article.articleTitle}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="index-animal-category">
                    <div className="index-animal-category-header">
                        - 宠物分类 -
                    </div>
                    <div className="index-animal-category-content swiper-container">
                        <div className="index-animal-category-content-wrapper swiper-wrapper">
                            {
                                this.props.index.animalList.map(function (category) {
                                    return (
                                        <div key={category.categoryId} className="index-animal-category-content-wrapper-item swiper-slide">
                                            <img className="index-animal-category-content-wrapper-item-image"
                                                 src={require('../../image/3.png')} alt=""/>
                                            <div className="index-animal-category-content-wrapper-item-name">{category.categoryName}</div>
                                            <div className="index-animal-category-content-wrapper-item-description">{category.categoryDescription}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="index-guess">
                    <div className="index-guess-header">
                        <div className="index-guess-header-title">
                            - 猜你喜欢 -
                        </div>
                        <div className="index-guess-header-more-text">
                            更多
                        </div>
                        <img className="index-guess-header-more-icon"
                             src={require('../../image/index-guess-more.png')} alt=""/>
                    </div>
                    <div className="index-guess-content swiper-container">
                        <div className="index-guess-content-wrapper swiper-wrapper">
                            <div className="index-guess-content-wrapper-item swiper-slide">
                                <div className="index-guess-content-wrapper-item-card">
                                    <img className="index-guess-content-wrapper-item-card-image"
                                         src={require('../../image/header-demo.png')} alt=""/>
                                    <p className="index-guess-content-wrapper-item-card-name">准主人须知</p>
                                    <p className="index-guess-content-wrapper-item-card-description">编辑推荐</p>
                                    <p className="index-guess-content-wrapper-item-card-button">去看看</p>
                                </div>
                            </div>
                            <div className="index-guess-content-wrapper-item swiper-slide">
                                <div className="index-guess-content-wrapper-item-card">
                                    <img className="index-guess-content-wrapper-item-card-image"
                                         src={require('../../image/header-demo.png')} alt=""/>
                                    <p className="index-guess-content-wrapper-item-card-name">准主人须知</p>
                                    <p className="index-guess-content-wrapper-item-card-description">编辑推荐</p>
                                    <p className="index-guess-content-wrapper-item-card-button">去看看</p>
                                </div>
                            </div>
                            <div className="index-guess-content-wrapper-item swiper-slide">
                                <div className="index-guess-content-wrapper-item-card">
                                    <img className="index-guess-content-wrapper-item-card-image"
                                         src={require('../../image/header-demo.png')} alt=""/>
                                    <p className="index-guess-content-wrapper-item-card-name">准主人须知</p>
                                    <p className="index-guess-content-wrapper-item-card-description">编辑推荐</p>
                                    <p className="index-guess-content-wrapper-item-card-button">去看看</p>
                                </div>
                            </div>
                            <div className="index-guess-content-wrapper-item swiper-slide">
                                <div className="index-guess-content-wrapper-item-card">
                                    <img className="index-guess-content-wrapper-item-card-image"
                                         src={require('../../image/header-demo.png')} alt=""/>
                                    <p className="index-guess-content-wrapper-item-card-name">准主人须知</p>
                                    <p className="index-guess-content-wrapper-item-card-description">编辑推荐</p>
                                    <p className="index-guess-content-wrapper-item-card-button">去看看</p>
                                </div>
                            </div>
                            <div className="index-guess-content-wrapper-item swiper-slide">
                                <div className="index-guess-content-wrapper-item-card">
                                    <img className="index-guess-content-wrapper-item-card-image"
                                         src={require('../../image/header-demo.png')} alt=""/>
                                    <p className="index-guess-content-wrapper-item-card-name">准主人须知</p>
                                    <p className="index-guess-content-wrapper-item-card-description">编辑推荐</p>
                                    <p className="index-guess-content-wrapper-item-card-button">去看看</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="index-new-topic">
                    <div className="index-new-topic-header">
                        - 热门话题 -
                    </div>
                    <TopicIndex/>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default connect((state) => ({
    index: state.index
}))(Index);
