import React, {Component} from 'react';
import {connect} from 'react-redux';

import util from '../../common/util';

import style from './Dynamic.scss';
class Dynamic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');

    }

    componentWillUnmount() {

    }
    render() {
        return (
            <div className={style.page}>
                <div className={style.navList}>
                    <div className={style.navList1}>全部</div>
                    <div className={style.navList2}>文章</div>
                    <div className={style.running}>动态</div>
                    <div className={style.navList2}>萌物</div>
                    <div className={style.navList2}>商户</div>
                    <div className={style.search}>
                        <img src={require("../../image/search.png")} alt=""/>
                    </div>
                </div>
                <div className={style.content}>
                    <div>
                        <div className={style.contentList}>
                            <div className={style.contentLeft}>
                                
                                <div className={style.contentLeftAll}>
                                    <div className={style.contentLeft1}>
                                        <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
                                        <div className={style.contentLeftFoot}>
                                            <div className={style.contentLeftFoot1}> 这只柴柴和加菲也太可爱了吧~</div>
                                            <div className={style.contentLeftFoot3}>
                                                <div>收藏于:2018-1-10 16.:44</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.contentLeftBottom}>
                                        <div  className={style.contentLBL}>
                                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/20/h/20" alt=""/>
                                            <div>Nami</div>
                                        </div>
                                        <div  className={style.contentLBR}>
                                            <div className={style.fromFoot}>来自</div>
                                            <div className={style.fromWhere}>
                                                <div>柴犬窝</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.contentRight}>
                                <div>
                                    <img src={require("../../image/star.png")} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={style.contentList}>
                            <div className={style.contentLeft}>

                                <div className={style.contentLeftAll}>
                                    <div className={style.contentLeft1}>
                                        <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
                                        <div className={style.contentLeftFoot}>
                                            <div className={style.contentLeftFoot1}>热烈庆祝我家的小胖子两周岁生日快乐~感谢一直…</div>
                                            <div className={style.contentLeftFoot3}>
                                                <div>收藏于:2018-1-10 16.:44</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.contentLeftBottom}>
                                        <div  className={style.contentLBL}>
                                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/20/h/20" alt=""/>
                                            <div>Nami</div>
                                        </div>
                                        <div  className={style.contentLBR}>
                                            <div className={style.fromFoot}>来自</div>
                                            <div className={style.fromWhere}>
                                                <div>蓝猫圈</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.contentRight}>
                                <div>
                                    <img src={require("../../image/star.png")} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
            ;
    }
}
export default connect(() => ({}))(Dynamic);
