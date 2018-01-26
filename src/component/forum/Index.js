import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import classNames from 'classnames';

import constant from '../../common/constant';

import style from './Index.scss';
import baseStyle from '../../css/Base.scss';

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
            <div className={style.List}>
                <div className={style.ListLeft}>
                    <Link to={'/forum/homepage/' + this.props.forum.forumId}>
                        <img className={style.ListLeftIcon}
                             src={constant.image_host + this.props.forum.forumMedia.filePath}
                             alt=''/>
                    </Link>
                </div>
                <div className={style.ListCenter}>
                    <Link to={'/forum/homepage/' + this.props.forum.forumId}>
                        <div className={style.ListCenterHeader}>
                            <div className={style.ListCenterHeaderName}>
                                {this.props.forum.forumName}
                            </div>
                            <div className={style.ListCenterHeaderTop}>
                                {this.props.forum.forumIsTop ? '置顶' : ''}
                            </div>
                        </div>
                    </Link>
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
                                this.props.forum.forumModerator.userAvatar ?
                                    <img className={style.ListCenterFooterLeftAvatar}
                                         src={constant.image_host + this.props.forum.forumModerator.userAvatar}
                                         alt=''/>
                                    :
                                    <img className={style.ListCenterFooterLeftAvatar}
                                         src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/15/h/15"
                                         alt=''/>

                            }
                        </div>
                        </Link>
                            <div className={style.ListCenterFooterCenter}>
                                {this.props.forum.forumModerator.userNickName}
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
    forum: PropTypes.object.isRequired
};

export default Index;
