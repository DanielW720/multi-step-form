import React from "react";
import NextStep from "./nextStep";
import { Subscription } from "../globals/types";

function StepFour({
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
      stepFour
      <NextStep previousStep={previousStep} nextStep={nextStep} />
    </div>
  );
}

export default StepFour;
