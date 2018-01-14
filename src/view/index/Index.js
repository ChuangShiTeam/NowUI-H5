import React, {Component} from 'react';
import {connect} from 'react-redux';

import util from '../../common/util';

import './Index.css';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <div className="index-header">
                    <div className="index-header-left">
                        <img className="index-header-left-user" src={require('../../image/index-header-left-user.png')} alt=""/>
                    </div>
                    <div className="index-header-center">
                        <img className="index-header-center-logo" src={require('../../image/index-header-center-logo.png')} alt=""/>
                    </div>
                    <div className="index-header-right">
                        <img className="index-header-right-search" src={require('../../image/index-header-right-search.png')} alt=""/>
                    </div>
                </div>
                <div className="container">
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
                <div className="bottom-line">1</div>
                <div className="bottom-line">1</div>
                <div className="bottom-line">1</div>
                <div className="bottom-line">1</div>
                <div className="bottom-line">1</div>
                <div className="bottom-line">1</div>
                <div className="bottom-line">1</div>
                <div className="bottom-line">1</div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}

export default connect((state) => ({
    index: state.index
}))(Index);
