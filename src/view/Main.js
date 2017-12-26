import React, {Component} from 'react';
import {connect} from 'react-redux';

import {TabBar} from 'antd-mobile';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }


    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

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
                    <TabBar.Item
                        title="首页"
                        icon={require('../image/index.png')}
                        selectedIcon={require('../image/index.png')}
                        selected={true}
                    />
                    <TabBar.Item
                        title="社区"
                        icon={require('../image/community.png')}
                        selectedIcon={require('../image/community.png')}
                        selected={false}
                    />
                    <TabBar.Item
                        title="服务"
                        icon={require('../image/service.png')}
                        selectedIcon={require('../image/service.png')}
                        selected={false}
                    />
                    <TabBar.Item
                        title="精选"
                        icon={require('../image/shop.png')}
                        selectedIcon={require('../image/shop.png')}
                        selected={false}
                    />
                    <TabBar.Item
                        title="我的"
                        icon={require('../image/my.png')}
                        selectedIcon={require('../image/my.png')}
                        selected={false}
                    />
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
