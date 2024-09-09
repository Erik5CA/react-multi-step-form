import { createSlice } from "@reduxjs/toolkit";
import { Periods, PlanTypes } from "../steps";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PlanState {
  plan: PlanTypes;
  period: Periods;
}

const initialState: PlanState = {
  plan: PlanTypes.arcade,
  period: Periods.monthly,
};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    updatePlan: (state, action: PayloadAction<PlanTypes>) => {
      state.plan = action.payload;
    },
    updatePeriod: (state) => {
      state.period =
        state.period === Periods.monthly ? Periods.yearly : Periods.monthly;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updatePlan, updatePeriod } = planSlice.actions;

export default planSlice.reducer;
