import { Provider } from "react-redux";
import { store } from "../store";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorDisplay from "./CalculatorDisplay";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="h-screen flex items-center overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="m-auto w-fit p-4 rounded-xl shadow-2xl bg-white backdrop-blur-xl">
          <CalculatorDisplay />
          <CalculatorButtons />
        </div>
      </div>
    </Provider>
  );
};

export default App;
