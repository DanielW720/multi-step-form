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
        <button
          key={num}
          onClick={() => setStep(num)}
          className={`h-8 w-8 flex items-center font-bold justify-center mx-2 rounded-full border-white border-[1px] z-10 ${
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
