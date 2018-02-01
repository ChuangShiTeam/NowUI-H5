import React, {Component} from 'react';
import {connect} from 'react-redux';

import util from '../../common/util';

import './CommodityDetails.css';
import baseStyle from '../../css/Base.scss';

class CommodityDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <div className="banner">
                    <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" alt=""/>
                </div>
                <div className="module-wrap bottomLine">
                    <div className="module-box">
                        <div className="self-support"><span>自营</span></div>
                        <div className="content-title">
                            <h3>六边形南瓜式宠物窝</h3>
                            <p>给萌宠柔软包裹的归家感</p>
                        </div>
                        <div className="reference-price">
                            <h4>参考价</h4>
                            <p><span>¥</span>199.00</p>
                        </div>
                    </div>
                </div>
                <div className="module-wrap bottomLine">
                    <div className="module-box align-items-center">
                        <div className="shop_logo">
                            <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" alt=""/>
                        </div>
                        <div className="shop_tab">
                            <ul>
                                <li>
                                    <span>NITORL制造商</span><strong className="rightArrow"></strong>
                                </li>
                                <li>
                                    <span>NITORL制造商</span><strong className="rightArrow"></strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="recommend-img">
                    <img src={require('../../image/banner.png')}
                         alt=''/>
                </div>
                <div className="module-item module-wrap">
                    <div className="text-title">推荐理由</div>
                    <div className="text-info">反绒面料性能不亚于鹿皮，织物毛感柔软，有糯性，悬
                        垂性好，质地轻薄。猫咪抓挠不起球，耐咬耐抓。高围 栏设计迎合猫咪天性，厚实保暖，隐蔽耐玩。牛仔帆布 材质面料结实，耐抓耐咬，不易起球。</div>
                </div>
                <div className="module-item module-wrap">
                    <div className="text-title">
                        <div className="text-title-left">看看别人怎么说（109）</div>
                        <div className="text-title-right"><strong className="rightArrow"></strong></div>
                    </div>
                    <div className="evaluation-list">
                        <ul>
                            <li>
                                <div className="baby-picture">
                                    <img src={require('../../image/1.png')}
                                                                   alt=''/>
                                </div>
                                <div className="baby-title">我家的猫咪超喜欢在里面
                                    和我躲猫猫的，超级可…</div>
                                <div className="evaluation-people">
                                    <img src={require('../../image/1.png')}
                                         alt=''/>
                                    <p>大木木_Lin</p>
                                </div>

                            </li>
                            <li>
                                <div className="baby-picture">
                                    <img src={require('../../image/1.png')}
                                         alt=''/>
                                </div>
                                <div className="baby-title">我家的猫咪超喜欢在里面
                                    和我躲猫猫的，超级可…</div>
                                <div className="evaluation-people">
                                    <img src={require('../../image/1.png')}
                                         alt=''/>
                                    <p>大木木_Lin</p>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
                <div className="module-item module-wrap">
                    <div className="text-title">
                        <div className="text-title-left">商品详情</div>
                    </div>
                </div>
                <div className="detail-picture">
                    <img src={require('../../image/banner.png')}
                         alt=''/>
                </div>
                <div className="specifications module-wrap">
                    <ul>
                        <li className="bottomLine topLine">
                            <span>产品标准</span>
                            <strong>FZ/T 620011.3-2008</strong>
                        </li>
                        <li className="bottomLine">
                            <span>安全类别</span>
                            <strong>GB 18401-2010 B类</strong>
                        </li>
                        <li className="bottomLine">
                            <span>尺寸</span>
                            <strong>29*19cm</strong>
                        </li>
                        <li className="bottomLine">
                            <span>颜色</span>
                            <strong>藏青色</strong>
                        </li>
                    </ul>
                </div>
                <div className="detail-picture">
                    <img src={require('../../image/banner.png')}
                         alt=''/>
                </div>
                <div className="module-item module-wrap padding-bottom-70">
                    <div className="text-title">
                        <div className="text-title-left">相似风格萌物推荐</div>
                    </div>
                    <div className="evaluation-list">
                        <ul>
                            <li>
                                <div className="baby-picture">
                                    <img src={require('../../image/1.png')}
                                         alt=''/>
                                </div>
                                <div className="recommend-baby-title">
                                    封闭式猫窝别墅
                                </div>
                                <div className="recommend-people">
                                    99.00
                                </div>
                            </li>
                            <li>
                                <div className="baby-picture">
                                    <img src={require('../../image/1.png')}
                                         alt=''/>
                                </div>
                                <div className="recommend-baby-title">
                                    超大豪华别墅
                                </div>
                                <div className="recommend-people">
                                    99.00
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-navigation">
                    <div className="footer-navigation-box">
                        <div className="shop">
                            <img src={require('../../image/avatar-demo.png')}
                                 alt=''/>
                            商家
                        </div>
                        <div className="collection">
                            <img src={require('../../image/bookmark-acitve.png')}
                                 alt=''/>
                            收藏
                        </div>
                        <div className="go-purchase">
                            立即购买
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CommodityDetails.propTypes = {};

export default connect((store) => ({
    forumSkip: store.forumSkip
}))(CommodityDetails);
