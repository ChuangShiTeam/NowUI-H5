import  React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';
import {Link} from 'react-router';
import  style from './Hotcat.scss';
import baseStyle from '../../css/Base.scss';
import classNames from 'classnames';

class Hotcat extends Component {
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
                    <span className={style.allKind}>查看全部</span>
                </div>
                <div className={style.list}>
                    <div className={style.listItem}>
                        <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?listView/1/w/56/h/56" alt=""/>
                        <span>苏格兰折耳猫</span>
                    </div>

                </div>
            </div>
        )

    }

}


export default connect(() => ({}))(Hotcat);