import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form';
import postReducer from './post-reducer'
let reducers = combineReducers({
	postState: postReducer,
	form: formReducer
});

export default reducers