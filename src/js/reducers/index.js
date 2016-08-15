import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';
import postReducer from './post-reducer'
import categoryReducer from './category-reducer'
import fileReducer from './file-reducer'
let reducers = combineReducers({
	postState: postReducer,
	categoryState: categoryReducer,
	fileState: fileReducer
});

export default reducers