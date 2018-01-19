import React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';
import searchStyle from './Search.scss';

class Index extends Component {
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

    componentWillUnmount() {
    }

    render() {
        return (
                <div className={searchStyle.Search}>
                    <input placeholder=" # 搜索话题、商品" type="text" name="search"
                           className={searchStyle.SearchText}/>
                    <label className={searchStyle.SearchAction}> 搜 索 </label>
                </div>
        );
    }
}

Index.propTypes = {};

export default connect(() => ({}))(Index);
