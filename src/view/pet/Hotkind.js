import  React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';

import  style from './Hotkind.scss';

class Hotkind extends Component {
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

    componentDidUpdate(){
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount(){
    }

    render() {
        return (
            <div className={style.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <span className={style.tittle}>热门品种</span>
                    <img src="" alt=""/>
                </div>
                <div className={style.list}>


                </div>
            </div>
        )

    }

}


export default connect(() => ({}))(Hotkind);
