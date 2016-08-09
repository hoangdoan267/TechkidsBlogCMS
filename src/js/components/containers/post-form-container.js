import React from 'react';
import { connect } from 'react-redux';
import PostForm from '../views/post-form';
import * as postApi from '../../api/post-api';
import store from '../../store';

class PostFormContainer extends React.Component{
	
	constructor(){
		super();
	}

	submitForm(form){
		postApi.createPost(form);	
	}

	render() {
		return(
			<div>
				<div class ="page-header">
					<h1>Add New Post</h1>
				</div>

				<PostForm submit = {this.submitForm} {...this.props.post}/>
			</div>
		);
	}
};

const mapStateToProps = function (store) {
	return {
		post: store.postState.post
	};
} 

export default connect(mapStateToProps)(PostFormContainer)
