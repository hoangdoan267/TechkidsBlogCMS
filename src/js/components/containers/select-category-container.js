import React from 'react';
import { connect } from 'react-redux';
import OptionCategoryList from '../views/option-category';
import * as categoryApi from '../../api/category-api';
import store from '../../store';

class CategorySelect extends React.Component {

	constructor() {
		super()
	}

	componentDidMount() {
		categoryApi.getCategories()
	}

	render() {
		return (
              <div class="form-group">
                <label for="CompanyName" class="col-lg-2 control-label">Category</label>
	                <div class="col-lg-8">
						<OptionCategoryList categories = { this.props.categories} select= {this.props.select} default= {this.props.default}/>
	                </div>
              </div>
		)
	}

} 

const mapStateToProps = function (store) {
	return {
		categories: store.categoryState.categories
	};
} 
export default connect(mapStateToProps)(CategorySelect)
