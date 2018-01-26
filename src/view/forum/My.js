import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";

import ForumIndex from '../../component/forum/Index';

import util from '../../common/util';

import style from './My.scss';

class List extends Component {
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
            <div className={style.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.headerLeft}>
                        <img className={style.headerLeftIcon}
                             src={require('../../image/forum-join.png')}
                             alt=''/>
                    </div>
                    <div className={style.headerCenter}>
                        我加入的圈子
                    </div>
                </div>
                <div className={style.content} style={{minHeight: document.documentElement.clientHeight - 46 - 12 - 8}}>
                    {
                        this.props.forumMy.forumList.map(function (forum, index) {
                            return (
                                <ForumIndex key={index} forum={forum}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

List = createForm({})(List);

export default connect((store) => ({
    forumMy: store.forumMy
}))(List);
