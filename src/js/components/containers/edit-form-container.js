import React from 'react';
import { connect } from 'react-redux';
import EditForm from '../views/edit-form';
import * as postApi from '../../api/post-api';
import store from '../../store';

class EditFormContainer extends React.Component{
	
	constructor(props){
		super(props);
	}

	componentDidMount() {
		let id = this.props.params.id
		postApi.getPost(id)
		
	}

	submitForm(form){
		postApi.editPost(form._id, form)
	}

	render() {
		console.log(this.props)
		return(
			<div>
				<div class ="page-header">
					<h1>Edit Post</h1>
				</div>
				<EditForm {...this.props.post} submit={this.submitForm} />
			</div>
		);
	}
};

const mapStateToProps = function (store) {
	return {
		post: store.postState.post
	};
} 

export default connect(mapStateToProps)(EditFormContainer)
