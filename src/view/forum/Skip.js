import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import util from '../../common/util';

import './Skip.css';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');

        if (this.props.skip.forumList && this.props.skip.forumList.length === 0) {
            //TODO 从后台获取数据
            //本地测试静态数据
            this.props.dispatch({
                type: 'skip',
                data: {
                    forumList: [
                        {
                            itemId: '12345678',
                            selected: false,
                            itemImgUrl: 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/120/h/120',
                            itemName: '大爱金毛圈',
                            itemSubtitle: '金毛最可爱了，大暖汪星人的代表'
                        },
                        {
                            itemId: '123458',
                            selected: true,
                            itemImgUrl: 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/120/h/120',
                            itemName: '软萌布偶圈',
                            itemSubtitle: '布偶猫可以说是最最软萌的生物了！'
                        },
                        {
                            itemId: '128',
                            selected: false,
                            itemImgUrl: 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/120/h/120',
                            itemName: '起司猫的日常',
                            itemSubtitle: '家有小起，如有一宝'
                        }
                    ]
                }
            });
        }

    }

    componentWillUnmount() {

    }

    handleCancelSelect(index) {
        // for(let i = 0; i < this.props.skip.forumList.length; i++) {
        //     if (this.props.skip.forumList[i].itemId === itemId) {
        //         this.props.skip.forumList[i].selected = !this.props.skip.forumList[i].selected;
        //     }
        // }

        this.props.skip.forumList[index].selected = !this.props.skip.forumList[index].selected;

        this.props.dispatch({
            type: 'skip',
            data: {
                forumList: this.props.skip.forumList
            }
        });
 
        //t itemId = this.props.skip.itemId
        // console.log(forum);
        // console.log(itemId);
        // this.setState({
        //     isSele : !this.state.isSele
        // }, function () {
        //     console.log(this.state.isSele)
        // })
    }

    render() {
        return (
            <div>
                <div className="skip-header text-right">跳过</div>
                <div className="skip-conten">
                    <div className="skip-conten-title text-center">选择加入你也许感兴趣的圈子</div>
                    <div className="skip-conten-subtitle text-center">为你私人定制你的宠物部落</div>
                    <ul className="skip-conten-info">
                        {
                            this.props.skip.forumList.map((forum, index) =>
                                <li key={index} id={forum.itemId} className="bottom-line" onClick={this.handleCancelSelect.bind(this, index)}>
                                    <div className="skip-conten-user-img">      
                                        <img className="index-header-right-search" src={forum.itemImgUrl} alt=""/>
                                    </div>
                                    <div className="skip-conten-user-info">
                                        <div className="skip-conten-user-name">{forum.itemName}</div>
                                        <div className="skip-conten-user-centen">{forum.itemSubtitle}</div>
                                    </div>
                                    <div className="skip-conten-hook">    
                                        {
                                            forum.selected ?
                                                <img className="index-header-right-search" src={require('../../image/skip-hook-icon.png')} alt=""/>
                                                :
                                                <img className="index-header-right-search" src={require('../../image/skip-hook-false-icon.png')} alt=""/>
                                        }
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                    <div className="skip-go-circle text-center">
                        <span>进入圈子</span>
                    </div>
                </div>
            </div>
        );
    }
}

Index.propTypes = {};


export default connect((state) => ({
    skip: state.skip
}))(Index);
