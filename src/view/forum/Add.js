import React, {Component} from 'react';
import {connect} from 'react-redux';

import util from '../../common/util';

import style from './Add.scss';
import baseStyle from '../../css/Base.scss';

class Index extends Component {
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
            <div>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        创建圈子
                    </div>
                </div>
                <div className={style.upload}>
                    <div className={style.uploadLeft}>上传圈子照片</div>
                    <div className={style.uploadRight}></div>
                </div>
            </div>
        );
    }
}

Index.propTypes = {};

export default connect(() => ({}))(Index);
