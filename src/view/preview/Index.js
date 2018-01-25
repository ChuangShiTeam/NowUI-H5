import React, {Component} from 'react';

import util from '../common/util';

import {connect} from "react-redux";

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        util.hancleComponentDidMount();
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }
    componentWillUnmount() {

    }

    render() {
        return (
            <ImageView imagelist={this.props.imagelist} close={this.props.handleClose.bind(this)} />
        );
    }
}

Index.propTypes = {
    imageList: PropTypes.array.isRequired,
    handleClose: PropTypes.fun.isRequired
};

Index.defaultProps = {
    imageList: []
};

export default connect(() => ({}))(Index);
