import React, {Component} from 'react';
import {connect} from 'react-redux';

import {TabBar} from 'antd-mobile';

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
        let path = this.props.routes[4].path;

        console.log(path);

        if (path === '/topic/index') {
            path = '/forum/index';
        }

        this.handleMenu(path);
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    handleMenu(path) {
        let menu = this.state.menu;
        for (let i = 0; i < menu.length; i++) {
            if (path === menu[i].url) {
                menu[i].selected = true;
            } else {
                menu[i].selected = false;
            }
        }

        this.setState({
            menu: menu
        });
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
            <div>
                {this.props.children}
                <TabBar
                    unselectedTintColor="#000000"
                    tintColor="#47B8C0"
                    barTintColor="white"
                >
                    {
                        this.state.menu.map((item, index) => {
                            return (
                                <TabBar.Item
                                    key={index}
                                    title={item.title}
                                    icon={require('../image/' + item.icon)}
                                    selectedIcon={require('../image/' + item.selectedIcon)}
                                    selected={item.selected}
                                    onPress={this.handlePress.bind(this, item.key, item.url)}
                                />
                            );
                        })
                    }
                </TabBar>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        index: state.index
    }
})(Index);
