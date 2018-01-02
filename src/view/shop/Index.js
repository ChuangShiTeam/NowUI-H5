import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Toast} from 'antd-mobile';

import util from "../../common/util";

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        }
    }

    componentDidMount() {
        util.setTitle('精选');
    }

    componentWillUnmount() {

    }

    handleSubmit() {

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

Index.propTypes = {};

export default connect(() => ({}))(Index);
