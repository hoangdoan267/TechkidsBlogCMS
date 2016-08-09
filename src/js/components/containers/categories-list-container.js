import React from 'react';
import {Link} from 'react-router'
import { connect } from 'react-redux';
import CategoryList from '../views/category-list';
import * as categoryApi from '../../api/category-api';
import store from '../../store';

class CategoryListContainer extends React.Component{
	
	constructor(){
		super();
	}

	componentDidMount() {
		categoryApi.getCategories()
	}

	render() {
		return(
			<div>
				<div class ="page-header">
					<h1>Categories</h1>
					<h4>Showing Categories</h4>
				</div>
				<Link to = "add-category" className="btn btn-primary btn-sm">Add New Category</Link>
				<CategoryList categories ={this.props.categories} delete={categoryApi.deleteCat}/>
			</div>
		);
	}


};

const mapStateToProps = function (store) {
	return {
		categories: store.categoryState.categories
	};
} 
export default connect(mapStateToProps)(CategoryListContainer)