import React from 'react'
import * as fileApi from '../../api/file-api';
export default class FileUploadForm extends React.Component{
	
	constructor() {
		super()
	}

	submit(e){
		e.preventDefault();
		let fd = new FormData(document.getElementById("fileinfo"))
		fileApi.uploadFile(fd);
	}

	validate(){
		$('#bar').css("width", "0" )
		$('#alert').css("display", "none")
	}

	render() {
		return(
			<div class="row">
				<form class ="col-sm-8 col-sm-offset-2" encType="multipart/form-data" id="fileinfo" onSubmit={this.submit}>
					<div class="input-group">
						<input type="file" class="form-control" name="userPhoto" onChange={this.validate}/>
						<span class="input-group-btn">
							<button class="btn btn-primary" type="submit">Upload!</button>
						</span>
					</div>
					
					<div class="progress progress-striped active">
						<div class="progress-bar" id ="bar"></div>
					</div>

					<div class="alert alert-dismissible alert-success" id="alert">
						<strong>Upload successfully</strong>
					</div>
				
				</form>
			</div>
		)
	}
}