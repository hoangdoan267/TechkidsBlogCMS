import axios from 'axios'
import store from '../store'
import { getPostsSuccess, deletePostSuccess, getPostById, createPostSuccess, editPostSuccess } from '../actions/post-actions'

export function getPosts() {
	return axios.get('http://techkids.vn:9196/api/blog/getBlogs')
		.then(res => {
			store.dispatch(getPostsSuccess(res.data))
			return res
		})
		.catch((error) =>{
			console.log(error)
		});
}

export function deletePost(id, post) {
	if(confirm("Are you sure")) {
		return axios.post('http://techkids.vn:9196/api/blog/deleteBlog', post)
			.then(res => {
				store.dispatch(deletePostSuccess(id, post))
				return res
			})
			.catch((err) =>{
				console.log(err)
			});		
	}

}	

export function getPost(id) {
	return axios.get('http://techkids.vn:9196/api/blog/getBlog/' + id )
		.then(res => {
			console.log(res)
			setTimeout(()=>{
				store.dispatch(getPostById(res.data))
			},300)
			
			return res
		}).catch((err) =>{
			console.log(err)
		});
}

export function createPost(post) {
	let output = document.getElementById('notification')
	return axios.post('http://techkids.vn:9196/api/blog/postBlog', post)
		.then(res => { 
			store.dispatch(createPostSuccess(post))
			output.className = 'alert alert-dismissible alert-success';
            output.innerHTML = 'Post Successfully';
			return res
		}).catch((err) =>{
			output.className = 'alert alert-dismissible alert-danger';
            output.innerHTML = err;
			console.log(err)
		})
}

export function editPost(id, post) {
	let output = document.getElementById('notification')
	return axios.post('http://techkids.vn:9196/api/blog/editBlog', post)
			.then(res=> {
				store.dispatch(editPostSuccess(id, post))
				output.className = 'alert alert-dismissible alert-success';
	            output.innerHTML = 'Edited Successfully';
				return res
			}).catch((err)=> {
				output.className = 'alert alert-dismissible alert-danger';
	            output.innerHTML = err;
				console.log(err)
			})
}

