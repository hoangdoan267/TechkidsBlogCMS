import React from 'react';
import { connect } from 'react-redux';
import PostList from '../views/post-list';
import * as postApi from '../../api/post-api';
import store from '../../store';

class PostListContainer extends React.Component{
	
	constructor(){
		super();
	}

	componentDidMount() {
		postApi.getPosts();
	}

	render() {
		return(
			<div>
				<div class ="page-header">
					<h1>Blog Posts</h1>
					<h4>Showing Posts</h4>
				</div>
				<PostList posts ={this.props.posts} deletePost = {postApi.deletePost}/>
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