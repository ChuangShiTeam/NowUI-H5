/**
 * Created by XiongXiang on 2018/1/19.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';
import hotTopicStyle from './HotTopic.scss';
import Search from './Search';

class HotTopic extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();
    }

    componentDidUpdate(){
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount(){
    }

    render() {
        return (
            <div className={hotTopicStyle.hotTopicTopContainer}>
                <Search/>
                <div className={hotTopicStyle.hotTopicTopHotTopicTitle}>
                    热门话题
                </div>
                <div className={hotTopicStyle.hotTopicTopHotTopicListContainer}>
                    <ul className={hotTopicStyle.hotTopicTopHotTopicList}>
                        <li >
                            <dl>
                                <dt className={hotTopicStyle.hotTopicTopHotTopicListLeft}>
                                    <img style={{width:"51px",height:"51px"}} src={require('../../image/topicItem.png')} alt=''/>
                                </dt>
                                <dd className={hotTopicStyle.hotTopicTopHotTopicListRight}>
                                    <p style={{color:"black",fontSize:"14px"}}># 超好用的项圈 #</p>
                                    <p style={{color:"#C8C8C8",fontSize:"14px",marginTop:"2px"}}>1982个动态</p>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
HotTopic.propTypes = {};
export default connect(() => ({}))(HotTopic);