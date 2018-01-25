import  React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';
import {Link} from 'react-router';
import  style from './Hotkind.scss';
import baseStyle from '../../css/Base.scss';
import classNames from 'classnames';

class Hotkind extends Component {
    constructor(props) {
        super(props);
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
