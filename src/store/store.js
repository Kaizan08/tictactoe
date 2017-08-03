import {combineReducers, createStore} from 'redux';
import tictacReducer from "../reducers/tictacReducer";

let reducers = combineReducers({
    board: tictacReducer
})

let store = createStore(reducers);
export default store;