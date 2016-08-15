import * as types from "../actions/action-types"

export function uploadFileSuccess(file) {
	return {
		type: types.UPLOAD_FILE,
		file
	}
}

export function getAllFiles(files) {
	return {
		type: types.GET_ALL_FILES,
		files
	}
}