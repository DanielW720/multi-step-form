import React from "react";
import NextStep from "./nextStep";
import { Subscription } from "../globals/types";

function StepTwo({
  subscription,
  previousStep,
  nextStep,
}: {
  subscription: Subscription;
  previousStep: () => void;
  nextStep: () => void;
}) {
  return (
    <div>
      stepTwo
      <NextStep previousStep={previousStep} nextStep={nextStep} />
    </div>
  );
}

export default StepTwo;
