import React from 'react'
import { Link } from 'react-router';
import UtilsConfirmModal from './utils-confirm-modal'
export default class PostItem extends React.Component{
	constructor() {
		super()
	}

	showModal() {
		let postId = this.props.post._id
		$('#' + postId).modal('show')
	}

	render() {
		return (
			<tr className="data-list-item">
              <td>{this.props.order}</td>
              <td className="details">
                {this.props.post.title}
              </td>
              <td></td>
              <td>{this.props.post.date}</td>
              <td>
                <Link to = {`/edit-post/${this.props.post._id}`}  className="btn btn-primary btn-sm">Edit</Link>
                <Link to = {`/post/${this.props.post._id}`}  className="btn btn-success btn-sm">View</Link>
                <UtilsConfirmModal id={this.props.post._id}  confirm = {this.props.delete}/>
				<button class="btn btn-danger btn-sm" onClick={this.showModal.bind(this)}>Delete</button>
            </td>
            </tr>
		)
	}
}