import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';
import postReducer from './post-reducer'
import categoryReducer from './category-reducer'
let reducers = combineReducers({
	postState: postReducer,
	categoryState: categoryReducer
});

export default reducers