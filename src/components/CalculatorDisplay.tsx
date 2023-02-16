import { useAppSelector } from "../hooks";

const CalculatorDisplay: React.FC = () => {
  const valueToDisplay = useAppSelector((state) => state.calculator.display);
  return (
    <div className="pt-6 pb-4 pr-3 text-right text-5xl">
      {valueToDisplay || 0}
    </div>
  );
};

export default CalculatorDisplay;
