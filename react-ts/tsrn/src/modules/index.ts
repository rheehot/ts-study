import {combineReducers} from 'redux';
import github from './github';
import counter from './Counter/counter';

const rootReducer = combineReducers({
  github,
  counter,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
