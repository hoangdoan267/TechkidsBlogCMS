import * as types from "../actions/action-types"
import _ from 'lodash'

const initialState = {
	files: [],
	file: {}
}

const fileReducer = function(state = initialState, action) {
	switch(action.type) {
		case types.GET_ALL_FILES:
			return Object.assign({}, state, { files: action.files} )
		case types.UPLOAD_FILE:
			const newPostList = _.concat(state.files, action.file)
			return Object.assign({}, state, {files: newPostList})
	}

	return state
}

export default fileReducer