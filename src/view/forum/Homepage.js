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
                 <div className={style.homePageHeaderTopBackground}>
                     头部
                 </div>
                 <div className={style.homePageHeaderMiddleMessage}>
                     中间
                 </div>
            </div>
        );
    }
}

export default connect(() => ({}))(Homepage);
