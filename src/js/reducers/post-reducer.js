import * as types from "../actions/action-types"
import _ from 'lodash'

const initialState = {
	posts: [],
	post: {},
	page_number: []
}

const postReducer = function(state = initialState, action) {
	switch(action.type) {
		case types.GET_POSTS_SUCCSESS:
			return Object.assign({}, state, { posts: action.posts} )
		case types.DELETE_POST_SUCCESS:
			const newPosts = _.filter(state.posts, post=> post._id != action.id); 
			return Object.assign({}, state, { posts: newPosts})
		case types.GET_POST_BY_ID:
			return Object.assign({}, state, {post: action.post})
		case types.CREATE_POST:
			const newPostList = _.concat(action.post, state.posts)
			return Object.assign({}, state, {posts: newPostList})
		case types.EDIT_POST:
			let index = _.indexOf(state.posts, _.find(action.id))
			const postList = state.posts.splice(index, 1 , action.post)
			return Object.assign({}, state, {posts: postList})
		case types.GET_PAGE_NUMBERS:
			return Object.assign({}, state, {page_number: action.numbers})
	}

	return state
}

export default postReducer