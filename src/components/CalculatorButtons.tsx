import { useAppDispatch } from "../hooks";
import {
  clear,
  digitPressed,
  operatorPressed,
  equalToPressed,
  store,
} from "../store";

const CalculatorButtons: React.FC = () => {
  const buttons = [
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "×",
    "1",
    "2",
    "3",
    "–",
    "0",
    "AC",
    "=",
    "+",
  ];
  const operators = ["÷", "×", "–", "+"];
  const defaultClasses = "rounded-full w-[50px] h-[50px] p-2 text-white";

  const dispatch = useAppDispatch();

  const buttonPressed = (value: string) => {
    if (operators.includes(value)) {
      dispatch(operatorPressed(value));
    } else if (value === "=") {
      dispatch(equalToPressed());
    } else if (value === "AC") {
      dispatch(clear());
    } else {
      dispatch(digitPressed(value));
    }
    console.log(store.getState());
  };

  const renderedButtons = buttons.map((value: string) => {
    let buttonClasses = " ";
    if (operators.includes(value)) {
      buttonClasses =
        defaultClasses +
        " bg-amber-500 hover:bg-amber-400 focus:ring focus:ring-amber-600 text-2xl";
      return (
        <button
          key={value}
          className={buttonClasses}
          onClick={() => buttonPressed(value)}
        >
          {value}
        </button>
      );
    } else if (value === "=") {
      buttonClasses =
        defaultClasses + " bg-emerald-500 hover:bg-emerald-400 text-2xl";
      return (
        <button
          key={value}
          className={buttonClasses}
          onClick={() => buttonPressed(value)}
        >
          {value}
        </button>
      );
    } else if (value === "AC") {
      buttonClasses = defaultClasses + " bg-red-500 hover:bg-red-400 text-xl";
      return (
        <button
          key={value}
          className={buttonClasses}
          onClick={() => buttonPressed(value)}
        >
          {value}
        </button>
      );
    } else {
      buttonClasses = defaultClasses + " bg-gray-500 hover:bg-gray-400 text-xl";
      return (
        <button
          key={value}
          className={buttonClasses}
          onClick={() => buttonPressed(value)}
        >
          {value}
        </button>
      );
    }
  });

  return <div className="grid grid-cols-4 gap-4">{renderedButtons}</div>;
};

export default CalculatorButtons;
