import React from 'react';
import { connect } from 'react-redux';
import EditCategoryForm from '../views/category-edit-form';
import * as categoryApi from '../../api/category-api';
import store from '../../store';

class CategoryEditFormContainer extends React.Component{
	
	constructor(props){
		super(props);
	}

	componentDidMount() {
		let id = this.props.params.id
		categoryApi.getCategory(id)
		
	}

	submitForm(form){
		categoryApi.editCategory(form._id, form)
	}

	render() {
		console.log(this.props)
		return(
			<div>
				<div class ="page-header">
					<h1>Edit Post</h1>
				</div>
				<EditCategoryForm {...this.props.category} submit={this.submitForm} />
			</div>
		);
	}
};

const mapStateToProps = function (store) {
	return {
		category: store.categoryState.category
	};
} 

export default connect(mapStateToProps)(CategoryEditFormContainer)
