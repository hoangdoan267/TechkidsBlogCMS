import React from 'react'

export default class FileUploadForm extends React.Component{
	
	constructor() {
		super()
	}

	submit(){
		console.log("aaa")
	}

	render() {
		return(
			<div class="row">
				<form class ="col-sm-4" onSubmit={this.submit}>
					<div class="input-group">
						<input type="file" class="form-control"/>
						<span class="input-group-btn">
							<button class="btn btn-primary" type="submit">Upload!</button>
						</span>
					</div>
				</form>
			</div>
		)
	}
}