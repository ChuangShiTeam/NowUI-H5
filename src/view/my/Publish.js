import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import baseStyle from '../../css/Base.scss';


import util from '../../common/util';

import style from './Publish.scss';


class Publish extends Component {
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
                     <span className={style.messageTop}>大木木_Lin</span>
                     <span className={style.messagesCenter}> Capturing every moment of my life</span>
                     <span className={style.messagesBottom}>来自 上海 徐汇区</span>
                     <div className={style.messagesNumber}>
                        <div>
                            <span className={style.messagesNumberTop}>20</span>
                            <span className={style.messagesNumberBottom}>动态</span>
                        </div>
                         <div>
                             <span className={style.messagesNumberTop}>4</span>
                             <span className={style.messagesNumberBottom}> 关注</span>
                         </div>
                         <div>
                             <span className={style.messagesNumberTop}>28</span>
                             <span className={style.messagesNumberBottom}>粉丝</span>
                         </div>
                     </div>
                 </div>
             </div>
             <div className={style.myPet}>
                 <span className={style.myPetLeft}>我的宠物</span>
                 <span className={style.myPetRight}>中华田园猫</span>
             </div>
           
            </div>
        );
    }
}
export default connect(() => ({}))(Publish);


