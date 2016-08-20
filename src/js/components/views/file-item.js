import React from 'react'

export default class FileItem extends React.Component{
	constructor() {
		super()
	}

	insert() {
		let url = 'http://' + this.props.item.url
		$('#imageurl').val(url)
		this.props.changeImage()
		$('#myModal').modal('hide')
	}

	copy(e) {
		$(e.target).closest('.input-group').find('.form-control').select();
		document.execCommand('copy');
	}

	render () {
		let url = 'http://' + this.props.item.url
		let embed = '![Techkids](http://' + this.props.item.url + ')'
		return (
			<div class="col-sm-6 col-md-4 file-item">
				<div class="thumbnail">
				<img src={url} alt="..."/>
					<div class="caption">
						<p><button class="btn btn-primary" role="button" onClick={this.insert.bind(this)}>Set Thumbnail</button></p>
						<div class ="form-group">
							<label>Use in post: </label>
							<div class="input-group">
								<input type ="text" class="form-control" value={embed} readOnly />
							    <span class="input-group-btn">
							    	<button class="btn btn-default" type="button" onClick={this.copy}>Copy</button>
							    </span>
							</div>
							
							
						</div>
	
					</div>
				</div>
			</div>	
		)
	
	}
}