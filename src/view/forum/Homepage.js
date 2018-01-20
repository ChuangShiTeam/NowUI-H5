import React, {Component} from 'react';
import {connect} from 'react-redux';

import util from '../../common/util';
import style from './Homepage.scss';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false
        }
    }

    componentDidMount(){
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount(){

    }

    render() {
        return (
            <div className={style.page} style={{height: document.documentElement.clientHeight}}>
                 <div className={style.homePageHeaderIco}></div>
                 <div className={style.homePageHeaderTopBackground}>
                     <span style={{paddingTop:"97px",display:"block",paddingLeft:"10px",fontSize:"10px"}}>
                         已有23人加入圈子
                     </span>
                 </div>
                 <div className={style.homePageHeaderMiddleMessage}>
                     <p style={{fontSize:"20px",textAlign:"center",paddingTop:"33px"}}>世界萌宠大搜罗</p>
                     <p style={{fontSize:"10px",textAlign:"center"}}>本圈为你搜罗全世界的有趣动物资讯</p>
                     <p style={{textAlign:"center",marginTop:"10px"}}>
                         <input style={{borderRadius:"34px",backgroundColor:"#DEFAFD",width:"86px",height:"27px",boxShadow:" 0px 0px 6px #888888"}} type="button" value="加入圈子"/>
                     </p>
                     <p style={{borderBottom:"1px solid #DDDDDD ",margin:"20px"}}></p>
                 </div>
                 <div>
                     <dl>
                         <dt className={style.homePageHeaderMessageLeft}>
                             <img src={require('../../image/topicItem.png')} alt=''/>
                         </dt>
                         <dd className={style.homePageHeaderMessageRight}>
                             <p style={{color:"#000000",fontSize:"12px"}}>小野</p>
                             <p style={{color:"#000000",fontSize:"9px",marginTop:"2px"}}>资深遛狗师一枚，对宠物行为有很深的造诣。</p>
                         </dd>
                     </dl>
                 </div>
            </div>
        );
    }
}

export default connect(() => ({}))(Homepage);
