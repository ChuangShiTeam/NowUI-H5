import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {HelpBlock, Button, Alert} from 'react-bootstrap';
import Upload from 'rc-upload';

import constant from '../../common/constant';
import storage from '../../common/storage';

class FileUpload extends Component {
	constructor(props) {
		super(props);

		this.state = {
			is_load: false,
			fileList: [],
			message: {
				is_show_message: false,
				content: '',
				status: ''
			}
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
				file_id: data[i].file_id,
				file_name: data[i].file_name,
				file_path: data[i].file_path
			});
		}

		this.setState({
			fileList: array
		});
	}

	handleBeforeUpload = (file, fileList) => {
		if (!(this.props.limit === 0) && this.props.limit < fileList.length + this.state.fileList.length) {
			this.setState({
				message: {
					content: `文件上传数量限制为${this.props.limit}个！`,
					status: 'danger',
					is_show_message: true
				}
			});
			return false;
		}
		if (this.props.type.indexOf(file.type) === -1) {
			this.setState({
				message: {
					content: `文件格式不对`,
					status: 'danger',
					is_show_message: true
				}
			});
			return false;
		}
		if (this.props.size === -1) {
            return true;
		}
		if (file.size > 1024 * 1024 * this.props.size) {
			this.setState({
				message: {
					content: `文件大小超过${this.props.size}M！`,
					status: 'danger',
					is_show_message: true
				}
			});

			return false;
		}

		return true;
	};

	handleStart = (file) => {
		this.setState({
			is_load: true
		})
	};

	handleProgress = (step, file) => {

	};

	handleError = (error, response, file) => {
		this.setState({
			is_load: false
		});
		this.setState({
			message: {
				content: file.name + ' 文件上传失败！',
				status: 'danger',
				is_show_message: true
			}
		});
	};

	handleSuccess = (result, file) => {
		this.setState({
			is_load: false
		});
		if (result.code === 200) {
			let file_list = this.state.fileList;
			for (let i = 0; i < result.data.length; i++) {
				file_list.push(result.data[i]);
			}
			this.setState({
				fileList: file_list,
				message: {
					content: '上传成功',
					status: 'success',
					is_show_message: true
				}
			})
		} else {
			this.setState({
				message: {
					content: result.message,
					status: 'danger',
					is_show_message: true
				}
			});
		}
	};

	handleReset() {
		this.setState({
			is_load: false,
			fileList: [],
			message: {
				is_show_message: false,
				content: '',
				status: ''
			}
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
			action: constant.host + '/desktop/file/app/upload',
			accept: this.props.type,
			headers: {
				'app_id': constant.app_id,
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
			<div>
				<Upload {...props}>
					<Button disabled={this.state.is_load}>
						{this.state.is_load ? '上传中...' : <span>上传{this.props.size === -1?null:`(文件大小不超过${this.props.size}M)`}</span>}
					</Button>
				</Upload>
				<HelpBlock>
				{
					this.state.fileList.length > 0 ?this.state.fileList.map((file, index) => {
						return(
							<div key={index}>
								<a href={constant.host + file.file_path} style={{color: '#49a9ee'}}>{file.file_name}</a>
								<a style={{marginLeft: '50px'}} onClick={this.removeFile.bind(this, index)}>删除</a>
							</div>
						)
					}) : null
				}
				{
					this.state.message.is_show_message?
						<Alert bsStyle={this.state.message.status}>
							<strong>{this.state.message.content}</strong>
						</Alert>
						:
						null
				}
				</HelpBlock>
			</div>
		);
	}
}

FileUpload.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	size: PropTypes.number,
	limit: PropTypes.number
};

FileUpload.defaultProps = {
	type: '',
	limit: 0,
	size: 2
};

export default FileUpload;
