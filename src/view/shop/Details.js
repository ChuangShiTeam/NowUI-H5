import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';


import util from '../../common/util';


import style from './Details.scss';
import baseStyle from '../../css/Base.scss';

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelectedIndex:0,
        };
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

    handleSelectedBrand(index){
        this.setState({
            isSelectedIndex:index,
        })
    }
    render() {
        return (
            <div className={classNames(style.page, baseStyle.page)} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <img className={style.headerImg} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/640/h/250" alt=""/>
                </div>
                <div className={classNames(style.headerBottom, baseStyle.bottomLine)}>
                    <div className={style.headerBottomLeft}>
                        <div  className={style.headerBottomLeftFont}>自营</div>
                        <div className={style.headerBottomCenter} >
                            <div className={style.headerBottomCenterTop} >六边形南瓜式宠物窝</div>
                            <div className={style.headerBottomCenterBottom} >给萌宠柔软包裹的归家感</div>
                        </div>
                    </div>
                    
                    <div className={style.headerBottomRight}>
                        <div  className={style.headerBottomRightTop}>参考价</div>
                        <div  className={style.headerBottomRightBottom}>¥199</div>
                    </div>
                </div>
                <div className={classNames(style.middle, baseStyle.bottomLine)}>
                    <div className={style.middleLeft}>
                        <img  className={style.middleLeftImg} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/640/h/250" alt=""/>
                    </div>

                    <div className={style.middleRight}>
                        <div className={style.middleRightLeft}>sdfgnhjghgf</div>
                        <div  className={style.middleRightRight}></div>
                    </div>

                </div>
                <div  className={classNames(style.middleBottom, baseStyle.bottomLine)}>
                    <img className={style.middleBottomImg} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/640/h/250" alt=""/>
                </div>
                <div  className={classNames(style.introduce, baseStyle.bottomLine)}>
                    <div className={style.introduceTop}>
                        推荐理由
                    </div>
                    <div className={style.introduceBottom}>
                        反绒面料性能不亚于鹿皮，织物毛感柔软，有糯性，悬
                        垂性好，质地轻薄。猫咪抓挠不起球，耐咬耐抓。高围
                        栏设计迎合猫咪天性，厚实保暖，隐蔽耐玩。牛仔帆布
                        材质面料结实，耐抓耐咬，不易起球。
                    </div>
                </div>
                <div  className={classNames(style.otherThink, baseStyle.bottomLine)}>
                    <div className={style.otherThinkTop}>
                        <div className={style.otherThinkTopLeft}>   看看别人怎么说（109）</div>
                        <div className={style.otherThinkTopRight}> </div>
                    </div>
                    <div className={style.introduceBottom}>

                    </div>
                </div>
                <div  className={classNames(style.details, baseStyle.bottomLine)}>
                    <div className={style.introduceTop}>
                        商品详情
                    </div>
                    <div className={style.detailsTop}>
                        <img className={style.detailsTopImg} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/640/h/250" alt=""/>
                    </div>
                    <div className={style.detailsList}>
                        <div className={style.detailsListTop}>
                            <span  className={style.detailsListTopType}>产品标准</span>
                            <span className={style.detailsListTopContent}> FZ/T 620011.3-2008</span>
                        </div>
                        <div>
                            <span className={style.detailsListTopType}>安全类别</span>
                            <span className={style.detailsListTopContent}> FZ/T 620011.3-2008</span>
                        </div>
                        <div>
                            <span  className={style.detailsListTopType}>尺寸</span>
                            <span className={style.detailsListTopContent}> FZ/T 620011.3-2008</span>
                        </div>
                        <div >
                            <span  className={style.detailsListTopType}>颜色</span>
                            <span className={style.detailsListTopContent}> FZ/T 620011.3-2008</span>
                        </div>
                    </div>
                    <div className={style.detailsTop}>
                        <img className={style.detailsTopImg} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/640/h/250" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}



export default connect((state) => ({}))(Details);
