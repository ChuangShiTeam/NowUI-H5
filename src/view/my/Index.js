import React, {Component} from 'react';
import {connect} from 'react-redux';

import util from "../../common/util";

import './Index.css';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        }
    }

    componentDidMount() {
        util.setTitle('我的');
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
