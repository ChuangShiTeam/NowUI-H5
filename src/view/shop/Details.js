import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import  ReactSwipes from 'react-swipes';

import util from '../../common/util';

import Modal from 'antd-mobile/lib/modal';
import ActionSheet from 'antd-mobile/lib/action-sheet'
import DatePicker from 'antd-mobile/lib/date-picker';
import style from './Details.scss';
import baseStyle from '../../css/Base.scss';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));



// const CustomChildren = ({ extra, onClick, children }) => (
//     <div
//         onClick={onClick}
//         style={{ backgroundColor: '#fff', height: '45px', lineHeight: '45px', padding: '0 15px' }}
//     >
//         {children}
//         <span style={{ float: 'right', color: '#888' }}>没看到老顾客蛮好看</span>
//     </div>
// );



const alert = Modal.alert;
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
    wrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
let opt = {
    distance: 230,
    currentPoint: 0,
    autoPlay: false,
    loop: true,
    swTouchstart: (ev) => {

    },
    swTouchmove: (ev) => {

    },
    swTouchend: (ev) => {
        let data = {
            moved: ev.moved,
            originalPoint: ev.originalPoint,
            newPoint: ev.newPoint,
            cancelled: ev.cancelled,
        }
        console.log(data);
    }
}

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelectedIndex:0,
            clicked: 'none',
            clicked1: 'none',
            clicked2: 'none',
            date: now,
            time: now,
            utcDate: utcNow,
            dpValue: null,
            customChild: null,
            visible: false,

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
    handleClose(){
        alert(null, '确定删除么', [
            { text: '删除', onPress: () => console.log('cancel'), style: 'default' },
            { text: '取消', onPress: () => console.log('ok') },
        ]);

    }
    handleReport(){
    const BUTTONS = ['我对这条不感兴趣', '举报这条动态', '举报该用户', '取消'];
    ActionSheet.showActionSheetWithOptions({
    options: BUTTONS,
    cancelButtonIndex: BUTTONS.length - 1,
    destructiveButtonIndex: BUTTONS.length - 2,
    // title: 'title',
    maskClosable: true,
    'data-seed': 'logId',
    wrapProps,
},
(buttonIndex) => {
    this.setState({ clicked: BUTTONS[buttonIndex] });
});
}
    render() {
        return (

            <div className={classNames(style.page, baseStyle.page)} style={{minHeight: document.documentElement.clientHeight}}>
                <div className="date-picker-list" style={{ backgroundColor: 'white' }}>
                    <DatePicker
                        mode="date"
                        title="Select Date"
                        extra="Optional"
                        value={this.state.date}
                        onChange={date => this.setState({ date })}
                    >
                        <p>1</p>
                    </DatePicker>
                </div>
                <div className={style.header}>
                    <img className={style.headerImg} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/640/h/250" alt=""/>
                </div>
                <div className={classNames(style.headerBottom, baseStyle.bottomLine)}>
                    <div className={style.headerBottomLeft}>
                        <div  className={style.headerBottomLeftFont}  onClick={this.handleClose.bind()}>自营</div>
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
                <div  className={classNames(style.otherThink)}>
                    <div className={style.otherThinkTop}>
                        <div className={style.otherThinkTopLeft}>   看看别人怎么说（109）</div>
                        <div className={style.otherThinkTopRight}> </div>
                    </div>
                    <ReactSwipes  options={opt} className={classNames(style.otherThinkBottom,"card-slide" )}>
                        {
                            [1,2,3].map((val, index) => <div className={style.otherThinkBottomList} key={index}>
                                <img className={style.otherThinkBottomListTop} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/640/h/250" alt=""/>
                                <div className={style.otherThinkBottomListCenter}>我家的猫咪超喜欢在里面和我躲猫猫的超级可…</div>
                                <div className={style.otherThinkBottomListBottom}>
                                    <img className={style.otherThinkBottomListBottomImg} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/640/h/250" alt=""/>
                                    <span className={style.otherThinkBottomListBottomFont}>大木木_Lin</span>
                                </div>
                            </div>)
                        }
                    </ReactSwipes>
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
                    <div className={style.detailsBottom}>
                        <img className={style.detailsBottomImg} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/640/h/250" alt=""/>
                    </div>
                </div>
                <div  className={classNames(style.others, baseStyle.bottomLine)}>
                    <div className={style.introduceTop}>
                        相似风格萌物推荐
                    </div>
                    <div className={style.OthersContent}>

                    </div>
                    <ReactSwipes  options={opt} className={classNames(style.otherThinkBottom,"card-slide" )}>
                        {
                            [1,2,3].map((val, index) =>
                                <div className={style.otherThinkBottomList} key={index}>
                                    <img className={style.othersContentImg} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/640/h/250" alt=""/>
                                    <div className={style.othersContentName}>封闭式猫窝别墅</div>
                                    <div className={style.othersContentName}>¥268</div>
                                </div>)
                        }
                    </ReactSwipes>
                </div>
                <div className={style.footer}>
                    <div className={style.footerLeft}>
                        <img className={style.footerLeftImg} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/640/h/250" alt=""/>
                        <span  className={style.footerLeftBottom}>商家</span>
                    </div>
                    <div  className={style.footerLeft}>
                        <img className={style.footerLeftImgStar} src={require("../../image/star.png")} alt=""/>
                        <span className={style.footerLeftBottom}>收藏</span>
                    </div>
                    <div  className={style.footerRight}>立即购买</div>
                </div>
            </div>
        );
    }
}



export default connect((state) => ({}))(Details);
