import React, {Component} from 'react';
import {connect} from 'react-redux';

import util from '../../common/util';

import style from './Like.scss';
import baseStyle from '../../css/Base.scss';

class Like extends Component {
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
            <div>

            </div>
        );
    }
}

export default connect(() => ({}))(Like);
