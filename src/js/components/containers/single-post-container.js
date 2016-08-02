import React from 'react';
import { connect } from 'react-redux';
import SinglePost from '../views/single-post';
import * as postApi from '../../api/post-api';
import store from '../../store';

class SinglePostContainer extends React.Component{
	
	constructor(){
		super();
	}

	componentDidMount() {
		let id = this.props.params.id
		postApi.getPost(id)
	}

	render() {
		console.log(this.props.post)
		return(
			<div>
				<div class ="page-header">
					<h1>Blog Posts</h1>
					<h4>Showing Posts</h4>
				</div>
				<SinglePost {...this.props.post} />
			</div>
		);
	}


};

const mapStateToProps = function (store) {
	return {
		post: store.postState.post
	};
} 
export default connect(mapStateToProps)(SinglePostContainer)