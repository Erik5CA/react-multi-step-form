import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AddOnsState {
  online: boolean;
  storage: boolean;
  profile: boolean;
}

const initialState = [
  {
    title: "Online service",
    subtitle: "Access to multiplayer games",
    price: 1,
    state: false,
  },
  {
    title: "Larger storage",
    subtitle: "Extra 1TB of cloud save",
    price: 2,
    state: false,
  },
  {
    title: "Customizable Profile",
    subtitle: "Custom theme on your profile",
    price: 2,
    state: false,
  },
];

export const addOnsSlice = createSlice({
  name: "addOns",
  initialState,
  reducers: {
    updateAddOns: (state, action: PayloadAction<string>) => {
      const newState = state.map((item) => {
        if (action.payload === item.title) {
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
