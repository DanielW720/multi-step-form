import React from "react";
import NextStep from "./nextStep";
import { Subscription } from "../globals/types";

function StepThree({
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
      stepThree
      <NextStep previousStep={previousStep} nextStep={nextStep} />
    </div>
  );
}

export default StepThree;
