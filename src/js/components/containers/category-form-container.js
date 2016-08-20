import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from '../views/category-form';
import * as categoryApi from '../../api/category-api';
import store from '../../store';
import {Link, withRouter, browserHistory} from "react-router";


class CategoryFormContainer extends React.Component{
	
	constructor(){
		super();
	}

	submitForm(form){
		categoryApi.createCategory(form);
		this.props.history.pushState(null, '/categories');		
	}

	render() {
		return(
			<div>
				<div class ="page-header">
					<h1>Add New Category</h1>
				</div>

				<CategoryForm submit = {this.submitForm.bind(this)} {...this.props.category}/>
			</div>
		);
	}
};

const mapStateToProps = function (store) {
	return {
		category: store.categoryState.category
	};
} 

export default connect(mapStateToProps)(CategoryFormContainer)
