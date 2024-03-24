"use client";

import { useState } from "react";
import StepOne from "./steps/stepOne";
import StepTwo from "./steps/stepTwo";
import StepThree from "./steps/stepThree";
import StepFour from "./steps/stepFour";
import StepFive from "./steps/stepFive";
import { Subscription } from "./globals/types";

type Step = 1 | 2 | 3 | 4 | 5;

export default function Home() {
  const [step, setStep] = useState<Step>(1);
  const [subscription, setSubscription] =
    useState<Subscription>(defaultSubcription);

  return (
    <main className="px-6">
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
      <div className="bg-white rounded-lg px-6 py-8">
        {step === 1 && (
          <StepOne
            subscription={subscription}
            setSubscription={setSubscription}
            nextStep={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <StepTwo
            subscription={subscription}
            nextStep={() => setStep(3)}
            previousStep={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <StepThree
            subscription={subscription}
            nextStep={() => setStep(4)}
            previousStep={() => setStep(2)}
          />
        )}
        {step === 4 && (
          <StepFour
            subscription={subscription}
            nextStep={() => setStep(5)}
            previousStep={() => setStep(3)}
          />
        )}
        {step === 5 && <StepFive />}
      </div>
    </main>
  );
}

const defaultSubcription: Subscription = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
  },
  billingCycle: "Monthly",
  plan: {
    specialOffer: "2 months free",
    arcade: {
      monthly: 9,
      yearly: 90,
    },
    advanced: {
      monthly: 12,
      yearly: 120,
    },
    pro: {
      monthly: 15,
      yearly: 150,
    },
  },
  addOns: {
    onlineService: {
      active: false,
      displayName: "Online service",
      description: "Access to multiplayer games",
      price: {
        monthly: 1,
        yearly: 10,
      },
    },
    largerStorage: {
      active: false,
      displayName: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
    customizableProfile: {
      active: false,
      displayName: "Customizable profile",
      description: "Custom theme on your profile",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
  },
};
