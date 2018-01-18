import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Upload from 'rc-upload';
import Notification from 'rc-notification';

import style from './ImageUpload.scss';
import constant from '../../common/constant';
import storage from '../../common/storage';

let notification = null;
Notification.newInstance({}, (n) => notification = n);
class ImageUpload extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoad: false,
			fileList: []
		}
	}

	componentDidMount() {

	}

	componentWillUnmount() {
		this.handleReset();
	}

	handleGetValue() {
		return this.state.fileList;
	}

	handleSetValue(data) {
		let array = [];
		for (let i = 0; i < data.length; i++) {
			array.push({
				fileId: data[i].fileId,
				filePath: data[i].filePath
			});
		}

		this.setState({
			fileList: array
		});
	}

	handleBeforeUpload = (file, fileList) => {
		if (!(this.props.limit === 0) && this.props.limit < fileList.length + this.state.fileList.length) {
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

		return true;
	};

	handleStart = (file) => {
		this.setState({
			isLoad: true
		})
	};

	handleProgress = (step, file) => {

	};

	handleError = (error, response, file) => {
		this.setState({
			isLoad: false
		});
		notification.notice({
			content: <div dangerouslySetInnerHTML={{__html: `图片上传失败！`}}></div>
		});
	};

	handleSuccess = (result, file) => {
		this.setState({
			isLoad: false
		});
		if (result.code === 200) {
			let file_list = this.state.fileList;
			for (let i = 0; i < result.data.length; i++) {
				file_list.push(result.data[i]);
			}
			this.setState({
				fileList: file_list
			});
			notification.notice({
				content: <div dangerouslySetInnerHTML={{__html: `图片上传成功`}}></div>
			});
		} else {
			notification.notice({
				content: <div dangerouslySetInnerHTML={{__html: result.message}}></div>
			});
		}
	};

	handleReset() {
		this.setState({
			isLoad: false,
			fileList: []
		});
	}

	removeFile(index) {
		let fileList = this.state.fileList;
		fileList.splice(index, 1);
		this.setState({
			fileList: fileList
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
			onStart: this.handleStart,
			onError: this.handleError,
			onSuccess: this.handleSuccess,
			onProgress: this.handleProgress,
			beforeUpload: this.handleBeforeUpload
		};
		return (
			<div className={style.upload}>
				<Upload className={style.uploadIcon} {...props} component="div" style={{display: 'inline-block'}}>
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
	size: 2
};

export default ImageUpload;
