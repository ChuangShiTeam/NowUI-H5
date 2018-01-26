import React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';

import style from './Search.scss';

class Index extends Component {
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
            <div className={style.Search}>
                <input placeholder=" # 搜索话题、商品" type="text" name="search"
                       className={style.SearchText}/>
                <label className={style.SearchAction}> 搜 索 </label>
            </div>
        );
    }
}

Index.propTypes = {};

export default connect(() => ({}))(Index);
