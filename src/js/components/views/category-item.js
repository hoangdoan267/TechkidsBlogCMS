import React from 'react'
import { Link } from 'react-router';
import UtilsConfirmModal from './utils-confirm-modal'
export default class CategoryItem extends React.Component{
	constructor() {
		super()
	}

	showModal() {
		let categoryId = this.props.category._id
		$('#' + categoryId).modal('show')
	}

	render() {
		return (
			<tr className="data-list-item">
              <td>{this.props.order}</td>
              <td className="details">
                {this.props.category.title}
              </td>
              <td>{this.props.category.description}</td>
              <td>
                <Link to = {`/edit-category/${this.props.category._id}`}  className="btn btn-primary btn-sm">Edit</Link>
                <UtilsConfirmModal id={this.props.category._id}  confirm = {this.props.delete}/>
				<button class="btn btn-danger btn-sm" onClick={this.showModal.bind(this)}>Delete</button>
            </td>
            </tr>
		)
	}
}