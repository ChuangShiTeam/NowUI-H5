
import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import baseStyle from '../../css/Base.scss';
import {Link} from 'react-router';
import util from '../../common/util';
import style from './Follow.scss';

class Followme extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: true
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
            <div className={baseStyle.page} style={{minHeight: document.documentElement.clientHeight}}>

                <div className={classNames(style.header , baseStyle.bottomLine)}>
                    <Link to={"/my/follow"} className={classNames(style.headerOther,style.navigation)}>我关注的</Link>
                    <div className={classNames(style.headerHalfBottomLine,style.navigation)}>谁关注我</div>
                </div>
                <div className={style.contentMargin}>
                    <div className={classNames(style.list , baseStyle.bottomLine)}>
                        <div className={style.listLeft}>
                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?listView/1/w/30/h/30" alt=""/>
                            <div className={style.listCenter}>是大熊啊</div>
                        </div>
                     
                            {true?
                                <div className={classNames(style.listRights ,style.borderLineYellow)}>
                                    <span className={classNames(style.listRightFollow)}>+关注</span>
                                </div>
                                :
                                <div className={style.listRights}>
                                    <span className={style.listRightFollowActive}>已关注</span>
                                </div>
                            }
                            
             
                    </div>
                    <div className={classNames(style.list,baseStyle.bottomLine)}>
                        <div className={style.listLeft}>
                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?listView/1/w/30/h/30" alt=""/>
                            <div className={style.listCenter}> 粒粒</div>
                        </div>
                        {true?
                            <div className={classNames(style.listRights ,style.borderLineYellow)}>
                                <span className={classNames(style.listRightFollow)}>+关注</span>
                            </div>
                            :
                            <div className={style.listRights}>
                                <span className={style.listRightFollowActive}>已关注</span>
                            </div>
                        }
                    </div>
                    <div className={classNames(style.list,baseStyle.bottomLine)}>
                        <div className={style.listLeft}>
                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?listView/1/w/30/h/30" alt=""/>
                            <div className={style.listCenter}> 小高同志</div>
                        </div>
                        {false?
                            <div className={classNames(style.listRights ,style.borderLineYellow)}>
                                <span className={classNames(style.listRightFollow)}>+关注</span>
                            </div>
                            :
                            <div className={style.listRights}>
                                <span className={style.listRightFollowActive}>已关注</span>
                            </div>
                        }
                    </div>
                    <div className={classNames(style.list,baseStyle.bottomLine)}>
                        <div className={style.listLeft}>
                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?listView/1/w/30/h/30" alt=""/>
                            <div className={style.listCenter}> 大大大饺子</div>
                        </div>
                        {false?
                            <div className={classNames(style.listRights ,style.borderLineYellow)}>
                                <span className={classNames(style.listRightFollow)}>+关注</span>
                            </div>
                            :
                            <div className={style.listRights}>
                                <span className={style.listRightFollowActive}>已关注</span>
                            </div>
                        }
                    </div>
                    <div className={classNames(style.list,baseStyle.bottomLine)}>
                        <div className={style.listLeft}>
                            <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?listView/1/w/30/h/30" alt=""/>
                            <div className={style.listCenter}> 阿拉系蕾</div>
                        </div>
                        {false?
                            <div className={classNames(style.listRights ,style.borderLineYellow)}>
                                <span className={classNames(style.listRightFollow)}>+关注</span>
                            </div>
                            :
                            <div className={style.listRights}>
                                <span className={style.listRightFollowActive}>已关注</span>
                            </div>
                        }
                    </div>
                </div>
                <div className={style.content} style={{minHeight: document.documentElement.clientHeight - 46 - 12 - 8}}>
                </div>
            </div>

        );

    }

}
export default connect(() => ({}))(Followme);

