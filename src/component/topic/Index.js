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
            <div className="topic-index-content">
                <div className="topic-index-content-item">
                    <div className="topic-index-content-item-header">
                        <img className="topic-index-content-item-header-icon"
                             src={require('../../image/WechatIMG1916.png')} alt=""/>
                        <div className="topic-index-content-item-header-name">Nami</div>
                        <div className="topic-index-content-item-header-time">20分钟前</div>
                    </div>
                    <div className="topic-index-content-item-content"></div>
                    <div className="topic-index-content-item-footer">
                        <div className="topic-index-content-item-footer-line"></div>
                        <div className="topic-index-content-item-footer-tag">
                            <div className="topic-index-content-item-footer-tag-from">来自</div>
                            <div className="topic-index-content-item-footer-tag-text">大爱猫咪控</div>
                            <div className="topic-index-content-item-footer-tag-text">大爱猫咪控</div>
                            <div className="topic-index-content-item-footer-tag-text">大爱猫咪控</div>
                            <div className="topic-index-content-item-footer-tag-text">大爱猫咪控</div>
                        </div>
                        <img className="topic-index-content-item-footer-like-icon"
                             src={require('../../image/forum-index-hot-content-item-footer-like-active.png')} alt=""/>
                        <span className="topic-index-content-item-footer-like-number">10</span>
                        <img className="topic-index-content-item-footer-favorite-icon"
                             src={require('../../image/forum-index-hot-content-item-footer-favorite-active.png')}
                             alt=""/>
                        <span className="topic-index-content-item-footer-favorite-number">10</span>
                        <img className="topic-index-content-item-footer-comment-icon"
                             src={require('../../image/forum-index-hot-content-item-footer-comment.png')} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

Index.propTypes = {};

export default Index;
