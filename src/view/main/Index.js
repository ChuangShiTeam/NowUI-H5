import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import http from '../../common/http';
import constant from '../../common/constant';
import style from './Index.scss';
import baseStyle from '../../css/Base.scss';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }


    componentDidMount() {
        let path = this.props.routes[4].path;

        if (path === '/topic/index') {
            path = '/forum/index';
        }

        if (this.props.main.toolbarList.length === 0) {
            http.request({
                url: '/wawi/mobile/v1/toolbar/list',
                data: {},
                success: function (data) {
                    let toolbarList = data;
                    for (let i = 0; i < toolbarList.length; i++) {
                        if (toolbarList[i].toolbarUrl && path === toolbarList[i].toolbarUrl) {
                            toolbarList[i].selected = true;
                        } else {
                            toolbarList[i].selected = false;
                        }
                    }
                    this.props.dispatch({
                        type: 'main',
                        data: {
                            toolbarList: toolbarList
                        }
                    });
                }.bind(this),
                complete: function () {

                }
            });
        } else {
            this.handleToolbar(path);
        }
    }

    componentWillUnmount() {

    }

    handleToolbar(path) {
        let toolbarList = this.props.main.toolbarList;
        for (let i = 0; i < toolbarList.length; i++) {
            if (path === toolbarList[i].toolbarUrl) {
                toolbarList[i].selected = true;
            } else {
                toolbarList[i].selected = false;
            }
        }

        this.props.dispatch({
            type: 'main',
            data: {
                toolbarList: toolbarList
            }
        });
    }

    handleClick(url) {
        this.handleToolbar(url);

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
            <div className={baseStyle.page}>
                {this.props.children}
                <div className={style.footer}>
                    <div className={classNames(style.footerContent, baseStyle.topLine)}>
                        {
                            this.props.main.toolbarList.map((toolbar, index) => {
                                return (
                                    <div key={index} className={style.footerContentItem}
                                         onClick={this.handleClick.bind(this, toolbar.toolbarUrl)}>
                                        {/*<img className={style.footerContentItemIcon}*/}
                                             {/*src={constant.image_host + (toolbar.selected  ? toolbar.toolbarImage.filePath : toolbar.toolbarActiveImage.filePath)}*/}
                                             {/*alt=''/>*/}
                                        <img className={style.footerContentItemIcon}
                                             src={require('../../image/' + (toolbar.selected ? toolbar.selectedIcon : toolbar.icon))}
                                             alt=''/>
                                        <div className={classNames(style.footerContentItemName, toolbar.selected ? style.footerContentItemNameActive : '')}>{toolbar.toolbarName}</div>
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

export default connect((store) => ({
    main: store.main
}))(Index);
