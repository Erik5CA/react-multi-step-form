import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from "../slices/personalInfoSlice";
import counterStetpsReducer from "../slices/counterSteps";
import planReducer from "../slices/planSlice";
import addOnsReducer from "../slices/addonsSlice";

export const store = configureStore({
  reducer: {
    counterSteps: counterStetpsReducer,
    personalInfo: personalInfoReducer,
    plan: planReducer,
    addOnds: addOnsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
