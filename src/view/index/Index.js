import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import classNames from 'classnames';
import TopicIndex from "../../component/topic/Index";
import util from '../../common/util';
import http from '../../common/http';
import constant from '../../common/constant';
import style from './Index.scss';
import baseStyle from '../../css/Base.scss';

let bannerSwiper;
let categorySwiper;
let hotSwiper;
let animalSwiper;
let guessSwiper;

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: 0,
            ieOpacity: 0
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        if (window.addEventListener) {
            window.addEventListener('scroll', this.handleScroll);
        } else {
            window.attachEvent('onscroll', this.handleScroll);
        }

        if (this.props.index.indexBannerList.length === 0) {
            http.request({
                url: '/wawi/mobile/v1/index/init',
                data: {},
                success: function (data) {
                    this.props.dispatch({
                        type: 'index',
                        data: {
                            indexBannerList: data.indexBannerList,
                            indexNavigationList: data.indexNavigationList,
                            hotArticleList: data.hotArticleList,
                            petCategoryArticleList: data.petCategoryArticleList,
                            recommendArticleList: data.recommendArticleList,
                            latestArticleList: data.latestArticleList
                        }
                    });
                    this.handleSwiper();
                }.bind(this),
                complete: function () {

                }
            });
        } else {
            this.handleSwiper();
        }
    }

    handleSwiper() {
        setTimeout(function () {
            bannerSwiper = new window.Swiper('.' + style.banner, {
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

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {
        if (bannerSwiper) {
            bannerSwiper.destroy();
        }

        if (categorySwiper) {
            categorySwiper.destroy();
        }

        if (hotSwiper) {
            hotSwiper.destroy();
        }

        if (animalSwiper) {
            animalSwiper.destroy();
        }

        if (guessSwiper) {
            guessSwiper.destroy();
        }

        if (window.addEventListener) {
            window.removeEventListener('scroll', this.handleScroll);
        } else {
            window.detachEvent('onscroll', this.handleScroll);
        }
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
                        <Link to="/login/index" className={style.headerContentLeft}>
                            <img className={style.headerContentLeftUser}
                                 src={require('../../image/index-user.png')}
                                 alt=''/>
                        </Link>
                        <div className={style.headerContentCenter}>
                            <img className={style.headerContentCenterLogo}
                                 src={require('../../image/index-logo.png')} alt=''/>
                        </div>
                        <div className={style.headerContentContentRight}>
                            <img className={style.headerContentContentRightSearch}
                                 src={require('../../image/index-search.png')} alt=''/>
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
                            this.props.index.indexBannerList.map(function (indexBanner) {
                                return (
                                    <div key={indexBanner.advertisementId} className="swiper-slide">
                                        <img src={constant.image_host + indexBanner.filePath} alt=''/>
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
                            this.props.index.indexNavigationList.map(function (indexNavigation, index) {
                                return (
                                    <div key={index}
                                         className={classNames(style.categoryContentItem, 'swiper-slide')}>
                                        <img className={style.categoryContentItemImage}
                                             src={constant.image_host + indexNavigation.filePath} alt=''/>
                                        <div
                                            className={style.categoryContentItemItemName}>{indexNavigation.navigationName}</div>
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
                                 alt=''/>
                            <span className={style.hotArticleContentTopName}>#盘点十大最适合狗狗吃的零食#</span>
                        </div>
                        <div className={style.hotArticleContentList}>
                            <div className={classNames(style.hotArticleContentListContainer, 'swiper-container')}>
                                <div
                                    className={classNames(style.hotArticleContentListContainerWrapper, 'swiper-wrapper')}>
                                    {
                                        this.props.index.hotArticleList.map(function (article, index) {
                                            return (
                                                <div key={article.articleId}
                                                     className={classNames(style.hotArticleContentListContainerWrapperItem, index === 0 ? baseStyle.topLine : '', baseStyle.bottomLine, 'swiper-slide')}>
                                                    <div
                                                        className={style.hotArticleContentListContainerWrapperItemLeft}>
                                                        <img
                                                            className={style.hotArticleContentListContainerWrapperItemLeftImage}
                                                            src={require('../../image/2.png')}
                                                            alt=''/>
                                                    </div>
                                                    <div
                                                        className={style.hotArticleContentListContainerWrapperItemRight}>
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
                                this.props.index.petCategoryArticleList.map(function (petCategoryArticle, index) {
                                    return (
                                        <div key={index}
                                             className={classNames(style.animalCategoryContentWrapperItem, 'swiper-slide')}>
                                            <img className={style.animalCategoryContentWrapperItemImage}
                                                 src={constant.image_host + petCategoryArticle.filePath} alt=''/>
                                            <div
                                                className={style.animalCategoryContentWrapperItemName}>{petCategoryArticle.articleTitle}</div>
                                            <div
                                                className={style.animalCategoryContentWrapperItemDescription}>{petCategoryArticle.articleSummary}</div>
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
                        <img className={style.guessHeaderMoreIcon} src={require('../../image/index-more.png')} alt=''/>
                    </div>
                    <div className={classNames(style.guessContent, 'swiper-container')}>
                        <div className={classNames(style.guessContentWrapper, 'swiper-wrapper')}>
                            <div className={classNames(style.guessContentWrapperItem, 'swiper-slide')}>
                                <div className={style.guessContentWrapperItemCard}>
                                    <img className={style.guessContentWrapperItemCardImage}
                                         src={require('../../image/4.png')} alt=''/>
                                    <p className={style.guessContentWrapperItemCardName}>准主人须知</p>
                                    <p className={style.guessContentWrapperItemCardDescription}>编辑推荐</p>
                                    <p className={style.guessContentWrapperItemCardButton}>去看看</p>
                                </div>
                            </div>
                            <div className={classNames(style.guessContentWrapperItem, 'swiper-slide')}>
                                <div className={style.guessContentWrapperItemCard}>
                                    <img className={style.guessContentWrapperItemCardImage}
                                         src={require('../../image/4.png')} alt=''/>
                                    <p className={style.guessContentWrapperItemCardName}>准主人须知</p>
                                    <p className={style.guessContentWrapperItemCardDescription}>编辑推荐</p>
                                    <p className={style.guessContentWrapperItemCardButton}>去看看</p>
                                </div>
                            </div>
                            <div className={classNames(style.guessContentWrapperItem, 'swiper-slide')}>
                                <div className={style.guessContentWrapperItemCard}>
                                    <img className={style.guessContentWrapperItemCardImage}
                                         src={require('../../image/4.png')} alt=''/>
                                    <p className={style.guessContentWrapperItemCardName}>准主人须知</p>
                                    <p className={style.guessContentWrapperItemCardDescription}>编辑推荐</p>
                                    <p className={style.guessContentWrapperItemCardButton}>去看看</p>
                                </div>
                            </div>
                            <div className={classNames(style.guessContentWrapperItem, 'swiper-slide')}>
                                <div className={style.guessContentWrapperItemCard}>
                                    <img className={style.guessContentWrapperItemCardImage}
                                         src={require('../../image/4.png')} alt=''/>
                                    <p className={style.guessContentWrapperItemCardName}>准主人须知</p>
                                    <p className={style.guessContentWrapperItemCardDescription}>编辑推荐</p>
                                    <p className={style.guessContentWrapperItemCardButton}>去看看</p>
                                </div>
                            </div>
                            <div className={classNames(style.guessContentWrapperItem, 'swiper-slide')}>
                                <div className={style.guessContentWrapperItemCard}>
                                    <img className={style.guessContentWrapperItemCardImage}
                                         src={require('../../image/4.png')} alt=''/>
                                    <p className={style.guessContentWrapperItemCardName}>准主人须知</p>
                                    <p className={style.guessContentWrapperItemCardDescription}>编辑推荐</p>
                                    <p className={style.guessContentWrapperItemCardButton}>去看看</p>
                                </div>
                            </div>
                            <div className={classNames(style.guessContentWrapperItem, 'swiper-slide')}>
                                <div className={style.guessContentWrapperItemCard}>
                                    <img className={style.guessContentWrapperItemCardImage}
                                         src={require('../../image/4.png')} alt=''/>
                                    <p className={style.guessContentWrapperItemCardName}>准主人须知</p>
                                    <p className={style.guessContentWrapperItemCardDescription}>编辑推荐</p>
                                    <p className={style.guessContentWrapperItemCardButton}>去看看</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={style.newTopicHeader}>
                        <div className={style.newTopicHeaderTitle}>
                            - 最新话题 -
                        </div>
                    </div>
                    <TopicIndex/>
                    <TopicIndex/>
                    <div className={style.newTopicFooter}>
                        <div className={style.newTopicFooterMore}>查看更多</div>
                    </div>
                </div>
                <div className={style.footer}>
                    <div className={style.footerLanguage}>
                        <div className={style.footerLanguageLeft}>
                            <img className={style.footerLanguageLeftIcon}
                                 src={require('../../image/en.png')} alt=''/>
                        </div>
                        <div className={style.footerLanguageCenter}>
                            <img className={style.footerLanguageCenterIcon}
                                 src={require('../../image/translator.png')} alt=''/>
                        </div>
                        <div className={style.footerLanguageRight}>
                            <img className={style.footerLanguageRightIcon}
                                 src={require('../../image/cn.png')} alt=''/>
                        </div>
                    </div>
                    <div>copyright wawipet.com 2017-2019</div>
                    <div>沪ICP备 12345678</div>
                    <div>email:market@wawipet.com</div>
                </div>
            </div>
        );
    }
}

export default connect((state) => ({
    index: state.index
}))(Index);
