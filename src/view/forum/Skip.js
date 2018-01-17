import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import classNames from 'classnames';

import util from '../../common/util';

import style from './Skip.scss';
import baseStyle from '../../css/Base.scss';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');

        //TODO 从后台获取数据
        //本地测试静态数据
        this.props.dispatch({
            type: 'skip',
            data: {
                forumList: [
                    {
                        id: '0',
                        selected: false,
                        url: 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/120/h/120',
                        name: '大爱金毛圈',
                        summary: '金毛最可爱了，大暖汪星人的代表'
                    },
                    {
                        id: '1',
                        selected: false,
                        url: 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/120/h/120',
                        name: '软萌布偶圈',
                        summary: '布偶猫可以说是最最软萌的生物了！'
                    },
                    {
                        id: '2',
                        selected: false,
                        url: 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/120/h/120',
                        name: '起司猫的日常',
                        summary: '家有小起，如有一宝'
                    }
                ]
            }
        });

    }

    componentWillUnmount() {

    }

    handleCancelSelect(index) {
        this.props.skip.forumList[index].selected = !this.props.skip.forumList[index].selected;

        this.props.dispatch({
            type: 'skip',
            data: {
                forumList: this.props.skip.forumList
            }
        });
    }

    handleSubmit() {
        this.props.history.push({
            pathname: '/forum/index',
            query: {}
        });
    }

    render() {
        return (
            <div className={style.page} style={{height: document.documentElement.clientHeight}}>
                <div className={style.skip}><Link to="/forum/index">跳过</Link></div>
                <div className={style.title}>选择加入你也许感兴趣的圈子</div>
                <div className={style.summary}>为你私人定制你的宠物部落</div>
                <div className={style.list}>
                    {
                        this.props.skip.forumList.map((forum, index) =>
                            <div key={index} id={forum.id} className={classNames(style.listItem, baseStyle.bottomLine)}
                                 onClick={this.handleCancelSelect.bind(this, index)}>
                                <div className={style.listItemLeft}>
                                    <img className={style.listItemLeftIcon} src={forum.url} alt=''/>
                                </div>
                                <div className={style.listItemCenter}>
                                    <div className={style.listItemCenterName}>{forum.name}</div>
                                    <div className={style.listItemCenterSummary}>{forum.summary}</div>
                                </div>
                                <div className={style.listItemRight}>
                                    <img className={style.listItemRightSelect}
                                         src={forum.selected ? require('../../image/skip-hook-icon.png') : require('../../image/skip-hook-false-icon.png')}
                                         alt=''/>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className={style.footer}>
                    <div className={style.submit} onClick={this.handleSubmit.bind(this)}>进入圈子</div>
                </div>
            </div>
        );
    }
}

Index.propTypes = {};


export default connect((store) => ({
    skip: store.skip
}))(Index);
