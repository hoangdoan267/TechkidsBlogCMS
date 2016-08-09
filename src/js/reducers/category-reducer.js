import * as types from "../actions/action-types"
import _ from 'lodash'

const initialState = {
	categories: [],
	category: {}
}

const categoryReducer = function(state = initialState, action) {
	switch(action.type) {
		case types.GET_CATEGORIES_SUCCESS:
			return Object.assign({}, state, { categories: action.categories })
		case types.DELETE_CATEGORY_SUCCESS:
			const newCat = _.filter(state.categories, cat=> cat._id != action.id); 
			return Object.assign({}, state, { categories: newCat})
		case types.GET_CATEGORY_BY_ID:
			return Object.assign({}, state, {category: action.category})
		case types.CREATE_CATEGORY:
			const newCatList = _.concat(state.categories, action.category)
			return Object.assign({}, state, {categories: newCatList})
		case types.EDIT_CATEGORY:
			let index = _.indexOf(state.categories, _.find(action.id))
			const postList = state.categories.splice(index, 1 , action.category)
			return Object.assign({}, state, {categories: postList})
	}
	return state
}

export default categoryReducer