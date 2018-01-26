import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createForm} from "rc-form";
import {Link} from 'react-router';
import Notification from 'rc-notification';
import classNames from 'classnames';
import util from '../../common/util';
import http from '../../common/http';
import ImageUpload from '../../component/upload/ImageUpload';
import style from './Category.scss';
import baseStyle from '../../css/Base.scss';
import petCategory from "../../store/petCategory";

class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        http.request({
            url: '/wawi/pet/category/mobile/v1/list',
            data: {},
            success: function (data) {
                console.log(data);
            }.bind(this),
            complete: function () {
            }
        });


        if (this.props.petCategory.categoryList && this.props.petCategory.categoryList.length === 0) {

            // 本地测试静态数据
            this.props.dispatch({
                type: 'petCategory',
                data: {
                    categoryList:[
                        {
                            listItemLeftIcon:"http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80",
                            listItemLeftUrl:"#",
                            listItemCenterName:"猫类"
                        },{
                            listItemLeftIcon:"http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80",
                            listItemLeftUrl:"#",
                            listItemCenterName:"狗类"
                        },{
                            listItemLeftIcon:"http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80",
                            listItemLeftUrl:"#",
                            listItemCenterName:"鸟类"
                        }
                    ]
                }
            });
        }
    }

    componentDidUpdate() {
        util.hancleComponentDidUpdate();
    }

    componentWillUnmount() {

    }

    render() {

        return (
            <div className={style.page}>
                <div className={style.header}>
                    <div className={baseStyle.bottomLine}>宝贝种类</div>
                </div>
                <div className={style.content}>
                   <ul>
                       {
                           this.props.petCategory.categoryList.map((categoryList, index) =>
                               <li key={index} className={baseStyle.bottomLine}>
                                   <div className={style.listItemLeftIcon}>
                                       <img src={categoryList.listItemLeftIcon} alt=''/>
                                   </div>
                                   <div className={style.listItemCenterName}>
                                       <Link to={categoryList.listItemLeftUrl}>
                                           {categoryList.listItemCenterName}
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
