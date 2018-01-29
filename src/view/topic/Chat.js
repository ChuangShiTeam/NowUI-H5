import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";

import util from '../../common/util';

import  style from './Chat.scss';

class Chat extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoad:false
        }
    }
    componentDidMount(){
        util.setTitle('wawipet哇咿宠');
    }
    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

    }
    render(){
        return(
          <div className={style.page} style={{minHeight: document.documentElement.clientHeight}}>
              <div className={style.centerTop}>
                  <div className={style.centerLeft}>你上次说的那家宠物店挺好的，是哪一家来着？</div>
                  <div className={style.centerRight}>
                      <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/48/h/48" alt=""/>
                  </div>
              </div>
              <div className={style.centerTops}>
                  <div className={style.centerRights}>
                      <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/48/h/48" alt=""/>
                  </div>
                  <div className={style.centerLefts}>我上次去的是芭比堂，感觉还不错的</div>
              </div>
              <div className={style.bottom}>
                  <input type="text" className={style.input} placeholder="说点什么..."/>
              </div>
            
          </div>  
        );
    }
}
export  default connect(() => ({}))(Chat);