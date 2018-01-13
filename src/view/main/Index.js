import React, {Component} from 'react';
import {connect} from 'react-redux';

import util from '../../common/util';

import './Index.css';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: [{
                title: '首页',
                url: '/index',
                icon: 'index.png',
                selectedIcon: 'index-active.png',
                selected: true
            }, {
                title: '社区',
                url: '/forum/index',
                icon: 'forum.png',
                selectedIcon: 'forum-active.png',
                selected: false
            }, {
                title: '服务',
                url: '/service/index',
                icon: 'service.png',
                selectedIcon: 'service-active.png',
                selected: false
            }, {
                title: '精选',
                url: '/shop/index',
                icon: 'shop.png',
                selectedIcon: 'shop-active.png',
                selected: false
            }, {
                title: '我的',
                url: '/my/index',
                icon: 'my.png',
                selectedIcon: 'my-active.png',
                selected: false
            }]
        }
    }


    componentDidMount() {
        // let path = this.props.routes[4].path;
        //
        // console.log(path);
        //
        // if (path === '/topic/index') {
        //     path = '/forum/index';
        // }

        // this.handleMenu(path);


        if (util.isIE8()) {
            this.handleFooter();

            window.addEventListener('scroll', this.handleScroll.bind(this));
        }
    }

    componentWillUnmount() {
        if (util.isIE8()) {
            window.removeEventListener('scroll', this.handleScroll.bind(this));
        }
    }

    handleScroll() {
        this.handleFooter();
    }

    handleFooter() {
        util.scrollToFixed('main-index-footer', document.documentElement.clientHeight - 100);
    }

    handleMenu(path) {
        // let menu = this.state.menu;
        // for (let i = 0; i < menu.length; i++) {
        //     if (path === menu[i].url) {
        //         menu[i].selected = true;
        //     } else {
        //         menu[i].selected = false;
        //     }
        // }
        //
        // this.setState({
        //     menu: menu
        // });
    }

    handlePress(key, url) {
        this.handleMenu(url);

        if (url === '/forum/index') {
            url = '/forum/skip';
        }

        this.props.history.push({
            pathname: url,
            query: {}
        });
    }

    render() {
        return (
            <div className="page">
                {this.props.children}
                <div className="main-index-footer">
                    <div className="main-index-footer-item">
                        <img className="main-index-footer-item-icon" src={require('../../image/index-active.png')} alt=""/>
                        <div className="main-index-footer-item-name">首页</div>
                    </div>
                    <div className="main-index-footer-item">
                        <img className="main-index-footer-item-icon" src={require('../../image/forum.png')} alt=""/>
                        <div className="main-index-footer-item-name">社区</div>
                    </div>
                    <div className="main-index-footer-item">
                        <img className="main-index-footer-item-icon" src={require('../../image/service.png')} alt=""/>
                        <div className="main-index-footer-item-name">服务</div>
                    </div>
                    <div className="main-index-footer-item">
                        <img className="main-index-footer-item-icon" src={require('../../image/shop.png')} alt=""/>
                        <div className="main-index-footer-item-name">精选</div>
                    </div>
                    <div className="main-index-footer-item">
                        <img className="main-index-footer-item-icon" src={require('../../image/my.png')} alt=""/>
                        <div className="main-index-footer-item-name">我的</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        index: state.index
    }
})(Index);
