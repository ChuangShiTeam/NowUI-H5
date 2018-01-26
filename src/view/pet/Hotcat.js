import  React, {Component} from 'react';
import {connect} from 'react-redux';
import util from '../../common/util';
import  style from './Hotcat.scss';
import http from '../../common/http';
import Notification from 'rc-notification';
import {Link} from 'react-router';
let notification = null;
Notification.newInstance({}, (n) => notification = n);

class Hotcat extends Component {

    constructor(props) {
        super(props);
        this.state =
            {
                petCategorys: []
            }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();
        this.getChildCategoryList(this.props.params.categoryId);
    }

    getChildCategoryList(categoryId) {
        http.request({
            url: '/wawi/pet/category/mobile/v1/child/list',
            data: {
                petCategoryId: categoryId
            },
            success: function (data) {
                if (data) {
                    this.setState({
                        petCategorys: data
                    });
                } else {
                    notification.notice({
                        content: '暂无数据'
                    });
                }
            }.bind(this),
            complete: function () {
            }
        });
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

    }

    render() {
        const {petCategorys} = this.state;

        return (
            <div className={style.page} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={style.header}>
                    <span className={style.tittle}>热门品种</span>
                    <Link to={{
                        pathname: `pet/Category`
                    }}>
                        <span className={style.allKind}> 查看全部 </span>
                    </Link>
                </div>
                <div className={style.list}>
                    {
                        petCategorys.map((category, index) =>
                            <div key={index} className={style.listItem}>
                                <img src={category.petCategoryImage.filePath}/>
                                <span>{category.petCategoryName}
                                </span>
                            </div>
                        )
                    }
                </div>
            </div>
        )

    }
}

export default connect(() => ({}))(Hotcat);
