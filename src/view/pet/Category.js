import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import {Link} from 'react-router';
import util from '../../common/util';
import http from '../../common/http';
import style from './Category.scss';
import baseStyle from '../../css/Base.scss';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false,
            categorys:[]
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();
        http.request({
            url: '/wawi/pet/category/mobile/v1/list',
            data: {},
            success: function (data) {
                this.setState({
                    categorys:data
                })
            }.bind(this),
            complete: function () {

            }
        });
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    render() {

        const {categorys} = this.state;

        return (
            <div className={style.page}>
                <div className={style.header}>
                    <div className={baseStyle.bottomLine}>宝贝种类</div>
                </div>
                <div className={style.content}>
                    <ul>
                        {
                            categorys.map((categoryList, index) =>
                                <li key={index} className={baseStyle.bottomLine}>
                                    <div className={style.listItemLeftIcon}>
                                        <img src={categoryList.petCategoryImage} alt=''/>
                                    </div>
                                    <div className={style.listItemCenterName}>
                                        <Link to={{
                                            pathname: `pet/Hotcat/${categoryList.petCategoryId}`
                                        }}>
                                            {categoryList.petCategoryName}
                                        </Link>
                                    </div>
                                    <div className={style.listItemRightArrow}>
                                        <span className={baseStyle.rightArrow}></span>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

Category = createForm({})(Category);

export default connect((store) => ({
    petCategory: store.petCategory
}))(Category);