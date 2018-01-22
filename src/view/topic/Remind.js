import React, {Component} from 'react';
import {connect} from 'react-redux';
import MSelectList from 'rmc-select-list';

import util from '../../common/util';

import style from './Remind.scss';

class Remind extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
            selectList: []
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        this.props.dispatch({
            type: 'forumRemind',
            data: {
                memberList: [{
                    value: '11',
                    label: '北京市',
                    spell: 'BeiJingShi'
                }, {
                    value: '12',
                    label: '天津市',
                    spell: 'TianJinShi'
                }, {
                    value: '13',
                    label: '河北省',
                    spell: 'HeBeiSheng'
                }, {
                    value: '14',
                    label: '山西省',
                    spell: 'ShanXiSheng'
                }]
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
        for (let i = 0; i < this.props.forumRemind.memberList.length; i++) {
            if (this.props.forumRemind.memberList[i].value === value) {
                member = this.props.forumRemind.memberList[i];
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
                    data={this.props.forumRemind.memberList}
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
