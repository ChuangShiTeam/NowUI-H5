import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import style from './Index.scss';
import baseStyle from '../../css/Base.scss';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuList: [{
                name: '首页',
                url: '/index',
                icon: 'index.png',
                selectedIcon: 'index-active.png',
                selected: true
            }, {
                name: '社区',
                url: '/forum/index',
                icon: 'forum.png',
                selectedIcon: 'forum-active.png',
                selected: false
            }, {
                name: '服务',
                url: '/service/index',
                icon: 'service.png',
                selectedIcon: 'service-active.png',
                selected: false
            }, {
                name: '精选',
                url: '/shop/index',
                icon: 'shop.png',
                selectedIcon: 'shop-active.png',
                selected: false
            }, {
                name: '我的',
                url: '/my/index',
                icon: 'my.png',
                selectedIcon: 'my-active.png',
                selected: false
            }]
        }
    }


    componentDidMount() {
        let path = this.props.routes[4].path;

        if (path === '/topic/index') {
            path = '/forum/index';
        }

        this.handleMenu(path);
    }

    componentWillUnmount() {

    }

    handleMenu(path) {
        let menuList = this.state.menuList;
        for (let i = 0; i < menuList.length; i++) {
            if (path === menuList[i].url) {
                menuList[i].selected = true;
            } else {
                menuList[i].selected = false;
            }
        }

        this.setState({
            menuList: menuList
        });
    }

    handleClick(url) {
        this.handleMenu(url);

        if (url === '/forum/index') {
            //url = '/forum/skip';
        }

        this.props.history.push({
            pathname: url,
            query: {}
        });
    }

    render() {
        return (
            <div className={baseStyle.page}>
                {this.props.children}
                <div className={style.footer}>
                    <div className={classNames(style.footerContent, baseStyle.topLine)}>
                        {
                            this.state.menuList.map((menu, index) => {
                                return (
                                    <div key={index} className={style.footerContentItem}
                                         onClick={this.handleClick.bind(this, menu.url)}>
                                        <img className={style.footerContentItemIcon}
                                             src={require('../../image/' + (menu.selected ? menu.selectedIcon : menu.icon))}
                                             alt=""/>
                                        <div
                                            className={classNames(style.footerContentItemName, menu.selected ? style.footerContentItemNameActive : '')}>{menu.name}</div>
                                    </div>
                                );
                            })
                        }
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
