import React, {Component} from 'react';
import {connect} from 'react-redux';
import  ReactSwipes from 'react-swipes';
import util from '../../common/util';
import baseStyle from '../../css/Base.scss';
import style from './Index.scss';
import classNames from 'classnames';
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
class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            isSelectedIndex:0,
            clicked: 'none',
            clicked1: 'none',
            clicked2: 'none',
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
    }

    componentWillUnmount() {

    }

    render() {

        return (
            <div className={classNames(baseStyle.page,style.page)} style={{minHeight: document.documentElement.clientHeight}}>
                    <div className={style.header}>
                            <div className={style.headerLeft} >
                                <span className={style.leftLeft}>上海</span>
                                <div className={style.leftRight}></div>
                            </div>
                            <div className={style.headerRight}>
                                <div className={style.headerRightSearch}>
                                    <div className={style.headerRightSearchLeft}>
                                        <img className={style.headerRightSearchLeftIcon}
                                             src={require('../../image/forum-search.png')} alt=''/>
                                    </div>
                                    <div className={style.headerRightSearchRight}>
                                        <input
                                            className={style.headerRightSearchRightInput}  type="text" placeholder="搜索服务商户" />
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className={style.headerImg}>
                        <img className={style.headerImgs} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/320/h/280" alt=""/>
                    </div>
                    <ReactSwipes  options={opt} className={classNames(style.navigation,"card-slide" )}>
                        {
                            [1,2,3,4,5].map((val, index) =>
                                <div className={style.navigationList} key={index}>
                                    <img className={style.navigationListImg} src={require("../../image/3.png")}   alt=""/>
                                    <span  className={style.navigationListFont}> 美容</span>
                            </div>)
                        }
                    </ReactSwipes>
                    <span className={style.store}>明星商户</span>
                    <ReactSwipes  options={opt} className={classNames(style.storeList,"card-slide" )}>
                        {
                            [1,2,3,4,5].map((val, index) =>
                                <div className={style.storeListItem} key={index}>
                                    <img className={style.storeListItemImg} src={require("../../image/0.png")}  alt=""/>
                                    <span  className={style.storeListItemFont}> 小精灵医院</span>
                                </div>)
                        }
                    </ReactSwipes>
                <div className={style.content}>
                    {
                    [1,2,3].map(()=>
                        <div className={style.contentList}>
                            <img className={style.contentListImg} src={require("../../image/1.png")} alt=""/>
                            <div className={style.mask}>
                                <div className={style.maskTop}>精选</div>
                                <div className={style.maskCenter}>这些地方狗狗喜欢</div>
                                <div className={style.maskBottom}>人和狗狗可以一起漫步的地方</div>
                            </div>
                        </div>
                    )
                    }

                </div>
            </div>
        );
    }
}

Index.propTypes = {};

export default connect(() => ({}))(Index);
