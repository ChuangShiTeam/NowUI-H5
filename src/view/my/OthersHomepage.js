import React, {Component} from 'react';
import {connect} from 'react-redux';

import baseStyle from '../../css/Base.scss';


import util from '../../common/util';

import style from './OthersHomepage.scss';


class OthersHomepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
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
            <div className={baseStyle.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <img className={style.backgroundImg}  src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?listView/1/w/320/h/110" alt=""/>
                    <div className={style.photo}>
                        <img  src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?listView/1/w/72/h/72" alt=""/>
                    </div>
                </div>
                <div className={style.center}>
                    <div className={style.messages}>
                        <div className={style.messagesTop}>
                            <span className={style.messagesName}>大木木_Lin</span>
                            <span className={style.messagesFrom}>来自 上海 徐汇区</span>
                        </div>
                        <span className={style.messagesCenter}> Capturing every moment of my life</span>

                    </div>
                    <div className={style.middle}>
                        <div className={style.middleLeft}>
                            <div>
                                <span className={style.middleLeftTop}>20</span>
                                <span className={style.middleLeftBottom}>动态</span>
                            </div>
                            <div>
                                <span className={style.middleLeftTop}>4</span>
                                <span className={style.middleLeftBottom}> 关注</span>
                            </div>
                            <div>
                                <span className={style.middleLeftTop}>28</span>
                                <span className={style.middleLeftBottom}>粉丝</span>
                            </div>
                        </div>
                        <div className={style.middleRight}>
                            <div className={style.middleRightLeft}>私信</div>
                            <div className={style.middleRightLeftRight}> 关注 TA</div>
                        </div>
                    </div>
                </div>
                <div className={style.myPet}>
                    <span className={style.myPetLeft}>他的宠物</span>
                    <span className={style.myPetRight}>牛头梗</span>
                </div>
            </div>

        );
    }
}
export default connect(() => ({}))(OthersHomepage);


