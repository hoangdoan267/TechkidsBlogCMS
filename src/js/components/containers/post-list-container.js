import React from 'react';
import {Link} from 'react-router'
import { connect } from 'react-redux';
import PostList from '../views/post-list';
import * as postApi from '../../api/post-api';
import store from '../../store';

class PostListContainer extends React.Component{
	
	constructor(){
		super();
		let check = true
	}

	componentDidMount() {
		postApi.getPosts();
		this.check = true
	}

	componentDidUpdate() {
		if(this.check) {
			postApi.getPosts()
			this.check = false
		}
		
	}

	render() {
		return(
			<div>
				<div class ="page-header">
					<h1>Blog Posts</h1>
					<h4>Showing Posts</h4>
				</div>
				<Link to = "add-post" className="btn btn-primary btn-sm">Add New Post</Link>
				<PostList posts ={this.props.posts} deletePost = {postApi.deletePost} show={this.showModal}/>
			</div>
		);
	}


};

const mapStateToProps = function (store) {
	return {
		posts: store.postState.posts
	};
} 
export default connect(mapStateToProps)(PostListContainer)