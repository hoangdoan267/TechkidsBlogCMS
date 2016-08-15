import React from 'react';
import FileUploadForm from '../views/file-upload-form';
import FileList from '../views/file-list';
import { connect } from 'react-redux';
import * as fileApi from '../../api/file-api';
export default class FileMangerContainer extends React.Component{
	
	constructor() {
		super()
	}

	componentDidMount() {
		fileApi.getFiles();
	}


	render() {
		return(
			<div>
				<div class ="page-header">
					<h1>Files Manager</h1>
					<h4>Showing files</h4>
				</div>
				<FileUploadForm />
				<FileList files = {this.props.files}/>
			</div>
		);
	}

}

const mapStateToProps = function (store) {
	return {
		files: store.fileState.files
	};
} 
export default connect(mapStateToProps)(FileMangerContainer)