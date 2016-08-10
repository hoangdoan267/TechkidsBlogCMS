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
						<FileItem />
						<FileItem />
						<FileItem />
						<FileItem />
						<FileItem />
						<FileItem />
					</div>
				</div>
			</div>
		)
	}
}