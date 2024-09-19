import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { addOns, AddOnTypes } from "../steps";

export interface AddOnsState {
  online: boolean;
  storage: boolean;
  profile: boolean;
}

export const addOnsSlice = createSlice({
  name: "addOns",
  initialState: addOns,
  reducers: {
    updateAddOns: (state, action: PayloadAction<AddOnTypes>) => {
      const newState = state.map((item) => {
        if (action.payload === item.type) {
          return { ...item, state: !item.state };
        } else {
          return item;
        }
      });
      return newState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateAddOns } = addOnsSlice.actions;

export default addOnsSlice.reducer;
