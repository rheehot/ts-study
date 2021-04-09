import {ActionType, createAction, createReducer} from 'typesafe-actions';

export const increase = createAction('counter/INCREASE')();
export const decrease = createAction('counter/DECREASE')();
export const addDiff = createAction('counter/ADD_DIFF')<number>();

type CounterStateType = {count: number};
const initialstate: CounterStateType = {count: 0};

const actions = {increase, decrease, addDiff};
type CounterActionType = ActionType<typeof actions>;

const counter = createReducer<CounterStateType, CounterActionType>(initialstate)
  .handleAction(increase, state => ({count: state.count + 1}))
  .handleAction(decrease, state => ({count: state.count - 1}))
  .handleAction(addDiff, (state, action) => ({
    count: state.count + action.payload,
  }));

export default counter;
