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

	render () {
		let url = 'http://' + this.props.item.url
		let embed = '![Techkids](http://' + this.props.item.url + ')'
		return (
			<div class="col-sm-6 col-md-4 file-item">
				<div class="thumbnail">
				<img src={url} alt="..."/>
					<div class="caption">
						<p><button class="btn btn-primary" role="button" onClick={this.insert.bind(this)}>Set Thumbnail</button></p>
						<p><a href="#" class="btn btn-default" role="button">Button</a></p>
						<div class ="form-group">
							<label>Embed URL</label>
							<input type ="text" class="form-control" value={embed} readOnly />
						</div>
	
					</div>
				</div>
			</div>	
		)
	
	}
}