import React from 'react';
import {Link} from 'react-router'
import { connect } from 'react-redux';
import PostList from '../views/post-list';
import Pagination from '../views/pagination'
import * as postApi from '../../api/post-api';
import store from '../../store';

class PostListContainer extends React.Component{
	
	constructor(){
		super();
		let check = true
	}

	componentDidMount() {
		console.log("Number: " + this.props.params.number)
		postApi.getPosts(this.props.params.number);
		this.check = true
	}

	componentDidUpdate() {
		if(this.check) {
			postApi.getPosts(this.props.params.number)
			postApi.getNumber()
			this.check = false
		}
		
	}

	trigger(item) {
		postApi.getPosts(item)
	}

	delete(id, post) {
		postApi.deletePost(id, post)
		postApi.getPosts(this.props.params.number)
	}

	render() {
		console.log(this.props.posts)
		return(
			<div>
				<div class ="page-header">
					<h1>Blog Posts</h1>
					<h4>Showing Posts in Page: {this.props.params.number}</h4>
				</div>
				<Link to = "add-post" className="btn btn-primary btn-sm">Add New Post</Link>
				<PostList posts ={this.props.posts} deletePost = {this.delete.bind(this)} show={this.showModal}/>
				<Pagination trigger = {this.trigger} active = {this.props.params.number}/>
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