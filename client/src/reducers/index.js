import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import some from './some_reducer';

const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;
