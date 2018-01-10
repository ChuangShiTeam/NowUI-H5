import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import util from "../../common/util";

import Topic from "../../component/topic/Index";

import './Index.css';

class Index extends Component {
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

    handleAdd() {
        this.props.history.push({
            pathname: '/topic/add',
            query: {}
        });
    }

    handleSearch() {
        this.props.history.push({
            pathname: '/topic/search',
            query: {}
        });
    }

    handleSubmit() {

    }

    render() {
        return (
            <div>
                <div className="topic-index-header">
                    <div className="topic-index-header-mask" style={{opacity: this.state.opacity}}></div>
                    <div className="topic-index-header-left">
                        <div className="topic-index-header-left-user" onClick={this.handleAdd.bind(this)}>
                            <img src={require('../../image/topic-index-user.png')} alt=""/>
                        </div>
                    </div>
                    <div className="topic-index-header-center">
                        <Link to="/forum/index" className="topic-index-header-center-left">圈子</Link>
                        <div className="topic-index-header-center-right">动态</div>
                    </div>
                    <div className="topic-index-header-right">
                        <div className="topic-index-header-right-search" onClick={this.handleSearch.bind(this)}>
                            <img src={require('../../image/search.png')} width="20" height="22" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="topic-index-content">
                    <Topic/>
                </div>
            </div>
        );
    }
}

Index.propTypes = {};

export default connect(() => ({}))(Index);
