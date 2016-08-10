import React from 'react';
import FileUploadForm from '../views/file-upload-form';
import FileList from '../views/file-list';
export default class FileMangerContainer extends React.Component{
	
	constructor() {
		super()
	}


	render() {
		return(
			<div>
				<div class ="page-header">
					<h1>Files Manager</h1>
					<h4>Showing files</h4>
				</div>
				<FileUploadForm />
				<FileList/>
			</div>
		);
	}

}