import { Step } from "../globals/types";

export default function StepView({
  step,
  setStep,
}: {
  step: Step;
  setStep: (step: Step) => void;
}) {
  return (
    <div className="flex justify-center h-24 items-center">
      {([1, 2, 3, 4] as Step[]).map((num) => (
        <button
          key={num}
          onClick={() => setStep(num)}
          className={`h-8 w-8 flex items-center font-bold justify-center mx-2 rounded-full border-white border-[1px] ${
            num === step || (num === 4 && step === 5)
              ? "bg-lightBlue text-marineBlue"
              : "text-white"
          }`}
        >
          {num}
        </button>
      ))}
    </div>
  );
}
