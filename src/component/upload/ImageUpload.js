import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Upload from 'rc-upload';
import Notification from 'rc-notification';

import constant from '../../common/constant';
import storage from '../../common/storage';
import http from "../../common/http";

import style from './ImageUpload.scss';

let notification = null;
Notification.newInstance({}, (n) => notification = n);

class ImageUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoad: false,
            value: [{
                "fileName":"e84a3444c4504229a1da1d968a6532ac.jpeg",
                "filePath":"/upload/df2078d6c9eb46babb0df957127273ab/14463951d1d94d39a9216dbd818fc984/e84a3444c4504229a1da1d968a6532ac.jpeg",
                "fileId":"b738a4a3f1cd4eadb9fd30e0775f56e5"
            },{
                "fileName":"e84a3444c4504229a1da1d968a6532ac.jpeg",
                "filePath":"/upload/df2078d6c9eb46babb0df957127273ab/14463951d1d94d39a9216dbd818fc984/e84a3444c4504229a1da1d968a6532ac.jpeg",
                "fileId":"b738a4a3f1cd4eadb9fd30e0775f56e5"
            },{
                "fileName":"e84a3444c4504229a1da1d968a6532ac.jpeg",
                "filePath":"/upload/df2078d6c9eb46babb0df957127273ab/14463951d1d94d39a9216dbd818fc984/e84a3444c4504229a1da1d968a6532ac.jpeg",
                "fileId":"b738a4a3f1cd4eadb9fd30e0775f56e5"
            },{
                "fileName":"e84a3444c4504229a1da1d968a6532ac.jpeg",
                "filePath":"/upload/df2078d6c9eb46babb0df957127273ab/14463951d1d94d39a9216dbd818fc984/e84a3444c4504229a1da1d968a6532ac.jpeg",
                "fileId":"b738a4a3f1cd4eadb9fd30e0775f56e5"
            },{
                "fileName":"e84a3444c4504229a1da1d968a6532ac.jpeg",
                "filePath":"/upload/df2078d6c9eb46babb0df957127273ab/14463951d1d94d39a9216dbd818fc984/e84a3444c4504229a1da1d968a6532ac.jpeg",
                "fileId":"b738a4a3f1cd4eadb9fd30e0775f56e5"
            },{
                "fileName":"e84a3444c4504229a1da1d968a6532ac.jpeg",
                "filePath":"/upload/df2078d6c9eb46babb0df957127273ab/14463951d1d94d39a9216dbd818fc984/e84a3444c4504229a1da1d968a6532ac.jpeg",
                "fileId":"b738a4a3f1cd4eadb9fd30e0775f56e5"
            },{
                "fileName":"e84a3444c4504229a1da1d968a6532ac.jpeg",
                "filePath":"/upload/df2078d6c9eb46babb0df957127273ab/14463951d1d94d39a9216dbd818fc984/e84a3444c4504229a1da1d968a6532ac.jpeg",
                "fileId":"b738a4a3f1cd4eadb9fd30e0775f56e5"
            },{
                "fileName":"e84a3444c4504229a1da1d968a6532ac.jpeg",
                "filePath":"/upload/df2078d6c9eb46babb0df957127273ab/14463951d1d94d39a9216dbd818fc984/e84a3444c4504229a1da1d968a6532ac.jpeg",
                "fileId":"b738a4a3f1cd4eadb9fd30e0775f56e5"
            }]
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleBeforeUpload(file, value) {
        if (!(this.props.limit === 0) && this.props.limit < value.length + this.state.value.length) {
            notification.notice({
                content: <div dangerouslySetInnerHTML={{__html: `图片上传数量限制为${this.props.limit}张！`}}></div>
            });
            return false;
        }
        if (this.props.type.indexOf(file.type) === -1) {
            notification.notice({
                content: <div dangerouslySetInnerHTML={{__html: `图片格式不对`}}></div>
            });
            return false;
        }
        if (this.props.size === -1) {
            return true;
        }
        if (file.size > 1024 * 1024 * this.props.size) {
            notification.notice({
                content: <div dangerouslySetInnerHTML={{__html: `图片大小不能超过${this.props.size}M！`}}></div>
            });

            return false;
        }

        new window.html5ImgCompress(file, {
            before: function (originalFile) {


            },
            done: function (originalFile, base64Data) {
                http.request({
                    url: '/file/mobile/v1/base64/upload',
                    data: {
                        base64Data: base64Data
                    },
                    success: function (data) {
                        let fileList = this.state.value;
                        fileList.push(data);
                        this.setState({
                            value: fileList
                        });
                    }.bind(this),
                    complete: function () {

                    }
                });

                return false;
            }.bind(this),
            fail: function (originalFile) {

            },
            complete: function (originalFile) {

            },
            notSupport: function (originalFile) {

            }
        });

        return false;
    };

    handleStart(file) {
        this.setState({
            isLoad: true
        })
    };

    handleProgress(step, file) {

    };

    handleError(error, response, file) {
        this.setState({
            isLoad: false
        });
        notification.notice({
            content: <div dangerouslySetInnerHTML={{__html: `图片上传失败！`}}></div>
        });
    };

    handleSuccess(result, file) {
        this.setState({
            isLoad: false
        });
        if (result.code === 200) {
            let fileList = this.state.value;
            for (let i = 0; i < result.data.length; i++) {
                fileList.push(result.data[i]);
            }
            this.setState({
                value: fileList
            }, function () {
                const onChange = this.props.onChange;
                if (onChange) {
                    let value = [];
                    for (let i = 0; i < fileList.length; i++) {
                        value.push({
                            fileId: fileList[i].fileId,
                            filePath: fileList[i].filePath
                        })
                    }
                    onChange(value);
                }
            }.bind(this));

            notification.notice({
                content: <div dangerouslySetInnerHTML={{__html: `图片上传成功`}}></div>
            });
        } else {
            notification.notice({
                content: <div dangerouslySetInnerHTML={{__html: result.message}}></div>
            });
        }
    };

    handleDelete(index) {
        let value = this.state.value;
        value.splice(index, 1);
        this.setState({
            value: value
        })
    }

    render() {
        const props = {
            name: 'file',
            multiple: true,
            action: constant.host + '/file/mobile/v1/image/upload',
            accept: this.props.type,
            data: {
                'appId': constant.appId,
                'token': storage.getToken(),
                'platform': constant.platform,
                'version': constant.version
            },
            onStart: this.handleStart.bind(this),
            onError: this.handleError.bind(this),
            onSuccess: this.handleSuccess.bind(this),
            onProgress: this.handleProgress.bind(this),
            beforeUpload: this.handleBeforeUpload.bind(this)
        };

        return (
            <div className={style.page}>
                {
                    this.state.value.map(function (image, index) {
                        return (
                            <div key={index} className={style.item}>
                                <div className={style.close} onClick={this.handleDelete.bind(this, index)}>
                                    <img className={style.closeIcon} src={require('../../image/upload-close.png')}
                                         alt=''/>
                                </div>
                                <div className={style.image}
                                     style={{backgroundImage: 'url(' + constant.image_host + image.filePath + ')'}}></div>
                            </div>
                        )
                    }.bind(this))
                }
                <Upload className={style.upload} {...props} component="div" style={{display: 'inline-block'}}>
                    <img src={require('../../image/upload.png')} alt=''/>
                </Upload>
            </div>
        );
    }
}

ImageUpload.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    size: PropTypes.number,
    limit: PropTypes.number
};

ImageUpload.defaultProps = {
    type: 'image/jpg,image/jpeg,image/png',
    limit: 0,
    size: 4
};

export default ImageUpload;
