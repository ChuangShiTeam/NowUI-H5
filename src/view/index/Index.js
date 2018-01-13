import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Index.css';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <div className="index-header">
                    <div className="index-header-left">left</div>
                    <div className="index-header-center">center</div>
                    <div className="index-header-right">right</div>
                </div>
            </div>
        );
    }
}

export default connect((state) => ({
    index: state.index
}))(Index);
