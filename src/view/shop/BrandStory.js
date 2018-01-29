import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import util from '../../common/util';

import style from './BrandStory.scss';
import baseStyle from '../../css/Base.scss';

class BrandStory extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
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
            <div className={style.content}>
                    <p className={style.contentText}>
                        NITORI(ニトリ)是日本最大的家居连锁店。株式会社NITORI在1972年3月以两家连锁店创业，到2009年1月为止在日本已全国发展到了185家店铺，从北海道至冲绳均有分店，并且在台湾也有5家店铺。2002年竣工日本最大规模【关东物流中心】，其物流中心及进口量皆居日本首位。并且成功于2002年10月在日本股票公开上市。
                    </p>
            </div>
        );
    }
}

export default connect((state) => ({
    index: state.index
}))(BrandStory);
