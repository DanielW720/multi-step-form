import Image from "next/image";
import { Step } from "../globals/types";

export default function StepView({
  step,
  setStep,
}: {
  step: Step;
  setStep: (step: Step) => void;
}) {
  return (
    <div className="flex sm:flex-col relative sm:justify-start sm:p-6 sm:items-start justify-center h-24 items-center sm:h-full sm:w-[280px]">
      <Image
        src="/images/bg-sidebar-desktop.svg"
        alt="Sidebar background"
        fill
        className="hidden sm:inline object-cover rounded-2xl"
      />
      {([1, 2, 3, 4] as Step[]).map((num) => (
        <div className="z-10 flex my-3">
          <button
            key={num}
            onClick={() => setStep(num)}
            className={`h-8 w-8 sm:h-9 sm:w-9 flex items-center font-bold justify-center mx-2 rounded-full border-white border-[1px] ${
              num === step || (num === 4 && step === 5)
                ? "bg-lightBlue text-marineBlue"
                : "text-white"
            }`}
          >
            {num}
          </button>
          <div className="hidden sm:block ml-2">
            <p className="text-xs text-coolGray">{`STEP ${num}`}</p>
            <p className="text-sm text-white font-bold">{stepData[num - 1]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const stepData = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
