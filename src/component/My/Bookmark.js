
import React,{Component} from 'react';

import  style from './Whole.scss';
class BookMarkIndex extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    componentDidMount() {

    }

    componentWillUnmount() {

    }
    render(){
        return(
            <div className={style.listContent}>
                <div className={style.listLeft}>
                    <div className={style.mengBan}>
                        <img src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/68/h/68" alt=""/>
                        {
                            true?
                                <div className={style.mask}>
                                    <div>文章</div>
                                </div>
                                :""
                        }

                    </div>
                    <div className={style.listCenter}>
                        <div className={style.tittles}> 为工作而生的汪星人拉布...</div>
                        <span className={style.content}>拉布拉多寻回猎犬并不像它的名字那样…</span>
                        <div className={style.times}>
                            <div>收藏于:2018-1-10 16.:44</div>
                        </div>
                    </div>
                </div>
                <div className={style.listRight}>
                    <div>
                        <img src={require("../../image/star.png")} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}
export    default  BookMarkIndex;