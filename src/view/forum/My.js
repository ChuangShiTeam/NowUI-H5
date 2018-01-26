import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import classNames from 'classnames';

import ForumIndex from '../../component/forum/Index';

import util from '../../common/util';

import style from './My.scss';
import baseStyle from '../../css/Base.scss';

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
                <div className={style.content}>
                    <ForumIndex forum={{
                        "forumMediaType":"IMAGE",
                        "forumModerator":"14463951d1d94d39a9216dbd818fc984",
                        "forumDescription":"这里是魔都喵星人的聚集地，是爱\n猫人士的家园，欢迎加入",
                        "forumName":"魔都喵星人",
                        "forumMedia":{
                            "filePath":"/upload/df2078d6c9eb46babb0df957127273ab/14463951d1d94d39a9216dbd818fc984/ce9eda05f0d34544b5096ffe1d3f1e1f.jpeg"
                        },
                        "forumTodayTopicCount":1,
                        "forumId":"e52980fd5bf7456890dfe392ac1a5e76"
                    }}/>
                </div>
            </div>
        );
    }
}

List = createForm({})(List);

export default connect((store) => ({
    forumList: store.forumList
}))(List);
