"use client";

import { useState } from "react";
import StepOne from "./forms/stepOne";

type Step = 1 | 2 | 3 | 4;

export default function Home() {
  const [step, setStep] = useState<Step>(1);

  return (
    <main className="px-6">
      <div className="flex justify-center h-24 items-center">
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className={`h-8 w-8 text-white flex items-center font-bold justify-center mx-2 rounded-full border-white border-[1px] ${
              num === step && "bg-lightBlue text-marineBlue"
            }`}
          >
            {num}
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg px-6 py-8">
        {step === 1 && <StepOne nextStep={() => setStep(2)} />}
        {/* {step === 1 && <StepOne />}
        {step === 1 && <StepOne />}
        {step === 1 && <StepOne />} */}
      </div>
    </main>
  );
}
