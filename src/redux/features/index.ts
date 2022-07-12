import {combineReducers} from '@reduxjs/toolkit';
import counter from './counter-slice';
import {apiSlice} from './dogs-api-slice';

const Reducers = combineReducers({
  counter,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default Reducers;
