import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState {
  display: string | null;
  operator: string | null;
  value: number;
  history: string[];
}

const initialState: CalculatorState = {
  display: null,
  operator: null,
  value: 0,
  history: [],
};

const operators = ["+", "–", "×", "÷"];

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    clear: (state) => {
      state.display = null;
      state.operator = null;
      state.value = 0;
      state.history = [];
    },

    digitPressed: (state, action: PayloadAction<string>) => {
      if (
        state.display &&
        !operators.includes(state.history[state.history.length - 1])
      ) {
        state.display += action.payload;
        state.history.push(state.history.pop() + action.payload);
      } else {
        state.display = action.payload;
        state.history.push(action.payload);
      }
    },

    equalToPressed: (state) => {
      if (state.display && state.operator) {
        state.display = calculate(
          parseInt(state.display),
          state.value,
          state.operator
        ).toString();
        state.operator = null;
        state.history.push(state.value.toString());
      }
    },

    operatorPressed: (state, action: PayloadAction<string>) => {
      if (
        state.display &&
        !operators.includes(state.history[state.history.length - 1])
      ) {
        state.operator = action.payload;
        state.value = calculate(
          parseInt(state.display),
          state.value,
          action.payload
        );
        state.display = state.value.toString();
        state.history.push(action.payload);
      }
    },
  },
});

const calculate = (
  firstOperand: number,
  secondOperand: number,
  operator: string
): number => {
  switch (operator) {
    case "+":
      return firstOperand + secondOperand;
    case "–":
      return firstOperand - secondOperand;
    case "×":
      return firstOperand * secondOperand;
    case "÷":
      return firstOperand / secondOperand;
    default:
      return 0;
  }
};

export const { clear, digitPressed, equalToPressed, operatorPressed } =
  calculatorSlice.actions;
export const calculatorReducer = calculatorSlice.reducer;
