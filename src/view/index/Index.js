import React, {Component} from 'react';
import {connect} from 'react-redux';

import util from '../../common/util';

import './Index.css';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: 0
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');

        window.addEventListener('scroll', this.handleScroll.bind(this));

        if (util.isIE8()) {
            setTimeout(function () {
                this.handleHeader();
            }.bind(this), 10);

            window.addEventListener('scroll', this.handleScrollHeader.bind(this));
        }

        new window.Swiper('.swiper-container', {
            pagination: '.pagination',
            loop: true
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));

        if (util.isIE8()) {
            window.removeEventListener('scroll', this.handleScrollHeader.bind(this));
        }
    }

    handleScroll() {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        this.setState({
            opacity: scrollTop / 300
        });
    }

    handleScrollHeader() {
        this.handleHeader();
    }

    handleHeader() {
        util.scrollToFixed('index-header', 0);
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            accessibility: false,
            variableWidth: true
        };

        return (
            <div>
                <div className="index-header-mask" style={{
                    opacity: this.state.opacity,
                    filter: 'progid:DXImageTransform.Microsoft.Alpha(opacity=100)'
                }}></div>
                <div className="index-header">
                    <div className="index-header-left">
                        <img className="index-header-left-user" src={require('../../image/index-header-left-user.png')}
                             alt=""/>
                    </div>
                    <div className="index-header-center">
                        <img className="index-header-center-logo"
                             src={require('../../image/index-header-center-logo.png')} alt=""/>
                    </div>
                    <div className="index-header-right">
                        <img className="index-header-right-search"
                             src={require('../../image/index-header-right-search.png')} alt=""/>
                    </div>
                </div>
                <div className="index-banner swiper-container">
                    <div className="swiper-wrapper"
                         style={{height: (document.documentElement.clientWidth / 320 * 380) + 'px'}}>
                        <div className="swiper-slide">
                            <img className="index-banner-image" src={require('../../image/0.png')} alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img className="index-banner-image" src={require('../../image/0.png')} alt=""/>
                        </div>
                    </div>
                    <div className="pagination"></div>
                </div>
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
