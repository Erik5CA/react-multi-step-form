import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterStepsState {
  step: number;
}

const initialState: CounterStepsState = {
  step: 0,
};

export const counterStepsSlice = createSlice({
  name: "counterSteps",
  initialState,
  reducers: {
    increment: (state) => {
      state.step = state.step + 1;
    },
    decrement: (state) => {
      state.step = state.step - 1;
    },
    goToStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, goToStep } = counterStepsSlice.actions;

export default counterStepsSlice.reducer;
