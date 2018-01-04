import React, {Component} from 'react';
import {connect} from 'react-redux';

import util from "../../common/util";

import './Search.css';

class Search extends Component {
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

    handleSubmit() {
        this.props.history.push({
            pathname: '/forum/index',
            query: {}
        });
    }

    render() {
        return (
            <div>
                <div className="forum-search-header">
                    <div className="forum-search-header-input-bg">
                        <input className="forum-search-header-input" type="text" placeholder="请输入手机号码"/>
                    </div>
                    <img className="forum-search-header-search" src={require('../../image/forum-search-header-search.png')} alt=""/>
                    <img className="forum-search-header-close" src={require('../../image/forum-search-header-close.png')} alt=""/>
                </div>
            </div>
        );
    }
}

Search.propTypes = {};

export default connect(() => ({}))(Search);
