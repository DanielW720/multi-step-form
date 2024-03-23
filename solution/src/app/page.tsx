"use client";

import { useState } from "react";
import StepOne from "./steps/stepOne";
import StepTwo from "./steps/stepTwo";
import StepThree from "./steps/stepThree";
import StepFour from "./steps/stepFour";
import StepFive from "./steps/stepFive";

type Step = 1 | 2 | 3 | 4 | 5;

export default function Home() {
  const [step, setStep] = useState<Step>(1);

  return (
    <main className="px-6">
      <div className="flex justify-center h-24 items-center">
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className={`h-8 w-8 flex items-center font-bold justify-center mx-2 rounded-full border-white border-[1px] ${
              num === step || (num === 4 && step === 5)
                ? "bg-lightBlue text-marineBlue"
                : "text-white"
            }`}
          >
            {num}
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg px-6 py-8">
        {step === 1 && <StepOne nextStep={() => setStep(2)} />}
        {step === 2 && (
          <StepTwo
            nextStep={() => setStep(3)}
            previousStep={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <StepThree
            nextStep={() => setStep(4)}
            previousStep={() => setStep(2)}
          />
        )}
        {step === 4 && (
          <StepFour
            nextStep={() => setStep(5)}
            previousStep={() => setStep(3)}
          />
        )}
        {step === 5 && <StepFive />}
      </div>
    </main>
  );
}
