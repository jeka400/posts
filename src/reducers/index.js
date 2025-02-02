import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form'; 
import authReducer from './authReducer';
import postReducer from './postReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    posts: postReducer
});