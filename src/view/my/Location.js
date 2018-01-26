import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import util from '../../common/util';

import style from './Location.scss';
import baseStyle from '../../css/Base.scss';

class Location extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        this.handleLoad();
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

    }

    handleLoad() {

    }

    render() {
        return (
            <div className={style.page} style={{height: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        <div className={style.headerContentLeft}>
                        </div>
                        <div className={style.headerContentCenter}>
                            地理位置
                        </div>
                    </div>
                </div>
                <div className={style.content}>
                    <div className={classNames(style.image, baseStyle.list)}>
                        <div className={baseStyle.listLeft}>头像</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            <img className={style.imageCenterImage}
                                 src='http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/58/h/58'
                                 alt=''/>
                        </div>
                        <div className={baseStyle.listRight}>
                        </div>
                    </div>
                </div>
                <div className={style.line}></div>
                <div className={style.content}>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={baseStyle.listLeft}>昵称</div>
                        <div className={(style.listItemCenter,baseStyle.listCenter)}>
                            <input className={style.listItemCenterInput} /*{...getFieldProps('forumDescription', {
                                rules: [{
                                    required: true,
                                    message: '圈子简介不能为空'
                                }],
                                initialValue: ''
                            })}*/  type="text"  placeholder="请输入昵称" />
                        </div>
                        <div className={baseStyle.listRight}>
                        </div>
                    </div>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={baseStyle.listLeft}>个性签名</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            Capturing every moment...
                        </div>
                        <div className={baseStyle.listRight}>
                        </div>
                    </div>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={baseStyle.listLeft}>性别</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)}>
                            女
                        </div>
                        <div className={baseStyle.listRight}>
                        </div>
                    </div>
                    <div className={classNames(baseStyle.list, baseStyle.bottomLine)}>
                        <div className={baseStyle.listLeft}>城市</div>
                        <div className={classNames(style.listCenter, baseStyle.listCenter)} onClick={this.props.handleLocation.bind(this)}>
                            上海
                        </div>
                        <div className={baseStyle.listRight}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(() => ({}))(Location);
