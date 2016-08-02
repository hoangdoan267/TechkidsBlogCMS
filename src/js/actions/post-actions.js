import * as types from '../actions/action-types';

export function getPostsSuccess(posts) {
	return {
		type: types.GET_POSTS_SUCCSESS,
    	posts
  	};
}

export function deletePostSuccess(id,post) {
	return {
		type: types.DELETE_POST_SUCCESS,
		post,
		id
	};
}

export function getPostById(post) {
	return {
		type: types.GET_POST_BY_ID,
		post
	}
}

export function createPostSuccess(post) {
	return {
		type: types.CREATE_POST,
		post
	}
}

export function editPostSuccess(id, post) {
	return {
		type: types.EDIT_POST,
		id,
		post
	}
}