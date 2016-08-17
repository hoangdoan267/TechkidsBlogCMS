import React from 'react'
import FileItem from "./file-item"
export default class FileList extends React.Component{
	constructor() {
		super()
	}

	render() {
		return(
			<div class = "jumbotron">
				<div class="container">
					<div class="row">
						{this.props.files.map(item=>{
							return <FileItem key={item._id} item = {item} changeImage={this.props.changeImage.bind(this)}/>
						})}
					</div>
				</div>
			</div>
		)
	}
}