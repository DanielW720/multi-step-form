"use client";

import { useState } from "react";
import StepOne from "./steps/stepOne";
import StepTwo from "./steps/stepTwo";
import StepThree from "./steps/stepThree";
import StepFour from "./steps/stepFour";
import StepFive from "./steps/stepFive";
import { Step, Subscription } from "./globals/types";
import StepView from "./steps/stepView";

export default function Home() {
  const [step, setStep] = useState<Step>(1);
  const [subscription, setSubscription] =
    useState<Subscription>(defaultSubcription);

  return (
    <main className="px-6 relative sm:bg-white sm:flex sm:py-6 sm:rounded-xl sm:h-[600px] sm:w-full max-w-[900px] sm:justify-between">
      <StepView step={step} setStep={setStep} />
      <div className="bg-white rounded-lg px-6 py-8 max-w-[480px] w-full">
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
            setSubscription={setSubscription}
            nextStep={() => setStep(3)}
            previousStep={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <StepThree
            subscription={subscription}
            setSubscription={setSubscription}
            nextStep={() => setStep(4)}
            previousStep={() => setStep(2)}
          />
        )}
        {step === 4 && (
          <StepFour
            subscription={subscription}
            nextStep={() => setStep(5)}
            previousStep={() => setStep(3)}
            goToStepTwo={() => setStep(2)}
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
    active: "arcade",
    arcade: {
      monthly: 9,
      yearly: 90,
      displayName: "Arcade",
      icon: "/images/icon-arcade.svg",
      alt: "Arcade icon",
    },
    advanced: {
      monthly: 12,
      yearly: 120,
      displayName: "Advanced",
      icon: "/images/icon-advanced.svg",
      alt: "Advanced icon",
    },
    pro: {
      monthly: 15,
      yearly: 150,
      displayName: "Pro",
      icon: "/images/icon-pro.svg",
      alt: "Pro icon",
    },
  },
  addOns: {
    onlineService: {
      active: true,
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
