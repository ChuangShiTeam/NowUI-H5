import  React, {Component} from 'react';
import util from '../../common/util';
import {Link} from 'react-router';
import  style from './Pet.scss';
import baseStyle from '../../css/Base.scss';
import classNames from 'classnames';


class Pet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isload: false,
            myPetList: [1, 2]
        }
    }

    componentDidMount() {
        util.setTitle('wawipet哇咿宠');

    }

    componentWillUnmount() {

    }
    render(){
        return(
            <div   className={classNames(baseStyle.page,style.page)} style={{minHeight: document.documentElement.clientHeight}}>
                    <div className={style.header}>
                        <span>我的爱宠</span>
                        <Link to={"/my/addpet"} className={style.headerImg}>
                            <img  src={require('../../image/forum-add.png')} alt=""/>
                        </Link>

                    </div>
                <div className={style.content}>
                    {
                        this.state.myPetList.map(()=>
                                <div className={style.contentList}>
                                    <div  className={classNames(style.contentListTop,baseStyle.bottomLine)}>
                                        <div className={style.topLeft}>
                                            <img  className={style.petPhoto} src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/60/h/60" alt=""/>
                                            <span className={style.petInfo}>
                                                <div className={style.petName}>辛巴</div>
                                                <div className={style.petSex}>弟弟</div>
                                            </span>
                                        </div>
                                        <div className={style.petBirthday}>
                                            <div  className={style.petBirthdayFont}> 宠物生日</div>
                                            <div className={style.petBirthdayTimes}>2010.6.06</div>
                                        </div>
                                    </div>
                                    <div  className={style.contentListBottom}>
                                        <span className={style.petKindFont}>宠物品种</span>
                                        <span className={style.petKind}>柴犬</span>
                                    </div>
                                </div>
                        )
                    }
                </div>

            </div>
        )
    }
}
export default Pet;