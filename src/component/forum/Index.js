import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

import constant from '../../common/constant';

import style from './Index.scss';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className={style.List} style={this.props.style}>
                <div className={style.ListLeft}>
                    <Link to={'/forum/homepage/' + this.props.forum.forumId}>
                        <img className={style.ListLeftIcon}
                             src={constant.image_host + this.props.forum.forumMedia}
                             alt=''/>
                    </Link>
                </div>
                <div className={style.ListCenter}>
                    <div className={style.ListCenterHeader}>
                        <div className={style.ListCenterHeaderName}>
                            <Link to={'/forum/homepage/' + this.props.forum.forumId}>
                                {this.props.forum.forumName}
                            </Link>
                        </div>
                        {
                            this.props.forumIsTop ?
                                <div className={style.ListCenterHeaderTop} onClick={() => this.props.handleTop(this.props.forum.forumId)}>
                                    置顶
                                </div>
                                :
                                null
                        }
                    </div>
                    <Link to={'/forum/homepage/' + this.props.forum.forumId}>
                        <div className={style.ListCenterSummary}>
                            {this.props.forum.forumDescription}
                        </div>
                    </Link>
                    <div className={style.ListCenterFooter}>
                        <Link to={'/forum/homepage/' + this.props.forum.forumId}>
                        <div className={style.ListCenterFooterLeft}>
                            <img className={style.ListCenterFooterLeftCrown}
                                 src={require('../../image/crown.png')}
                                 alt=''/>
                            {
                                 this.props.forum.forumModeratorInfo && this.props.forum.forumModeratorInfo.userAvatar ?
                                    <img className={style.ListCenterFooterLeftAvatar}
                                         src={constant.image_host + this.props.forum.forumModeratorInfo.userAvatar}
                                         alt=''/>
                                    :
                                    <img className={style.ListCenterFooterLeftAvatar}
                                         src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/15/h/15"
                                         alt=''/>
                            }
                        </div>
                        </Link>
                            <div className={style.ListCenterFooterCenter}>

                                {
                                    this.props.forum.forumModeratorInfo && this.props.forum.forumModeratorInfo.userAvatar ?
                                        this.props.forum.forumModeratorInfo.userNickName
                                        :
                                        null
                                }
                            </div>
                        <Link to={'/forum/homepage/' + this.props.forum.forumId}>
                            <div className={style.ListCenterFooterRight}>
                                今日最新话题数
                                <span
                                    className={style.ListCenterFooterRightNumber}>{this.props.forum.forumTodayTopicCount}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

Index.propTypes = {
    forum: PropTypes.object.isRequired,
    forumIsTop: PropTypes.bool,
    handleTop: PropTypes.func,
    forum: PropTypes.object.isRequired,
    style: PropTypes.object
};

Index.defaultProps = {
    forumIsTop: false
};
export default Index;
