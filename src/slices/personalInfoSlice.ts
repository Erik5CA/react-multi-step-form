import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PersonalInfoState {
  name: string;
  email: string;
  phone: string;
}

const initialState: PersonalInfoState = {
  name: "",
  email: "",
  phone: "",
};

export const personalInfo = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<PersonalInfoState>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = personalInfo.actions;

export default personalInfo.reducer;
