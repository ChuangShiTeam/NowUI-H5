import React, {Component} from 'react';
import {connect} from 'react-redux';
import MSelectList from 'rmc-select-list';
import pinyin from 'pinyin';

import util from '../../common/util';
import http from '../../common/http';

import style from './Remind.scss';

function toPinyin(str) {
    if (str) {
        let newStrItemArray = pinyin(str);
        if (newStrItemArray && newStrItemArray.length > 0) {
            let newStr = '';
            for (let item of newStrItemArray) {
                newStr += item[0];
            }
            return newStr;
        } else {
            return str;
        }
    }
    return str;
}

class Remind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
            selectList: [],
            memberList: []
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        this.handleLoad();
    }

    handleLoad() {
        http.request({
            url: '/member/follow/mobile/v1/my/follow/list',
            data: {},
            success: function (data) {
                let memberList = data;
                if (memberList && memberList.length > 0) {
                    memberList = memberList.map(member => {
                        return {
                            value: member.followUserId,
                            label: member.userNickName,
                            spell: toPinyin(member.userNickName)
                        }
                    });
                    this.setState({
                        memberList: memberList
                    })
                }
            }.bind(this),
            complete: function () {

            }
        });
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

    }

    handleDelete(value) {
        let index = -1;
        for (let i = 0; i < this.state.selectList.length; i++) {
            if (this.state.selectList[i].value === value) {
                index = i;
            }
        }
        this.state.selectList.splice(index, 1);

        this.setState({
            selectList: this.state.selectList
        });
    }


    handleChange(value) {
        let member;
        for (let i = 0; i < this.state.memberList.length; i++) {
            if (this.state.memberList[i].value === value) {
                member = this.state.memberList[i];
            }
        }

        let index = -1;
        for (let i = 0; i < this.state.selectList.length; i++) {
            if (this.state.selectList[i].value === value) {
                index = i;
            }
        }

        if (index === -1) {
            this.state.selectList.push(member);
        } else {
            this.state.selectList.splice(index, 1);
        }

        this.setState({
            selectList: this.state.selectList
        });
    }

    render() {
        return (
            <div className={style.page} style={{height: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <div className={style.selected}>
                        {
                            this.state.selectList.map((member, index) =>
                                <div key={index} className={style.selectedItem}>
                                    {member.label}
                                    <img className={style.close}
                                         src={require('../../image/close.png')}
                                         onClick={this.handleDelete.bind(this, member.value)}
                                         alt=''/>
                                </div>
                            )
                        }
                    </div>
                    {
                        this.state.selectList.length > 0 ?
                            <div className={style.submit}>我选好了</div>
                            :
                            ''
                    }
                </div>
                <div className={style.line}></div>
                <MSelectList
                    data={this.state.memberList}
                    showCurrentSelected={true}
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        );
    }
}

export default connect((store) => ({
    forumRemind: store.forumRemind
}))(Remind);
