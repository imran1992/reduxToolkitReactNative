// DUCKS pattern
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: state => {
      // it's okay to do this because immer makes it immutable
      // under the hood
      state.value++;
    },
    amountAdded: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    amountDecreased: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    resetIt: () => initialState,
    // decrement
    // reset
  },
});

export const {incremented, amountAdded, resetIt, amountDecreased} =
  counterSlice.actions;
export default counterSlice.reducer;
