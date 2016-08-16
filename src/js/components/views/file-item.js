import React from 'react'

export default class FileItem extends React.Component{
	constructor() {
		super()
	}

	render () {
		let url = 'http://' + this.props.item.url
		let embed = '![Techkids](http://' + this.props.item.url + ')'
		return (
			<div class="col-sm-6 col-md-4">
				<div class="thumbnail">
				<img src={url} alt="..."/>
					<div class="caption">
						<form>
							<div class = "form-group">
								<label>Image URL</label>
								<input type ="text" class="form-control" value={url} readOnly/>
							</div>
							<div class ="form-group">
								<label>Embed URL</label>
								<input type ="text" class="form-control" value={embed} readOnly />
							</div>
						</form>    	
					</div>
				</div>
			</div>	
		)
	
	}
}