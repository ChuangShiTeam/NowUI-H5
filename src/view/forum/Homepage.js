import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List} from 'antd-mobile';

import util from "../../common/util";

import './Homepage.css';

class Homepage extends Component {
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
                <div className="forumn-homepage-background"></div>
            </div>
        );
    }
}

Homepage.propTypes = {};

export default connect(() => ({}))(Homepage);
