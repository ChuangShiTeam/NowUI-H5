import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import TopicIndex from "../../component/topic/Index";

import util from '../../common/util';

import style from './Index.css';
import baseStyle from '../../css/Base.css';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: 0,
            ieOpacity: 0
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
            new window.Swiper('.' + style.banner, {
                pagination: '.' + style.bannerPagination,
                loop: true
            });

            new window.Swiper('.' + style.category, {
                slidesPerView: 'auto',
                freeMode: true,
                freeModeFluid: true,
                spaceBetween: 0
            });

            new window.Swiper('.' + style.hotArticleContentListContainer, {
                mode: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                freeModeFluid: true,
                spaceBetween: 0
            });

            new window.Swiper('.' + style.animalCategoryContent, {
                slidesPerView: 'auto',
                freeMode: true,
                freeModeFluid: true,
                spaceBetween: 0
            });

            new window.Swiper('.' + style.guessContent, {
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

        let opacity = scrollTop / 300;
        let ieOpacity = opacity * 100;

        if (opacity <= 1) {
            this.setState({
                opacity: opacity,
                ieOpacity: ieOpacity
            });
        } else {
            if (this.state.opacity !== 1) {
                this.setState({
                    opacity: 1,
                    ieOpacity: 100
                });
            }
        }
    }

    render() {
        return (
            <div className={classNames(baseStyle.page, baseStyle.tabbarPage)}>
                <div className={style.headerMask} style={{
                    opacity: this.state.opacity,
                    filter: 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + this.state.ieOpacity + ')'
                }}></div>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        <div className={style.headerContentLeft}>
                            <img className={style.headerContentLeftUser}
                                 src={require('../../image/index-user.png')}
                                 alt=""/>
                        </div>
                        <div className={style.headerContentCenter}>
                            <img className={style.headerContentCenterLogo}
                                 src={require('../../image/index-logo.png')} alt=""/>
                        </div>
                        <div className={style.headerContentContentRight}>
                            <img className={style.headerContentContentRightSearch}
                                 src={require('../../image/index-search.png')} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={classNames(style.banner, 'swiper-container')}
                     style={{
                         height: ((document.documentElement.clientWidth > 600 ? 600 : document.documentElement.clientWidth) / 320 * 380) + 'px'
                     }}
                >
                    <div className="swiper-wrapper">
                        {
                            this.props.index.bannerList.map(function (banner) {
                                return (
                                    <div key={banner.bannerId} className="swiper-slide">
                                        <img src={require('../../image/0.png')} alt=""/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={classNames(style.bannerPagination)}></div>
                </div>
                <div className={classNames(style.category, 'swiper-container')}>
                    <div className={classNames(style.categoryContent, 'swiper-wrapper')}>
                        {
                            this.props.index.articleCategoryList.map(function (articleCategory) {
                                return (
                                    <div key={articleCategory.articleCategoryId}
                                         className={classNames(style.categoryContentItem, 'swiper-slide')}>
                                        <img className={style.categoryContentItemImage}
                                             src={require('../../image/category-1.png')} alt=""/>
                                        <div className={style.categoryContentItemItemName}>{articleCategory.articleCategoryName}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={style.hotArticle}>
                    <div className={style.hotArticleHeader}>
                        - 热门话题 -
                    </div>
                    <div className={style.hotArticleContent}>
                        <div className={style.hotArticleContentTop}>
                            <img className={style.hotArticleContentTopImage} src={require('../../image/1.png')}
                                 alt=""/>
                            <span className={style.hotArticleContentTopName}>#盘点十大最适合狗狗吃的零食#</span>
                        </div>
                        <div className={style.hotArticleContentList}>
                            <div className={classNames(style.hotArticleContentListContainer, 'swiper-container')}>
                                <div className={classNames(style.hotArticleContentListContainerWrapper, 'swiper-wrapper')}>
                                    {
                                        this.props.index.topArticleList.map(function (article, index) {
                                            return (
                                                <div key={article.articleId}
                                                     className={classNames(style.hotArticleContentListContainerWrapperItem, index === 0 ? baseStyle.topLine : '', baseStyle.bottomLine, 'swiper-slide')}>
                                                    <div className={style.hotArticleContentListContainerWrapperItemLeft}>
                                                        <img className={style.hotArticleContentListContainerWrapperItemLeftImage}
                                                            src={require('../../image/2.png')}
                                                            alt=""/>
                                                    </div>
                                                    <div className={style.hotArticleContentListContainerWrapperItemRight}>
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
                <div className={style.animalCategory}>
                    <div className={style.animalCategoryHeader}>
                        - 宠物分类 -
                    </div>
                    <div className={classNames(style.animalCategoryContent, 'swiper-container')}>
                        <div className={classNames(style.animalCategoryContentWrapper, 'swiper-wrapper')}>
                            {
                                this.props.index.animalList.map(function (category) {
                                    return (
                                        <div key={category.categoryId}
                                             className={classNames(style.animalCategoryContentWrapperItem, 'swiper-slide')}>
                                            <img className={style.animalCategoryContentWrapperItemImage} src={require('../../image/3.png')} alt=""/>
                                            <div
                                                className={style.animalCategoryContentWrapperItemName}>{category.categoryName}</div>
                                            <div
                                                className={style.animalCategoryContentWrapperItemDescription}>{category.categoryDescription}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={style.guess}>
                    <div className={style.guessHeader}>
                        <div className={style.guessHeaderTitle}>
                            - 猜你喜欢 -
                        </div>
                        <div className={style.guessHeaderMoreText}>
                            更多
                        </div>
                        <img className={style.guessHeaderMoreIcon} src={require('../../image/index-more.png')} alt=""/>
                    </div>
                    <div className={classNames(style.guessContent, 'swiper-container')}>
                        <div className={classNames(style.guessContentWrapper, 'swiper-wrapper')}>
                            <div className={classNames(style.guessContentWrapperItem, 'swiper-slide')}>
                                <div className={style.guessContentWrapperItemCard}>
                                    <img className={style.guessContentWrapperItemCardImage}
                                         src={require('../../image/4.png')} alt=""/>
                                    <p className={style.guessContentWrapperItemCardName}>准主人须知</p>
                                    <p className={style.guessContentWrapperItemCardDescription}>编辑推荐</p>
                                    <p className={style.guessContentWrapperItemCardButton}>去看看</p>
                                </div>
                            </div>
                            <div className={classNames(style.guessContentWrapperItem, 'swiper-slide')}>
                                <div className={style.guessContentWrapperItemCard}>
                                    <img className={style.guessContentWrapperItemCardImage}
                                         src={require('../../image/4.png')} alt=""/>
                                    <p className={style.guessContentWrapperItemCardName}>准主人须知</p>
                                    <p className={style.guessContentWrapperItemCardDescription}>编辑推荐</p>
                                    <p className={style.guessContentWrapperItemCardButton}>去看看</p>
                                </div>
                            </div>
                            <div className={classNames(style.guessContentWrapperItem, 'swiper-slide')}>
                                <div className={style.guessContentWrapperItemCard}>
                                    <img className={style.guessContentWrapperItemCardImage}
                                         src={require('../../image/4.png')} alt=""/>
                                    <p className={style.guessContentWrapperItemCardName}>准主人须知</p>
                                    <p className={style.guessContentWrapperItemCardDescription}>编辑推荐</p>
                                    <p className={style.guessContentWrapperItemCardButton}>去看看</p>
                                </div>
                            </div>
                            <div className={classNames(style.guessContentWrapperItem, 'swiper-slide')}>
                                <div className={style.guessContentWrapperItemCard}>
                                    <img className={style.guessContentWrapperItemCardImage}
                                         src={require('../../image/4.png')} alt=""/>
                                    <p className={style.guessContentWrapperItemCardName}>准主人须知</p>
                                    <p className={style.guessContentWrapperItemCardDescription}>编辑推荐</p>
                                    <p className={style.guessContentWrapperItemCardButton}>去看看</p>
                                </div>
                            </div>
                            <div className={classNames(style.guessContentWrapperItem, 'swiper-slide')}>
                                <div className={style.guessContentWrapperItemCard}>
                                    <img className={style.guessContentWrapperItemCardImage}
                                         src={require('../../image/4.png')} alt=""/>
                                    <p className={style.guessContentWrapperItemCardName}>准主人须知</p>
                                    <p className={style.guessContentWrapperItemCardDescription}>编辑推荐</p>
                                    <p className={style.guessContentWrapperItemCardButton}>去看看</p>
                                </div>
                            </div>
                            <div className={classNames(style.guessContentWrapperItem, 'swiper-slide')}>
                                <div className={style.guessContentWrapperItemCard}>
                                    <img className={style.guessContentWrapperItemCardImage}
                                         src={require('../../image/4.png')} alt=""/>
                                    <p className={style.guessContentWrapperItemCardName}>准主人须知</p>
                                    <p className={style.guessContentWrapperItemCardDescription}>编辑推荐</p>
                                    <p className={style.guessContentWrapperItemCardButton}>去看看</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="index-new-topic">
                    <div>
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
