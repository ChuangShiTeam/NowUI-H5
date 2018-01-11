import React, {Component} from 'react';

import './Index.css';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="topic-index-wrapper clearfix">
                <div className="topic-index-wrapper-header">
                    <div className="topic-index-wrapper-header-left">
                        <img className="topic-index-wrapper-header-left-image" src={require('../../image/0.png')} alt=""/>
                    </div>
                    <div className="topic-index-wrapper-header-right">
                        <p className="topic-index-wrapper-header-right-name">这只柴柴和加菲也太可爱了吧这只柴柴和加菲也太可爱了吧这只柴柴和加菲也太可爱了吧这只柴柴和加菲也太可爱了吧</p>
                        <p className="topic-index-wrapper-header-right-time">20分钟前</p>
                    </div>
                </div>
                <div className="topic-index-wrapper-container">
                    <div className="topic-index-wrapper-container-image">
                        <img src={require('../../image/1.png')} alt=""/>
                    </div>
                    <div className="topic-index-wrapper-container-content">
                        这只柴柴和加菲也太可爱了吧这只柴柴和加菲也太可爱了吧这只柴柴和加菲也太可爱了吧这只柴柴和加菲也太可爱了吧这只柴柴和加菲也太可爱了吧这只柴柴和加菲也太可爱了吧这只柴柴和加菲也太可爱了吧这只柴柴和
                    </div>
                </div>
                <div className="topic-index-wrapper-footer">
                    <div className="topic-index-wrapper-footer-right">
                        <img className="topic-index-wrapper-footer-right-like-icon" src={require('../../image/like.png')} alt=""/>
                        <span className="topic-index-wrapper-footer-right-like-number">10</span>
                        <img className="topic-index-wrapper-footer-right-bookmark-icon" src={require('../../image/bookmark.png')} alt=""/>
                        <span className="topic-index-wrapper-footer-right-bookmark-number">10</span>
                        <img className="topic-index-wrapper-footer-right-comment-icon" src={require('../../image/comment.png')} alt=""/>
                        <span className="topic-index-wrapper-footer-right-comment-number">10</span>
                    </div>
                    <span className="topic-index-wrapper-footer-from">同步到</span>
                    <span className="topic-index-wrapper-footer-tag">大爱猫咪控</span>
                    <span className="topic-index-wrapper-footer-tag">大爱猫咪控</span>
                    <span className="topic-index-wrapper-footer-tag">大爱猫咪控</span>
                    <span className="topic-index-wrapper-footer-tag">大爱猫咪控</span>
                    <span className="topic-index-wrapper-footer-tag">大爱猫咪控</span>
                    <span className="topic-index-wrapper-footer-tag">大爱猫咪控</span>
                    <span className="topic-index-wrapper-footer-tag">大爱猫咪控</span>
                    <span className="topic-index-wrapper-footer-tag">大爱猫咪控</span>
                    <span className="topic-index-wrapper-footer-tag">大爱猫咪控</span>
                    <span className="topic-index-wrapper-footer-tag">大爱猫咪控</span>
                    <span className="topic-index-wrapper-footer-tag">大爱猫咪控</span>
                    <span className="topic-index-wrapper-footer-tag">大爱猫咪控</span>
                </div>
            </div>
        );
    }
}

Index.propTypes = {};

export default Index;
