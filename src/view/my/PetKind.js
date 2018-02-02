
import  React, {Component} from 'react';
import util from '../../common/util';
import  style from './PetKind.scss';
import baseStyle from '../../css/Base.scss';
import {createForm} from "rc-form";
import classNames from 'classnames';
import Notification from 'rc-notification';


let notification = null;
Notification.newInstance({}, (n) => notification = n);
class PetKind extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isload: false,
            petKindList:[1,2]
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');
        util.hancleComponentDidMount();

        this.state.forum = this.props.location.state.forum;

    }

    componentWillUnmount() {

    }
    render(){

        return(
            <div   className={classNames(baseStyle.page,style.page)} style={{minHeight: document.documentElement.clientHeight}}>
                <div className={classNames(baseStyle.bottomLine,style.header)}>我的爱宠</div>
                <div className={style.content}>
                    {
                        this.state.petKindList.map(()=>
                        <div className={classNames(style.contentList,baseStyle.bottomLine)}>
                           <div className={style.contentListLeft}>
                               <img className={style.contentListLeftIcon} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/60/h/60" alt=""/>
                               <span>犬类</span>
                           </div>
                            <div className={style.contentListRight}></div>
                        </div>
                        )
                    }
                </div>
                
            </div>
        )
    }
}

export default PetKind;