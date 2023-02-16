import { configureStore } from "@reduxjs/toolkit";
import {
  calculatorReducer,
  clear,
  digitPressed,
  equalToPressed,
  operatorPressed,
} from "./slices/calculatorSlice";

const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});

export { store };
export { clear, digitPressed, equalToPressed, operatorPressed };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
