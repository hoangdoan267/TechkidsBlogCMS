import * as types from "../actions/action-types"

export function getCategoriesSuccess(categories) {
	return {
		type : types.GET_CATEGORIES_SUCCESS,
		categories
	};
}

export function getCategoryById(category){
	return {
		type: types.GET_CATEGORY_BY_ID,
		category
	}
}

export function createCategorySuccess(category) {
	return {
		type: types.CREATE_CATEGORY,
		category
	}
}

export function editCategorySuccess(id, category) {
	return {
		type: types.EDIT_CATEGORY,
		id,
		category
	}
}

export function deleteCategoryById(id, category) {
	return {
		type: types.DELETE_CATEGORY_SUCCESS,
		category,
		id
	};
}